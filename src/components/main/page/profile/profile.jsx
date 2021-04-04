import './profile.css';
import ProfileLeft from './profile-left/profile-left';
import ProfileRight from './profile-right/profile-right';

const Profile = (props) => {
  return (
    <section className="profile">
      <div className="profile__user">
        <ProfileLeft />
        <ProfileRight text={props.text} addPost={props.addPost} />
      </div>
    </section>
  );
}

export default Profile;