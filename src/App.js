import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Wishlist } from "./components/Wishlist";
import { Completed } from "./components/Completed";
import { Search } from "./components/Search";
import "./App.css";
import "./lib/font-awesome/css/all.min.css";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
      <div className="container">
        <GlobalProvider>
          <Router>
            <Header/>
            <Switch >
              <Route exact path="/">
                <Wishlist/>
              </Route>
              <Route path="/search">
                <Search/>
              </Route>
              <Route path="/completed">
                <Completed/>
              </Route>
            </Switch>
          </Router>
        </GlobalProvider>
      </div>
    );
}

export default App;