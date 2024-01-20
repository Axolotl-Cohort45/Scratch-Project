import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Header } from "./Header";
import CreateFootPrints from "./myfootprints";
import SearchPage from "./search";
import WishList from "./wishlist";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={WishList} />
          <Route exact path="/myfootprints" component={CreateFootPrints} />
          <Route exact path="/search-new" component={SearchPage} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
