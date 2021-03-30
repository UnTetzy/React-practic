import './dialogs-left.css';
import DialogsUser from './dialogs-user/dialogs-user';

const DialogsLeft = () => {
  return (
    <div className="dialogs-left">
      <DialogsUser message="Привет пошли гулять" />
      <DialogsUser message="Привет пошли пошли пошли гулять" />
      <DialogsUser message="Привет пошли гулять" />
    </div>
  );
}

export default DialogsLeft;