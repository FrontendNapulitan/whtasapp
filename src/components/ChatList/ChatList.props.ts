export interface IChatlistItem{
    img:string,
    name: string,
    status: string,
    lastMessage: string,
    unreadMessages: number,
    read: 'inviato' | 'consegnato' | 'letto'
  }