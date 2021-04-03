import './dialogs-left.css';
import DialogsUser from './dialogs-user/dialogs-user';

const DialogsLeft = (props) => {

  let dialogsEl = props.dialogs
    .map(user => <DialogsUser id={user.id} name={user.name} />)

  return (
    <div className="dialogs-left">
      {dialogsEl}
    </div>
  );
}

export default DialogsLeft;