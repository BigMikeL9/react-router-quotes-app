import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import QuoteForm from "../components/quotes/QuoteForm/QuoteForm";
import useHttp from "../hooks/useHttp";
import { addQuote } from "../api/api";

const NewQuotePage = () => {
  const history = useHistory();

  const { sendRequest, status } = useHttp(addQuote);

  useEffect(() => {
    if (status === "completed") {
      // If data is sent successfully to server -> Navigate user to Homepage
      history.push("/quotes");
    }
  }, [status, history]);

  const addQuoteHandler = (quoteData) => {
    // -- send quote to database
    sendRequest(quoteData);
  };

  return (
    <QuoteForm isLoading={status === "pending"} onAddQuote={addQuoteHandler} />
  );
};

export default NewQuotePage;
