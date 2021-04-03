import './profile-posts.css';
import PostsForm from './posts-form/posts-form';
import Post from './post/post';

const ProfilePosts = (props) => {

  let textEl = props.text
    .map(post => <Post text={post.text} />)

  return (
    <div className="posts">
      <PostsForm />
      {textEl}
    </div>
  );
}

export default ProfilePosts;