import "./FabButton.css";
import newMessage from "../../assets/icons/newMessage.svg";
import { IFabButtonProps } from "./FabButton.props";
const FabButton = (props: IFabButtonProps) => {
  return (
    <div
      className="FabButton_wrapper"
      onClick={props.click}
      style={{
        background: props.backgroundColor ?? "var(--primary)",
        right: props.coords?.right ?? "2rem",
        bottom: props.coords?.bottom ?? "2rem",
      }}
    >
      <img src={props.img ?? newMessage} alt="new_message" />
    </div>
  );
};

export default FabButton;
