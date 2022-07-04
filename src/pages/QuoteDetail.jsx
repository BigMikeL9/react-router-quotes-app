import React from "react";
import { useParams, Route, Switch } from "react-router-dom";

import Comments from "../components/comments/Comments";

const QuoteDetail = () => {
  const params = useParams();

  console.log(params);

  return (
    <div>
      <h1>Quote Detail Page</h1>
      <p>{params.quoteId}</p>

      {/*  Nested Route 👇

      This means for a particular quote with a quoteId we are looking for its comments. 

      Path can also be like this, but below path is the recommended way 
                                 👇👇👇
      <Route path={`/quotes/${params.quoteId}/comgments`} exact>
        <Comments />
      </Route>
      
      */}
      <Route path={`/quotes/:quoteId/comments`} exact>
        <Comments />
      </Route>
    </div>
  );
};

export default QuoteDetail;
