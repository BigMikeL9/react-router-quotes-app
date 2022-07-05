import { Quote } from "./HighlightedQuoteStyles";

const HighlightedQuote = (props) => {
  return (
    <Quote>
      <p>{props.text}</p>
      <figcaption>{props.author}</figcaption>
    </Quote>
  );
};

export default HighlightedQuote;
