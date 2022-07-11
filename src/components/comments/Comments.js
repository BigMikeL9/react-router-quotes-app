import { useEffect, useState, useCallback } from "react";
import useHttp from "../../hooks/useHttp";
import { getAllComments } from "../../api/api";

import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";
import { ButtonS } from "../../components/UI/Button/ButtonS";
import CommentsList from "./CommentsList";
import LoadingSpinner from "../UI/LoadingSpinner/LoadingSpinner";
import { ContainerCenter } from "../UI/ContainerCenter/ContainerCenter";

const Comments = (props) => {
  const [isAddingComment, setIsAddingComment] = useState(false);

  const { quoteId } = props;

  // ----------
  const {
    sendRequest,
    status,
    data: fetchedComments,
  } = useHttp(getAllComments);

  // ----------
  // render the comments when this components is mounted, and whenever 'isAddingComment' comment state changes, which it does when a comment is submitted
  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  // ----------
  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  // ----------
  // used in 'NewCommentForm.js' child component to refetch comments after we add a new comment
  const addCommentHandler = useCallback(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  // ----------
  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>

      {!isAddingComment && (
        <ButtonS onClick={startAddCommentHandler}>Add a Comment</ButtonS>
      )}

      {isAddingComment && (
        <NewCommentForm onAddComment={addCommentHandler} quoteId={quoteId} />
      )}

      {status === "pending" && (
        <ContainerCenter>
          <LoadingSpinner />
        </ContainerCenter>
      )}

      {status === "completed" && <CommentsList comments={fetchedComments} />}
    </section>
  );
};

export default Comments;
