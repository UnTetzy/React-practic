import './dialogs-right-form.css';

const DialogsRightForm = () => {
  return (
    <form className="dialogs-right__form" action="#">
      <textarea className="dialogs-right__form_textarea" placeholder="Введите сообщение..."></textarea>
      <button className="dialogs-right__form_btn" type="submit">
        Отправить
      </button>
    </form>
  );
}

export default DialogsRightForm;