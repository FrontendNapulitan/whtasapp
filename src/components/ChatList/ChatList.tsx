import "./ChatList.css";
import letto from "../../assets/icons/letto.svg";
import consegnato from "../../assets/icons/consegnato.svg";
import inviato from "../../assets/icons/inviato.svg";
import { IChatlistItem } from "./ChatList.props";
const Chatlist = (props: IChatlistItem) => {
  const map = new Map([
    ["inviato", inviato],
    ["consegnato", consegnato],
    ["letto", letto],
  ]);
  return (
    <div className="Chatlist_wrapper" onClick={() => props.click!(props.name!)}>
      {/* INIZIO IMMAGINE UTENTE */}
      <div className="Chatlist_avatarWrapper">
        <img src={props.img} alt="avatar" />
      </div>
      {/* FINE IMMAGINE UTENTE */}
      <div className="Chatlist_nameAndStatus">
        {/* NOME UTENTE */}
        <div className="name">{props.name}</div>
        <div className="status">
          {/* SPUNTA */}
          <img src={map.get(props.read)} alt="stato_lettura" />
          {/* TESTO STATUS UTENTE */}
          <span>{props.status}</span>
        </div>
      </div>
      <div className="Chatlist_timeAndBadge">
        {/* ORARIO ULTIMO MESSAGGIO */}
        <div className="time">{props.lastMessage}</div>
        {/* BADGE MESSAGGI NON LETTI */}
        {props.unreadMessages > 0 ? (
          <div className="badge">{props.unreadMessages}</div>
        ) : null}
      </div>
    </div>
  );
};

export default Chatlist;
