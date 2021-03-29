import './posts-form.css';

const PostsForm = () => {
  return (
    <form className="posts__form" action="#">
      <textarea className="posts__form-textarea" placeholder="Anything new?"></textarea>
      <button className="posts__form-btn" type="submit">Submit</button>
    </form>
  );
}

export default PostsForm;