import React, { useEffect } from "react";
import { Route, Switch } from 'react-router-dom'
import './App.css'

import NavBar from './Components/NavBar'
import Footer from './Components/Footer'

import Home from './Pages/Home'
import Error from './Pages/Error'
import Works from './Pages/Works'
import WorksDetail from './Pages/WorkDetail'
import About from './Pages/About'
import Contact from './Pages/Contact'

function App() {
  return (
    <>
      <Route component={ScrollToTop} />
      <NavBar></NavBar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/works" component={Works} />
          <Route exact path="/works/:slug" component={WorksDetail} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route component={Error} />
        </Switch>
      <Footer></Footer>
    </>
  );
}

const ScrollToTop = ({ history, location }) => {
  const dontScrollIntoViewOnPaths = ["/this/that"];

  useEffect(() => {
    if (history.action === "POP") {
      return;
    }

    let { hash, pathname } = location;
    if (hash) {
      let element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    } else if (!dontScrollIntoViewOnPaths.includes(pathname)) {
      window.scrollTo(0, 0);
    }
  });

  return null;
};


export default App;
