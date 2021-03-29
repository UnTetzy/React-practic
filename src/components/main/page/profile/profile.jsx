import './profile.css';

const Profile = () => {
  return (
    <section className="profile">
      <div className="profile__user">
        <div className="profile-left">
          <div className="profile__user-avatar">
            <img className="profile__user-avatar_img" src="https://topspb.tv/768x432/uploaded/news_covers/iotkn6h.jpeg" alt="Avatar"/>
            <div className="profile__user-avatar_settings">
              Redactor etc
            </div>
          </div>
        </div>
        <div className="profile-right">
          <div className="profile__user-info">
            <div className="profile__user-top">
              <h1 className="profile__user-top_name">
                Alexander Vetrov
              </h1>
              <div className="profile__user-top_status">
                Все ок ок дадададаадададададаа
              </div>
            </div>
          </div>
          <div className="posts">
            Posts
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;