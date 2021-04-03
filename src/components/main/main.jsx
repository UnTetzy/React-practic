import './main.css';
import Sidebar from './sidebar/sidebar';
import Page from './page/page';

const MainPage = (props) => {
  return (
    <div className="main-page">
      <div className="container">
        <div className="main-page__inner">
          <Sidebar />
          <Page text={props.text} dialogs={props.dialogs} messages={props.messages} />
        </div>
      </div>
    </div>
  );
}

export default MainPage;