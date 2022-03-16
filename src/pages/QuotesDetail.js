import { Fragment } from "react";
import { useParams, Route } from "react-router-dom";
import React from "react";
import Comments from "../components/comments/Comments";
import QuoteList from "../components/quotes/QuoteList";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
const DUMMY_DETAILS = [
  { id: a1, author: "anas", text: "Learning react is fun" },
  { id: a2, author: "khan", text: "Learning react is awesome" },
];

const QuoteDetail = () => {
  const params = useParams();
  const quote = DUMMY_DETAILS.find((quote) => quote.id === params.quoteId);
  if (!quote) {
    return <p>No Quote Found</p>;
  }
  return (
    <Fragment>
      <HighlightedQuote ext={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
