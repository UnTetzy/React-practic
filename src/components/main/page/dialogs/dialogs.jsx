import './dialogs.css';
import DialogsLeft from './dialogs-left/dialogs-left';

const Dialogs = () => {
  return (
    <section className="dialogs">
      <DialogsLeft />
      <div className="dialogs-right">
        dialogs-right
      </div>
    </section>
  );
}

export default Dialogs;