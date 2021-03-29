import './profile-left.css';
import ProfileLeftUser from './profile-left-user/profile-left-user';
import ProfileLeftFriends from './profile-left-friends/profile-left-friends';

const ProfileLeft = () => {
  return (
    <div className="profile-left">
      <ProfileLeftUser />
      <ProfileLeftFriends />
    </div>
  );
}

export default ProfileLeft;