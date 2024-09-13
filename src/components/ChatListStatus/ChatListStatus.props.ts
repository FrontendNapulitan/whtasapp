export interface IChatListStatusProps{
    img:string,
    name: string,
    status: string,
    lastMessage: string,
    unreadMessages: number,
    read: 'inviato' | 'consegnato' | 'letto',
    addStatus?:boolean,
    statusCount?:number
}