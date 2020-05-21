import React, { Component } from 'react';
//import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
// import About from './About';
// import Employment from './Employment';
// import Projects from './Projects';
// import Contact from './Contact';
import Footer from './Components/Footer';

class App extends Component {
  render () {
    return (
      <div>
        <NavBar/>
        {/* <About/>
        <Employment/>
        <Projects/>
        <Contact/> */}
        <Footer/>
      </div>
    )
  }
}

export default App;
