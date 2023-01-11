import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { getDatabase, ref, onValue } from "firebase/database";
import { push } from "firebase/database";

function useHttp() {
  const [chats, setChats] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const authCtx = useContext(AuthContext);

  const sendMessage = (message) => {
    setIsLoading(true);
    const db = getDatabase();
    const dbRef = ref(db, "chats");
    push(dbRef, {
      message: message,
      displayName: authCtx.user.displayName,
      imageURL: authCtx.user.providerData[0].photoURL,
    });
    setIsLoading(false);
  };

  const getMessages = () => {
    const db = getDatabase();
    const dbRef = ref(db, "chats");
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      const loadedChats = [];
      for (const key in data) {
        loadedChats.push({
          id: key,
          message: data[key].message,
          displayName: data[key].displayName,
          imageURL: data[key].imageURL,
        });
      }
      setIsLoading(false);
      setChats(loadedChats);
    });
  };

  return { chats, sendMessage, getMessages, isLoading, setChats };
}

export default useHttp;
