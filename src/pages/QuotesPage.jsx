import React, { useEffect } from "react";

import QuoteList from "../components/quotes/QuoteList/QuoteList";
import useHttp from "../hooks/useHttp";
import { getAllQuotes } from "../api/api";

import LoadingSpinner from "../components/UI/LoadingSpinner/LoadingSpinner";
import { ContainerCenter } from "../components/UI/ContainerCenter/ContainerCenter";
import { ButtonS } from "../components/UI/Button/ButtonS";
import { ErrorMsg } from "../components/UI/ErrorMsg/ErrorMsg.style";
import NoQuotesFound from "../components/quotes/NoQuotesFound/NoQuotesFound";

// const DUMMY_QUOTES = [
//   { id: "q1", author: "Jojo", text: "The Warldooo" },

//   { id: "q2", author: "Onechaa", text: "Kom ena say " },

//   { id: "q3", author: "Zoro", text: "Onegeryy " },
// ];

const QuotesPage = () => {
  const {
    sendRequest,
    status,
    data: fetchedQuotes,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

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
  //  if there is an error fetching quotes from database
  if (error) {
    return (
      <>
        <ErrorMsg>{` Error Fetching Quotes! -- Error: ${status.error}.`}</ErrorMsg>
        <ButtonS onClick={sendRequest}>Try Again</ButtonS>
      </>
    );
  }

  // -------------
  //  if there are no quotes in database
  if (status === "completed" && (!fetchedQuotes || fetchedQuotes === 0))
    return <NoQuotesFound />;

  // -------------
  // if fetched quotes successfully
  return <QuoteList quotes={fetchedQuotes} />;
};

export default QuotesPage;
