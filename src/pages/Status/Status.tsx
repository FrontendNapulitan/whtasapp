import ChatlistStatus from "../../components/ChatListStatus/ChatListStatus";

export const Status = () => {
  return (
    <div>
      <ChatlistStatus 
            img="https://m.media-amazon.com/images/S/pv-target-images/ae4816cade1a5b7f29787d0b89610132c72c7747041481c6619b9cc3302c0101.jpg" 
            lastMessage="11:23" 
            name="Giovanni" 
            read="inviato" 
            addStatus={true}
            status="Sto utilizzando whatsapp"
            unreadMessages={23}
        />
      <ChatlistStatus 
            statusCount={2}
            img="https://m.media-amazon.com/images/S/pv-target-images/ae4816cade1a5b7f29787d0b89610132c72c7747041481c6619b9cc3302c0101.jpg" 
            lastMessage="11:23" 
            name="Giovanni" 
            read="inviato" 
            status="Sto utilizzando whatsapp"
            unreadMessages={23}
        />
    </div>
  );
};

export default Status;
