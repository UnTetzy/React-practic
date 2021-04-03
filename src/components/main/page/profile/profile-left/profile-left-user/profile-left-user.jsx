import './profile-left-user.css';
import ProfileLeftAvatar from './profile-left-avatar/profile-left-avatar';
import ProfileLeftSettings from './profile-left-settings/profile-left-settings';

const ProfileLeftUser = () => {
  return (
    <div className="profile__user-avatar">
      <ProfileLeftAvatar />
      <ProfileLeftSettings />
    </div>
  );
}

export default ProfileLeftUser;