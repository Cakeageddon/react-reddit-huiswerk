import React from "react";
import {
Switch,
Route,
} from 'react-router-dom';

import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Subreddit from "./pages/subreddit/Subreddit";

import './App.css';

function App() {
  return (
      <>
          <Header/>

          <Switch>
              <Route exact path="/">
                  <Home/>
              </Route>

              <Route path="/subreddit">
                  <Subreddit/>
              </Route>

          </Switch>
      </>
  );
}

export default App;
