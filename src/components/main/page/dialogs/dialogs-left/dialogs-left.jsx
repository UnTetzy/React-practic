import './dialogs-left.css';
import DialogsUser from './dialogs-user/dialogs-user';

const DialogsLeft = () => {
  return (
    <div className="dialogs-left">
      <DialogsUser id="1" name="Alexander Vetrov" message="Привет пошли гулять" />
      <DialogsUser id="2" name="Sveta Vetrova" message="Привет пошли пошли пошли гулять" />
      <DialogsUser id="3" name="Pasha Vetrov" message="Привет пошли гулять" />
    </div>
  );
}

export default DialogsLeft;