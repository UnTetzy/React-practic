import './dialogs-user.css';

const DialogsUser = (props) => {
  return (
    <a className="dialogs-user" href="#">
      <div className="dialogs-user__img">
        <img className="dialogs-user__avatar" src="https://topspb.tv/768x432/uploaded/news_covers/iotkn6h.jpeg" alt="Avatar"/>
      </div>
      <div className="dialogs-user__content">
        <h4 className="dialogs-user__name">
          Alexander Vetrov
        </h4>
        <div className="dialogs-user__message">
          {props.message}
        </div>
      </div>
    </a>
  );
}

export default DialogsUser;