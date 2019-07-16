import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ContextController } from "./config/context";
import Categories from "./components/categories";
import "./App.css";
import Category from "./components/category";

function App() {
  return (
    <ContextController>
      <Router>
        <>
          <div className="container App">
            <Switch>
              <Route exact path="/" component={Categories} />
              <Route exact path="/:item" component={Category} />
            </Switch>
          </div>
        </>
      </Router>
    </ContextController>
  );
}

export default App;
