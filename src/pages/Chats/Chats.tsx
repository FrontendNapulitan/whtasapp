import { useEffect, useState } from "react";
import Chatlist from "../../components/ChatList/ChatList";
import { IChatlistItem } from "../../components/ChatList/ChatList.props";
import FabButton from "../../components/FabButton/FabButton";
import { chatListItems } from "../../services/chatService/chatService";
import "./Chats.css";

const Chats = () => {
  const [items, setItems]:[IChatlistItem[], Function] = useState([]);
  useEffect(() => {
    ottieniDatoAsincrono();
  }, [])
  
  const ottieniDatoAsincrono = () =>{
    chatListItems.then(datoFinito => {
      setItems(datoFinito);
    }).catch(error => {
      console.error('motivo dell\'errore', error);
    })
  }
  return (
    <div className="Chats_wrapper">
      {
        items.length > 0 ? items.map((listItem: IChatlistItem, index: number) => {
          return <Chatlist {...listItem} key={index} />;
        }) : <span className="loader"></span>
      }
      <FabButton />
    </div>
  );
};
export default Chats;