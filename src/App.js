import React from "react";
import {
    Switch,
    Route,
} from 'react-router-dom';

import Home from "./pages/home/Home";
import Topmenu from "./components/topmenu/Topmenu";
import Subreddit from "./pages/subreddit/Subreddit";

import "./components/HotPost/HotpostStyle.css"
import "./pages/home/HomeStyle.css"
import "./components/HeaderReddit/HeaderRedditStyle.css"
import "./components/topmenu/Topmenu.css"
import './App.css';

function App() {
    return (
        <>
            <Topmenu/>

            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>

                <Route path="/subreddit/r/:subredditId">
                    <Subreddit/>
                </Route>

                <Route path="/subreddit/r/memes">
                    <Subreddit/>
                </Route>

                <Route path="/subreddit/r/news">
                    <Subreddit/>
                </Route>

            </Switch>
        </>
    );
}

export default App;
