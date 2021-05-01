import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Projects from './pages/projects';
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer"
import Resume from "./pages/resume";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Switch>
            <Route exact path={["/"]}>
              <Home />
            </Route>
            <Route exact path={["/home"]}>
              <Home />
            </Route>
            <Route exact path={["/projects"]}>
              <Projects />
            </Route>
            <Route exact path={["/resume"]}>
              <Resume />
            </Route>
          </Switch>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
