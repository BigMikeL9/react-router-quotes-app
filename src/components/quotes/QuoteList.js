import { Fragment } from "react";

import QuoteItem from "./QuoteItem";

import { QuotesList, Sorting, ButtonSort } from "./QuoteListStyles";

const QuoteList = (props) => {
  return (
    <Fragment>
      <QuotesList>
        {props.quotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </QuotesList>
    </Fragment>
  );
};

export default QuoteList;
