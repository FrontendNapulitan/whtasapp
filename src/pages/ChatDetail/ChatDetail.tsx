
import { Fragment } from 'react/jsx-runtime';
import './ChatDetail.css';
import backArrow from '../../assets/icons/arrow-back.svg';
import videoCall from '../../assets/icons/videocall.svg';
import call from '../../assets/icons/call.svg';
import kebabMenu from '../../assets/icons/kebabmenu_white.svg';
import { useNavigate, useParams } from 'react-router-dom';
import { chatListItems } from '../../services/chatService/chatService';
import { useEffect, useState } from 'react';
import { IChatlistItem } from '../../components/ChatList/ChatList.props';
const ChatDetail = () => {
    const {chatName} = useParams();
    const navigate = useNavigate();
    const [utenteTrovato, setUtenteTrovato]:[IChatlistItem | undefined, Function] = 
    useState()
    useEffect(() => {
        (
            async () => {
                try {
                    const utenti = await chatListItems;
                    const utenteFind = utenti.find((utente:IChatlistItem) => {
                        return utente.name === chatName
                    });
                    setUtenteTrovato(utenteFind);
                    
                } catch (error) {
                    console.error('guarda, si è verificato un errore tremendo', error);
                }
            }
        )();
    }, [])
    return (
        <Fragment>
            <div className="ChatDetailHeader">
                <img src={backArrow} alt="torna indietro" 
                onClick={() => {
                    navigate('/')
                }}
                />
                {utenteTrovato && 
                <div className="ChatDetailHeaderAvatarWrapper">
                    <img src={utenteTrovato.img} alt="utente" />
                </div>
                
                }
                {chatName}
                <div className="ChatDetailHeaderIconsContainer">
                    <img src={videoCall} alt="video call" />
                    <img src={call} alt="call" />
                    <img src={kebabMenu} alt="menu" />
                </div>
            </div>
            <div className="ChatDetailWrapper">
                <div className="ChatDetailHeaderMyMessageWrapper">
                    <div className="ChatDetailHeaderMyMessage">
                        ciao ciao come stai?
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ChatDetail;