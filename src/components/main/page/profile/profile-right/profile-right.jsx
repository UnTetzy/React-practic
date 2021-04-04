import './profile-right.css';
import ProfileInfo from './profile-info/profile-info';
import ProfilePosts from './profile-posts/profile-posts';

const ProfileRight = (props) => {
  return (
    <div className="profile-right">
      <ProfileInfo />
      <ProfilePosts text={props.text} addPost={props.addPost} />
    </div>
  );
}

export default ProfileRight;