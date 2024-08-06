import "./ChatList.css";
import letto from "../../assets/icons/letto.svg";
import consegnato from "../../assets/icons/consegnato.svg";
import inviato from "../../assets/icons/inviato.svg";
import { IChatlistItem } from "./ChatList.props";
const Chatlist = (chatListItem: IChatlistItem) => {
  const map = new Map([
    ["inviato", inviato],
    ["consegnato", consegnato],
    ["letto", letto],
  ]);
  return (
    <div className="Chatlist_wrapper">
      {/* INIZIO IMMAGINE UTENTE */}
      <div className="Chatlist_avatarWrapper">
        <img src={chatListItem.img} alt="avatar" />
      </div>
      {/* FINE IMMAGINE UTENTE */}
      <div className="Chatlist_nameAndStatus">
        {/* NOME UTENTE */}
        <div className="name">{chatListItem.name}</div>
        <div className="status">
          {/* SPUNTA */}
          <img src={map.get(chatListItem.read)} alt="stato_lettura" />
          {/* TESTO STATUS UTENTE */}
          <span>{chatListItem.status}</span>
        </div>
      </div>
      <div className="Chatlist_timeAndBadge">
        {/* ORARIO ULTIMO MESSAGGIO */}
        <div className="time">{chatListItem.lastMessage}</div>
        {/* BADGE MESSAGGI NON LETTI */}
        {chatListItem.unreadMessages > 0 ? (
          <div className="badge">{chatListItem.unreadMessages}</div>
        ) : null}
      </div>
    </div>
  );
};

export default Chatlist;
