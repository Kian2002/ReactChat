import { useContext, useState } from "react";
import { URL } from "../../firebase";
import { AuthContext } from "../context/AuthContext";

function useHttp() {
  const [chats, setChats] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const authCtx = useContext(AuthContext);

  const sendMessage = (message) => {
    setIsLoading(true);
    fetch(URL + "chats.json", {
      method: "POST",
      body: JSON.stringify({
        message: message,
        displayName: authCtx.user.displayName,
        imageURL: authCtx.user.providerData[0].photoURL,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setIsLoading(false);
  };

  const getMessages = () => {
    setIsLoading(true);
    fetch(URL + "chats.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
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
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  return { chats, sendMessage, getMessages, isLoading, setChats };
}

export default useHttp;
