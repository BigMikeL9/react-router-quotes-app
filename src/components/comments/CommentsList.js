import CommentItem from "./CommentItem";
import classes from "./CommentsList.module.css";

const CommentsList = (props) => {
  // -- Fallback if there are no comments
  if (!props.comments) {
    return <p>No Comments Found. Add a comment?</p>;
  }

  return (
    <ul className={classes.comments}>
      {props.comments.map((comment) => (
        <CommentItem key={comment.id} text={comment.text} />
      ))}
    </ul>
  );
};

export default CommentsList;
