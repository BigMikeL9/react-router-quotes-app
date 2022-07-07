import { useRef } from "react";

import classes from "./NewCommentForm.module.css";

import { ButtonS } from "../../components/UI/Button/ButtonS";

const NewCommentForm = (props) => {
  const commentTextRef = useRef();

  const submitFormHandler = (event) => {
    event.preventDefault();

    // optional: Could validate here

    // send comment to server
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor="comment">Your Comment</label>
        <textarea id="comment" rows="5" ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <ButtonS>Add Comment</ButtonS>
      </div>
    </form>
  );
};

export default NewCommentForm;
