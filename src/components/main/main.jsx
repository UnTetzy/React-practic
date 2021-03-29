import './main.css';
import Sidebar from './sidebar/sidebar';
import Page from './page/page';
import { BrowserRouter } from 'react-router-dom';

const MainPage = () => {
  return (
   <BrowserRouter>
      <div className="main-page">
        <div className="container">
          <div className="main-page__inner">
            <Sidebar />
            <Page />
          </div>
        </div>
      </div>
   </BrowserRouter>
  );
}

export default MainPage;