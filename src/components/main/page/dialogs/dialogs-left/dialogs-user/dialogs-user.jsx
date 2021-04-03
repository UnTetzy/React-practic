import './dialogs-user.css';
import { NavLink } from 'react-router-dom';

const DialogsUser = (props) => {

  let path = "/dialogs/" + props.id;

  return (
    <NavLink className="dialogs-user" to={path} activeClassName="active">
      <div className="dialogs-user__img">
        <img className="dialogs-user__avatar" src="https://topspb.tv/768x432/uploaded/news_covers/iotkn6h.jpeg" alt="Avatar"/>
      </div>
      <div className="dialogs-user__content">
        <h4 className="dialogs-user__name">
          {props.name}
        </h4>
        <div className="dialogs-user__message">
          Сообщение
        </div>
      </div>
    </NavLink>
  );
}

export default DialogsUser;