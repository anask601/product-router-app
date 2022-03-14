import React from "react";
import QuoteList from "../components/quotes/QuoteList";

const DUMMY_DETAILS = [
  { id: a1, author: "anas", text: "Learning react is fun" },
  { id: a2, author: "khan", text: "Learning react is awesome" },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_DETAILS} />;
};

export default AllQuotes;
