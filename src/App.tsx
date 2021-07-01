import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header } from './components/Header';
import { Search } from './components/Search';
import { WishList } from './components/WishList';
import { Done } from './components/Done';

function App() {

  return (
    <div className="container">
        <Router>
            <Header/>
            <Switch >
              <Route exact path="/">
                <WishList/>
              </Route>
              <Route path="/search">
                <Search/>
              </Route>
              <Route path="/done">
                <Done/>
              </Route>
            </Switch>
          </Router>
      </div>
  );
}

export default App;
