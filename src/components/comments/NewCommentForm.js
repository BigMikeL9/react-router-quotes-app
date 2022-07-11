import { useRef, useEffect } from "react";
import useHttp from "../../hooks/useHttp";
import { addComment } from "../../api/api";

import classes from "./NewCommentForm.module.css";

import { ButtonS } from "../../components/UI/Button/ButtonS";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";
import { ContainerCenter } from "../UI/ContainerCenter/ContainerCenter";

const NewCommentForm = (props) => {
  const commentTextRef = useRef();

  const { sendRequest, status, error } = useHttp(addComment);

  console.log(status);

  // --------------------
  const { onAddComment } = props;

  // -- notify parent 'Comments.js' that we are done adding comment
  // -- rerender comments list components ('Comments.js') to fetch new added comment
  useEffect(() => {
    if (status === "completed" && !error) {
      onAddComment();
    }
  }, [status, error, onAddComment]);

  // --------------------
  const submitFormHandler = (event) => {
    event.preventDefault();

    // optional: Could validate here

    // --- send comment to server
    sendRequest({
      quoteId: props.quoteId,
      commentData: commentTextRef.current.value,
    });

    // --- reset comment textArea
    commentTextRef.current.value = "";
  };

  // --------------------
  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      {status === "pending" && (
        <ContainerCenter>
          <LoadingSpinner />
        </ContainerCenter>
      )}
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor="comment">Your Comment</label>
        <textarea
          id="comment"
          rows="5"
          ref={commentTextRef}
          required
        ></textarea>
      </div>
      <div className={classes.actions}>
        <ButtonS type="submit">Add Comment</ButtonS>
      </div>
    </form>
  );
};

export default NewCommentForm;
