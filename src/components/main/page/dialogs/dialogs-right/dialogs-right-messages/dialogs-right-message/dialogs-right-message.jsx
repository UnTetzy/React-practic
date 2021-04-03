import './dialogs-right-message.css';

const DialogsRightMessage = (props) => {
  return (
    <div className="dialogs-right__messages_message">
      {props.message}
    </div>
  );
}

export default DialogsRightMessage;