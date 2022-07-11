import React, { useEffect } from "react";
import { useParams, Route, useLocation, useRouteMatch } from "react-router-dom";
import useHttp from "../hooks/useHttp";
import { getSingleQuote } from "../api/api";

import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote/HighlightedQuote";
import { LinkS } from "../components/UI/Link/LinkS";
import { ContainerCenter } from "../components/UI/ContainerCenter/ContainerCenter";
import LoadingSpinner from "../components/UI/LoadingSpinner/LoadingSpinner";

// const DUMMY_QUOTES = [
//   { id: "q1", author: "Jojo", text: "The Warldooo" },

//   { id: "q2", author: "Onechaa", text: "Kom ena say" },

//   { id: "q3", author: "Zoro", text: "Onegeryy " },

//   { id: "q4", author: "Tanjero", text: "Nandaato" },
// ];

const QuoteDetailPage = () => {
  const params = useParams();
  const location = useLocation();
  const match = useRouteMatch();

  // ⭐ always destructure whatever property we need as a dependency for 'useEffect()' hook
  const { quoteId } = params;

  const {
    sendRequest,
    status,
    data: fetchedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  // ---------
  // Get the quote using the dynamic path in the URL (which contains the id of the quote) and the quotes list array.
  // const quote = DUMMY_QUOTES.find(
  //   (quoteData) => quoteData.id === params.quoteId
  // );

  // -------------
  //  while fetching quotes form database
  if (status === "pending") {
    return (
      <ContainerCenter>
        <LoadingSpinner />
      </ContainerCenter>
    );
  }

  // -------------
  if (error) {
    return <p>{error}</p>;
  }

  // ---------
  /* -- Fallback where if we don't find the quote using its 'id'. 
          - Either not the quote is not in Database
          - Or user manually entered a 'quoteId' in the URL that doesn't exist
      Then display a message
  */
  if (!fetchedQuote.text) {
    return <p>Quote Not Found! 😭</p>;
  }

  // ---------

  return (
    <div>
      <HighlightedQuote author={fetchedQuote.author} text={fetchedQuote.text} />

      {/* ---------------- */}
      {/* ⭐⭐
        - Conditionally render the 'Load Comments' button when we are NOT in the comments page of the quote, ie: the URL path does not contain '/comments'.
        - if 'path' matches with the URL --> LOAD the content in between the '<Route/>' component. 
          ⭐⭐
      */}

      <Route path={`${match.path}`} exact>
        <ContainerCenter>
          <LinkS to={`${location.pathname}/comments`}>Load Comments</LinkS>
        </ContainerCenter>
      </Route>

      {/* ---------------- */}
      {/*  Nested Route 👇

      This means that we this route 👇 will open the comments page for a particular quote

      Path can also be like this, but below path is the recommended way 
      
                                 👇👇👇
      <Route path={`/quotes/${params.quoteId}/comments`} exact>
        <Comments />
      </Route>

      ---- 🌟 NOTE -> prefered way. Same as whats shown below but wont update if we change '/quotes' to '/quote' for instance in the main Route in 'App.js'. ----

      <Route path={`/quotes/:quoteId/comments`} exact>
        <Comments />
      </Route>

      USE BELOW 👇👇👇
      
      */}
      <Route path={`${match.path}/comments`} exact>
        <Comments quoteId={params.quoteId} />
      </Route>
    </div>
  );
};

export default QuoteDetailPage;
