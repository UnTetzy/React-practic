import './dialogs-right.css';
import DialogsRightTop from './dialogs-right-top/dialogs-right-top';
import DialogsRightMessages from './dialogs-right-messages/dialogs-right-messages';
import DialogsRightForm from './dialogs-right-form/dialogs-right-form';

const DialogsRight = (props) => {

  return (
    <div className="dialogs-right">
      <div className="dialogs-right__inner">
        <DialogsRightTop />
        <DialogsRightMessages messages={props.messages} />
        <DialogsRightForm />
      </div>
    </div>
  );
}

export default DialogsRight;