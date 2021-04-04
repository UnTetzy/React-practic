import React from 'react';
import './posts-form.css';

const PostsForm = () => {

  let addTextEl = React.createRef();

  let addPost = () => {
    let text = addTextEl.current.value;
    alert(text);
  }

  return (
    <form className="posts__form" action="#">
      <textarea className="posts__form-textarea" placeholder="Anything new?" ref={addTextEl}></textarea>
      <button className="posts__form-btn" type="submit" onClick={addPost}>Submit</button>
    </form>
  );
}

export default PostsForm;