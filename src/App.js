import React from 'react'
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

export default App;
