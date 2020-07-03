import React from 'react';

import './App.css';

import ParticleComponent from './components/particleContainer/particleContainer.component'

import ReactPageScroller from 'react-page-scroller'

import AboutMe from './components/aboutMe/aboutMe.component'

import NavBar from './components/navbar/navbar.component'

import About from './pages/about/about.component'

import Worked from './pages/worked/worked.component'

import ContactTags from './components/contact-tags/contact-tags.component'

import Projects from './pages/projects/projects.component'
import { width } from '@material-ui/system';

function App() {
  return (
          <div>
            <NavBar />

            {/* <ReactPageScroller> */}
            <div style={{height: "100vh",}}>
            <ParticleComponent />
            </div>
            <div style={{height: "100vh",}}>
            <AboutMe />
            </div>
            <div style={{height: "100vh",}}>
            <About />
            </div>
            <div style={{height: "100vh",}}>
            <Worked />
            </div>
            <div style={{height: "100vh",}}>
            <Projects />
            </div>

            <ContactTags />




            {/* </ReactPageScroller> */}
          </div>
      );
  };

export default App;
