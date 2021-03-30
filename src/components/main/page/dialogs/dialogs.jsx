import './dialogs.css';
import DialogsLeft from './dialogs-left/dialogs-left';
import DialogsRight from './dialogs-right/dialogs-right';

const Dialogs = () => {
  return (
    <section className="dialogs">
      <DialogsLeft />
      <DialogsRight />
    </section>
  );
}

export default Dialogs;