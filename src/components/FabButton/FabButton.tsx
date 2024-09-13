import './FabButton.css';
import newMessage from '../../assets/icons/newMessage.svg';
const FabButton = () => {
    return (
        <div className="FabButton_wrapper">
            <img src={newMessage} alt="new_message" />
        </div>
    )
}

export default FabButton;