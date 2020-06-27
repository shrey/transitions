import React from 'react';

import './App.css';

import ParticleComponent from './components/particleContainer/particleContainer.component'

import ReactPageScroller from 'react-page-scroller'

import AboutMe from './components/aboutMe/aboutMe.component'

import NavBar from './components/navbar/navbar.component'

import About from './pages/about/about.component'
function App() {
  return (
          <div>
            <NavBar />
            <ReactPageScroller>

            <ParticleComponent />
            <AboutMe />
            <About />
            </ReactPageScroller>
          </div>
      );
  };

export default App;
