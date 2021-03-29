import './page.css';
import Profile from './profile/profile';
import Dialogs from './dialogs/dialogs';

const Page = () => {
  return (
    <section className="page">
      {/* <Profile /> */}
      <Dialogs />
    </section>
  );
}

export default Page;