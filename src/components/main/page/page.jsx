import './page.css';
import Profile from './profile/profile';
import Dialogs from './dialogs/dialogs';
import { Route } from 'react-router';

const Page = () => {
  return (
    <section className="page">
      <Route component={Profile} path="/profile" />
      <Route component={Dialogs} path="/dialogs" />
    </section>
  );
}

export default Page;