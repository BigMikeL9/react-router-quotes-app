import { QuoteItemS } from "./QuoteItemStyles";

import { Link, useLocation } from "react-router-dom";

const QuoteItem = (props) => {
  // console.log(props);

  let location = useLocation();
  // console.log(location);

  return (
    <QuoteItemS>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>

      {/* Add a nested dynamic route to the URL when an item is clicked */}
      <Link to={`${location.pathname}/${props.id}`} className="btn">
        View Fullscreen
      </Link>
    </QuoteItemS>
  );
};

export default QuoteItem;
