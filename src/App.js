/* eslint-disable prettier/prettier */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import SmoothScrollBar from './components/SmoothScrollBar';

export default function App() {
	return (
        <>
        <Router>
            <NavMenu />
            <SmoothScrollBar>
                <Switch>
                    <Route path='/RohanDey/about'>
                        <About />
                    </Route>
                    <Route path='/RohanDey/projects'>
                        <Projects />
                    </Route>
                    <Route path='/RohanDey/contact'>
                        <Contact />
                    </Route>
                    <Route path='/RohanDey'>
                        <Home />
                    </Route>
                </Switch>
                <Footer />
            </SmoothScrollBar>
        </Router>
        </>
    );
}
