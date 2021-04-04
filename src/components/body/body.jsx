import './../../index.css';
import './body.css';
import Header from '../header/header';
import MainPage from '../main/main';
import { BrowserRouter } from 'react-router-dom';

const Body = (props) => {
  return (
    <BrowserRouter>
      <body>
        <Header />
        <MainPage text={props.text} dialogs={props.dialogs} messages={props.messages} addPost={props.addPost} />
      </body>
    </BrowserRouter>
  );
}

export default Body;