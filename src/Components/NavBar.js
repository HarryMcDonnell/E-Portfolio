import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About'
import Employment from './Employment';
import Projects from './Projects';
import Contact from './Contact';
const NavBar = () => {
    return (
        <Router>
        <div class="navbar">
            <ul>
                <li>
                    <Link to='/' style={{ textDecoration: 'none'}}>Home</Link>
                </li>
                <li>
                    <Link to='/About' style={{ textDecoration: 'none'}}>About</Link>
                </li>
                <li>
                    <Link to='/Employment' style={{ textDecoration: 'none'}}>Employment</Link>
                </li>
                <li>
                    <Link to='/Projects' style={{ textDecoration: 'none'}}>Projects</Link>
                </li>
                <li>
                    <Link to='/Contact' style={{ textDecoration: 'none'}}>Contact</Link>
                </li>
            </ul>
        </div>
            <Switch>
                <Route exact path='/'>
                    <Home/>
                </Route>
                <Route path='/About'>
                    <About/>
                </Route>
                <Route path='/Employment'>
                    <Employment/>
                </Route>
                <Route path='/Projects'>
                    <Projects/>
                </Route>
                <Route path='Contact'>
                    <Contact/>
                </Route>
            </Switch>
        </Router>
    )
}

export default NavBar;