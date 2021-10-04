import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link
} from "react-router-dom";
import './App.css';
import { MoveMoney } from "./pages/MoveMoney";
import { ExploreOptions } from "./pages/ExploreOptions";
import { HelpAndSupport } from "./pages/HelpAndSupport";
import { Accounts } from "./pages/Accounts";
import { Footer } from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="Container">
        <header>
          <nav>
            <ul>
              <li>
                <Link exact to=""><img src="//logo.clearbit.com/spotify.com?size=10&greyscale=true" /></Link>
              </li>
              <li>
                <NavLink exact activeClassName="active" to="/">Accounts</NavLink>
              </li>
              <li>
                <NavLink exact activeClassName="active" to="/move-money">Move Money</NavLink>
              </li>
              <li>
                <NavLink exact activeClassName="active" to="/explore-options">Explore Options</NavLink>
              </li>
              <li>
                <NavLink exact activeClassName="active" to="/help-support">Help & Support</NavLink>
              </li>
            </ul>
          </nav>
        </header>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/move-money">
            <MoveMoney />
          </Route>
          <Route path="/explore-options">
            <ExploreOptions />
          </Route>
          <Route path="/help-support">
            <HelpAndSupport />
          </Route>
          <Route path="/">
            <Accounts />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
