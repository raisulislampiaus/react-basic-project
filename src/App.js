import React, { Fragment } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Project from './components/Project';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
      <Navbar/>
      <Switch>
       <Route exact path="/" component={Home}/>
       <Route path="/about" component={About}/>
       <Route path="/contact" component={Contact}/>
       <Route path="/project" component={Project}/>
       
       </Switch>
    </BrowserRouter>
    </Fragment>
  );
}

export default App;
