import './post.css';

const Post = (props) => {
  return (
    <div className="post">
      <div className="post__top">
        <div className="post__top-user">
          <div className="post__top-user_avatar">
            <img className="post__top-user_img" src="https://topspb.tv/768x432/uploaded/news_covers/iotkn6h.jpeg" alt="Avatar"/>
          </div>
          <div className="post__top-user_info">
            <h4 className="post__top-user_name">
              Alexander Vetrov
            </h4>
            <div className="post__top-user_time">
              8 of March in 19:04
            </div>
          </div>
        </div>
      </div>
      <div className="post__content">
        {props.message}
      </div>
    </div>
  );
}

export default Post;