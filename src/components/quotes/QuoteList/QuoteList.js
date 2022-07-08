import { useHistory, useLocation } from "react-router-dom";

import QuoteItem from "../QuoteItem/QuoteItem";
import { QuotesList, Sorting, ButtonSort } from "./QuoteListStyles";

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();

  // console.log(history);
  // console.log(location);

  // -- check whether list is in 'ascending' or 'descending' order, from the URL search query parameter
  const queryParams = new URLSearchParams(location.search);

  const isSortAscending =
    queryParams.get("sort") === "ascending" ? true : false;

  // -- sort List
  let quotes = props.quotes;

  if (isSortAscending) {
    quotes = props.quotes.sort((quoteA, quoteB) => {
      if (quoteA.id > quoteB.id) return 1;
      if (quoteA.id < quoteB.id) return -1;
    });

    console.log(quotes);
  } else {
    quotes = props.quotes.sort((quoteA, quoteB) => {
      if (quoteA.id > quoteB.id) return -1;
      if (quoteA.id < quoteB.id) return 1;
    });
    console.log(quotes);
  }

  // -- change URL search query param to 'ascending' or 'descending'
  const changeSortHandler = () => {
    // -- 'history.push()' RE-RENDERS the component. So 'isSortAscending' will get re-evaluated everytime we click the sort button.

    // -- 🟡 Passing a STRING to the 'push()' as argument for URL destination
    // history.push(
    //   `${location.pathname}?sort=${
    //     isSortAscending ? "descending" : "ascending"
    //   }`
    // );

    // -- 🟠 Another way --> Passing an OBJECT to the 'push()' method
    history.push({
      pathname: location.pathname,
      search: `?sort=${isSortAscending ? "descending" : "ascending"}`,
    });

    // 👆 Can use this way for React Router Link, NavLink as well 👆
  };

  return (
    <>
      <Sorting>
        <ButtonSort onClick={changeSortHandler}>
          Sort {isSortAscending ? "Descending" : "Ascending"}
        </ButtonSort>
      </Sorting>

      <QuotesList>
        {quotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </QuotesList>
    </>
  );
};

export default QuoteList;
