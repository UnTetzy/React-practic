import './post.css';

const Post = () => {
  return (
    <div className="post">
      <div className="post__top">
        <div className="post__top-user">
          <h4 className="post__top-user_name">
            Alexander Vetrov
          </h4>
          <div className="post__top-user_time">
            8 of March in 19:04
          </div>
        </div>
      </div>
      <div className="post__content">
        Post content
      </div>
    </div>
  );
}

export default Post;