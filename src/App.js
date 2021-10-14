import React from 'react';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Service from './components/pages/Service';
import Tutorial from './components/pages/Tutorial';
import Navbar from './components/inc/Navbar';
import Footer from './components/inc/Footer';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>

    <div>
      <Navbar/>
    <Switch>

    <Route exact path="/">
      <Home/>
    </Route>

    <Route path="/about">
      <About/>
    </Route>

    <Route path="/service">
      <Service/>
    </Route>
    
    <Route path="/tutorial">
      <Tutorial/>
    </Route>
    
    <Route path="/login">
      <Login/>
    </Route>

    <Route path="/register">
      <Register/>
    </Route>

    </Switch>
    <Footer/>

    </div>
    </Router>
  );
}

export default App;
