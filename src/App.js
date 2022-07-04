import { Switch, Route, Redirect } from "react-router-dom";

import Header from "./layout/Header/Header";
import { Main } from "./layout/Main/Main";
import Quotes from "./pages/Quotes";
import QuoteDetail from "./pages/QuoteDetail";
import NewQuote from "./pages/NewQuote";

function App() {
  return (
    <>
      <Header />

      <Main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>

          <Route path="/quotes" exact>
            <Quotes />
          </Route>

          {/* 

         🛑✋ 
         DONT add 'exact' prop when we have a nested Routes. ie: in '<QuoteDetail />' would have a nested Route 👇

          <Route path={`/quotes/${params.quoteId}/comments`} exact>
            <Comments />
          </Route> 

          The reason is that once you put 'exact' on the outer portion of a nested path it can no longer reach that nested path since it is not exact. So in your case above it will not even enter the <QuoteDetail /> , so it definitely will not reach <Comments /> which is nested inside <QuoteDetail /> .
            
          */}
          <Route path="/quotes/:quoteId">
            <QuoteDetail />
          </Route>

          <Route path="/new-quote" exact>
            <NewQuote />
          </Route>
        </Switch>
      </Main>
    </>
  );
}

export default App;
