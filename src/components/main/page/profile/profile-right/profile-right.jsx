import './profile-right.css';
import ProfileInfo from './profile-info/profile-info';
import ProfilePosts from './profile-posts/profile-posts';

const ProfileRight = () => {
  return (
    <div className="profile-right">
      <ProfileInfo />
      <ProfilePosts />
    </div>
  );
}

export default ProfileRight;