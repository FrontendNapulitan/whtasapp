import { IChatlistItem } from "../../components/ChatList/ChatList.props";

export const chatListItems:Promise<IChatlistItem[]> = new Promise((resolve, reject)=> {
    setTimeout(() => {
        resolve( [
            {
              img: "images/avatar.png",
              name: "Martin Torff",
              status: "Let's Meet",
              lastMessage: "11:48",
              unreadMessages: 127,
              read: "inviato",
            },
            {
              img: "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
              name: "Giovanni Muciaccia",
              status: "Forbici dalla punta arrotondata",
              lastMessage: "03:23",
              unreadMessages: 0,
              read: "consegnato",
            },
            {
              img: "https://t4.ftcdn.net/jpg/08/04/35/67/360_F_804356715_mpkH5P704pCe6MJ5tAGvjymNt4PFLPze.jpg",
              name: "Antonio Gargiulo",
              status: "Non mi disturbate",
              lastMessage: "14:15",
              unreadMessages: 3,
              read: "consegnato",
            },
            {
              img: "https://media.istockphoto.com/id/1181396841/photo/trendy-african-man.jpg?s=612x612&w=0&k=20&c=89F1KJHsttzyiuaJ5M0Rd4tLgiX7ooYDoPw7oNYZ5UI=",
              name: "Nazaro Esposito",
              status: "Prestami 1000 euro",
              lastMessage: "2:15",
              unreadMessages: 1,
              read: "letto",
            },
            {
              img: "https://media.istockphoto.com/id/1371301832/photo/excited-young-man-wearing-denim-shirt.jpg?s=612x612&w=0&k=20&c=AtgXnYVh2GpkMGlLwjIYDAwQ6fFvr0ii591bsEaJyLk=",
              name: "Umberto Eco",
              status: "CIAO...Ciao...ciao...ao",
              lastMessage: "12:31",
              unreadMessages: 0,
              read: "consegnato",
            },
            {
              img: "https://us.123rf.com/450wm/mangostar/mangostar2211/mangostar221100017/193955323-portrait-of-joyful-african-american-man-pointing-at-camera-happy-young-male-model-with-short-dark.jpg?ver=6",
              name: "Roberta Scabelli",
              status: "Andata a quel paese",
              lastMessage: "00:03",
              unreadMessages: 824,
              read: "inviato",
            },
            {
              img: "https://us.123rf.com/450wm/mangostar/mangostar2211/mangostar221100017/193955323-portrait-of-joyful-african-american-man-pointing-at-camera-happy-young-male-model-with-short-dark.jpg?ver=6",
              name: "Roberta Scabelli",
              status: "Andata a quel paese",
              lastMessage: "00:03",
              unreadMessages: 824,
              read: "inviato",
            },
            {
              img: "https://us.123rf.com/450wm/mangostar/mangostar2211/mangostar221100017/193955323-portrait-of-joyful-african-american-man-pointing-at-camera-happy-young-male-model-with-short-dark.jpg?ver=6",
              name: "Roberta Scabelli",
              status: "Andata a quel paese",
              lastMessage: "00:03",
              unreadMessages: 824,
              read: "letto",
            },
            {
              img: "https://us.123rf.com/450wm/mangostar/mangostar2211/mangostar221100017/193955323-portrait-of-joyful-african-american-man-pointing-at-camera-happy-young-male-model-with-short-dark.jpg?ver=6",
              name: "Roberta Scabelli",
              status: "Andata a quel paese",
              lastMessage: "00:03",
              unreadMessages: 824,
              read: "consegnato",
            },
            {
              img: "https://us.123rf.com/450wm/mangostar/mangostar2211/mangostar221100017/193955323-portrait-of-joyful-african-american-man-pointing-at-camera-happy-young-male-model-with-short-dark.jpg?ver=6",
              name: "Roberta Scabelli",
              status: "Andata a quel paese",
              lastMessage: "00:03",
              unreadMessages: 824,
              read: "inviato",
            }
      
          ])
    }, 3000);
})