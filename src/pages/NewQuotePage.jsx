import React from "react";
import { useHistory } from "react-router-dom";

import QuoteForm from "../components/quotes/QuoteForm/QuoteForm";

const NewQuotePage = () => {
  const history = useHistory();

  const addQuoteHandler = (quoteData) => {
    // send data to server
    console.log(quoteData);

    // If data is sent successfully to server -> Imperatively Navigate user to Homepage using 'useHistory' hook
    history.push("/quotes");
  };

  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuotePage;
