import React from "react";
import { Switch, Route } from "react-router-dom";
import { Header } from "./Header";
import DisplayFootPrints from "./myfootprints";
import SearchPage from "./search";
import EditFootPrints from "./EditFootPrints";
import WishList from "./wishlist";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={DisplayFootPrints} />
          <Route exact path="/edit" component={EditFootPrints} />
          <Route exact path="/wishlist" component={WishList} />
          <Route exact path="/search-new" component={SearchPage} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
