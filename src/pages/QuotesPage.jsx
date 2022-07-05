import React from "react";

import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "Jojo", text: "The Warldooo" },

  { id: "q2", author: "Onechaa", text: "Kom ena say " },

  { id: "q3", author: "Zoro", text: "Onegeryy " },
];

const QuotesPage = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default QuotesPage;
