import './main.css';
import Sidebar from './sidebar/sidebar';
import Page from './page/page';

const MainPage = () => {
  return (
    <div className="main-page">
      <div className="container">
        <div className="main-page__inner">
          <Sidebar />
          <Page />
        </div>
      </div>
    </div>
  );
}

export default MainPage;