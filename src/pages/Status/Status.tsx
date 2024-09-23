import ChatlistStatus from "../../components/ChatListStatus/ChatListStatus";
import FabButton from "../../components/FabButton/FabButton";
import pencil from '../../assets/icons/pencil.svg';
import camera from '../../assets/icons/camera.svg';
import './Status.css';
export const Status = () => {
  return (
    <div className="Chats_wrapper">
      <ChatlistStatus 
            img="https://m.media-amazon.com/images/S/pv-target-images/ae4816cade1a5b7f29787d0b89610132c72c7747041481c6619b9cc3302c0101.jpg" 
            lastMessage="11:23" 
            name="Giovanni" 
            read="inviato" 
            addStatus={true}
            status="Sto utilizzando whatsapp"
            unreadMessages={23}
        />
        <div className="statusTitle">
          Aggiornamenti recenti
        </div>
      <ChatlistStatus 
            statusCount={2}
            img="https://m.media-amazon.com/images/S/pv-target-images/ae4816cade1a5b7f29787d0b89610132c72c7747041481c6619b9cc3302c0101.jpg" 
            lastMessage="11:23" 
            name="Giovanni" 
            read="inviato" 
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
      <ChatlistStatus 
            statusCount={2}
            img="https://m.media-amazon.com/images/S/pv-target-images/ae4816cade1a5b7f29787d0b89610132c72c7747041481c6619b9cc3302c0101.jpg" 
            lastMessage="11:23" 
            name="Giovanni" 
            read="inviato" 
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
      <ChatlistStatus 
            statusCount={2}
            img="https://m.media-amazon.com/images/S/pv-target-images/ae4816cade1a5b7f29787d0b89610132c72c7747041481c6619b9cc3302c0101.jpg" 
            lastMessage="11:23" 
            name="Giovanni" 
            read="inviato" 
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
      <ChatlistStatus 
            statusCount={2}
            img="https://m.media-amazon.com/images/S/pv-target-images/ae4816cade1a5b7f29787d0b89610132c72c7747041481c6619b9cc3302c0101.jpg" 
            lastMessage="11:23" 
            name="Giovanni" 
            read="inviato" 
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
      <ChatlistStatus 
            statusCount={2}
            img="https://m.media-amazon.com/images/S/pv-target-images/ae4816cade1a5b7f29787d0b89610132c72c7747041481c6619b9cc3302c0101.jpg" 
            lastMessage="11:23" 
            name="Giovanni" 
            read="inviato" 
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
      <ChatlistStatus 
            statusCount={2}
            img="https://m.media-amazon.com/images/S/pv-target-images/ae4816cade1a5b7f29787d0b89610132c72c7747041481c6619b9cc3302c0101.jpg" 
            lastMessage="11:23" 
            name="Giovanni" 
            read="inviato" 
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
      <ChatlistStatus 
            statusCount={2}
            img="https://m.media-amazon.com/images/S/pv-target-images/ae4816cade1a5b7f29787d0b89610132c72c7747041481c6619b9cc3302c0101.jpg" 
            lastMessage="11:23" 
            name="Giovanni" 
            read="inviato" 
            status="Sto utilizzando whatsapp"
            unreadMessages={23}
        />

      <FabButton 
        img={pencil}
        click={() => {
          console.log('ho cliccato la matitina');
        }}
        backgroundColor="var(--secondary)"
        coords={{
          bottom: '6rem',
          right: '2rem'
        }}
      />
      <FabButton 
      img={camera}
      click={() => {
        console.log('ho cliccato la camera');
      }}
      backgroundColor="var(--primary)"
      coords={{
        bottom: '2rem',
        right: '2rem'
      }}/>
    </div>
  );
};

export default Status;
