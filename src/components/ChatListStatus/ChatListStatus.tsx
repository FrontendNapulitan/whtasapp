import "./ChatListStatus.css";
import { IChatListStatusProps } from "./ChatListStatus.props";
const ChatlistStatus = (chatListItem: IChatListStatusProps) => {
  return (
    <div className="Chatlist_wrapper">
      {/* INIZIO IMMAGINE UTENTE */}
      <div className="avatarWrapper">
        <div
          className="Chatlist_avatarWrapperStatus"
          // style={
          //   chatListItem.statusCount! > 0
          //     ? { border: "4px dashed var(--secondary)" }
          //     : {}
          // }
        >
          <img src={chatListItem.img} alt="avatar" />
        </div>
        {chatListItem.addStatus ? (
          <div className="addStatusImg">
            <svg
              width="10"
              height="10"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line y1="6" x2="12" y2="6" stroke="#EEF0F1" stroke-width="2" />
              <line x1="6" y1="12" x2="6" stroke="#EEF0F1" stroke-width="2" />
            </svg>
          </div>
        ) : null}
      </div>
      {/* FINE IMMAGINE UTENTE */}
      <div className="Chatlist_nameAndStatus">
        {/* NOME UTENTE */}
        <div className="name">Il mio stato</div>
        <div className="status">
          <span>Tocca per aggiornare lo stato</span>
        </div>
      </div>
    </div>
  );
};

export default ChatlistStatus;
