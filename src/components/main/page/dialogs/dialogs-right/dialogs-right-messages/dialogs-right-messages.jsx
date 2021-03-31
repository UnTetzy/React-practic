import './dialogs-right-messages.css';
import DialogsRightMessage from './dialogs-right-message/dialogs-right-message';

const DialogsRightMessages = () => {
  return (
    <div className="dialogs-right__messages">
      <DialogsRightMessage message="Lalala" />
      <DialogsRightMessage message="Papapa" />
    </div>
  );
}

export default DialogsRightMessages;