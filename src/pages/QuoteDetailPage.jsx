import React from "react";
import { useParams, Route } from "react-router-dom";

import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  { id: "q1", author: "Jojo", text: "The Warldooo" },

  { id: "q2", author: "Onechaa", text: "Kom ena say " },

  { id: "q3", author: "Zoro", text: "Onegeryy " },
];

const QuoteDetailPage = () => {
  const params = useParams();

  console.log(params);

  // Get the quote using the dynamic path in the URL (which contains the id of the quote) and the quotes list array.
  const quote = DUMMY_QUOTES.find(
    (quoteData) => quoteData.id === params.quoteId
  );

  // ---------
  /* -- Fallback where if we don't find the quote using its 'id'. 
          - Either not the quote is not in Database
          - Or user manually entered a 'quoteId' in the URL that doesn't exist
      Then display a message
  */
  if (!quote) {
    return <p>Quote Not Found! 😭</p>;
  }
  // ---------

  return (
    <div>
      <HighlightedQuote author={quote.author} text={quote.text} />

      {/*  Nested Route 👇

      This means for a particular quote with a quoteId we are looking for its comments. 

      Path can also be like this, but below path is the recommended way 
                                 👇👇👇
      <Route path={`/quotes/${params.quoteId}/comments`} exact>
        <Comments />
      </Route>
      
      */}
      <Route path={`/quotes/:quoteId/comments`} exact>
        <Comments />
      </Route>
    </div>
  );
};

export default QuoteDetailPage;
