export interface IFabButtonProps{
    img?: string;
    click?:() => void,
    backgroundColor?: string,
    coords?:{
        bottom:string,
        right:string
    }
}