import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootswatch/dist/darkly/bootstrap.min.css";

import { Header } from './components/Header';
import { Search } from './components/Search';
import { WishList } from './components/WishList';
import { Done } from './components/Done';

import {ContextProvider} from './contexts/Context'

function App() {

  return (
    <div className="container">
      <ContextProvider>
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
      </ContextProvider>
      </div>
  );
}

export default App;
