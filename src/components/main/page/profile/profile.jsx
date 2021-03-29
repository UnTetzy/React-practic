import './profile.css';
import ProfileLeft from './profile-left/profile-left';
import ProfileRight from './profile-right/profile-right';

const Profile = () => {
  return (
    <section className="profile">
      <div className="profile__user">
        <ProfileLeft />
        <ProfileRight />
      </div>
    </section>
  );
}

export default Profile;