import './profile-posts.css';
import PostsForm from './posts-form/posts-form';
import Post from './post/post';

const ProfilePosts = () => {
  return (
    <div className="posts">
      <PostsForm />
      <Post />
    </div>
  );
}

export default ProfilePosts;