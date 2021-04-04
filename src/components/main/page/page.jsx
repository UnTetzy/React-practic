import './page.css';
import Profile from './profile/profile';
import Dialogs from './dialogs/dialogs';
import { Route } from 'react-router';

const Page = (props) => {
  return (
    <section className="page">
      {/* <Route component={Profile} path="/profile" />
      <Route component={Dialogs} path="/dialogs" /> */}

      <Route path="/profile" render={() => <Profile text={props.text} addPost={props.addPost} />} />
      <Route path="/dialogs" render={() => <Dialogs dialogs={props.dialogs} messages={props.messages} />} />
    </section>
  );
}

export default Page;