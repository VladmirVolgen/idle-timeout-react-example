import React, { useState, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import IdleTimeout from "./idle-timeout/IdleTimeout";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Login";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const renderApp = () => {
    if (!isAuthenticated)
      return <Login setIsAuthenticated={setIsAuthenticated} />;
    return (
      <Router>
        <Route exact path="/">
          <IdleTimeout setIsAuthenticated={setIsAuthenticated}>
            <div className="App">
              <h1>Authenticated app home</h1>
            </div>
          </IdleTimeout>
        </Route>
        <Route exact path="/another-route">
          <div>
            <h1>This is another route</h1>
          </div>
        </Route>
      </Router>
    );
  };

  return <Fragment>{renderApp()}</Fragment>;
}

export default App;
