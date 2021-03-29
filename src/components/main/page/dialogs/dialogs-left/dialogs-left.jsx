import './dialogs-left.css';
import DialogsUser from './dialogs-user/dialogs-user';

const DialogsLeft = () => {
  return (
    <div className="dialogs-left">
      <DialogsUser />
      <DialogsUser />
      <DialogsUser />
    </div>
  );
}

export default DialogsLeft;