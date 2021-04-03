import './dialogs-right-messages.css';
import DialogsRightMessage from './dialogs-right-message/dialogs-right-message';

const DialogsRightMessages = (props) => {

  let messagesEl = props.messages
    .map(message => <DialogsRightMessage message={message.message} />)

  return (
    <div className="dialogs-right__messages">
      {messagesEl}
    </div>
  );
}

export default DialogsRightMessages;