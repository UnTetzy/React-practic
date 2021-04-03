import './dialogs.css';
import DialogsLeft from './dialogs-left/dialogs-left';
import DialogsRight from './dialogs-right/dialogs-right';

const Dialogs = (props) => {
  
  return (
    <section className="dialogs">
      <DialogsLeft dialogs={props.dialogs} />
      <DialogsRight messages={props.messages} />
    </section>
  );
}

export default Dialogs;