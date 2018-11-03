import React, { Component } from "react";
import NavBar from "./components/navbar";
import Feed from "./components/feed";
import Articles from "./components/articles";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Switch>
            <Route path="/" component={Feed} exact />
            <Route path="/articles" component={Articles} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
