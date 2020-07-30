import React, {useState} from 'react';

import './App.css';

import './app.scss';

import ParticleComponent from './components/particleContainer/particleContainer.component'

import ReactPageScroller from 'react-page-scroller'

import AboutMe from './components/aboutMe/aboutMe.component'

import NavBar from './components/navbar/navbar.component'

import About from './pages/about/about.component'

import Worked from './pages/worked/worked.component'
import Typewriter from 'typewriter-effect';
import ContactTags from './components/contact-tags/contact-tags.component'
import { Element } from 'react-scroll';
import Projects from './pages/projects/projects.component'

function App() {

  var [currentPage,setCurrentPage] = useState(0);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  return (
          <div>

            <div className="navbar">
            <div className="navbar-left">
                Brand Logo


            </div>
            <div className="navbar-right">
            <div className="navbar-item" onClick={()=>{setCurrentPage(2)}}>
                About Me.
            </div>
            <div className="navbar-item">
                About Me.
            </div>
            <div className="navbar-item">
                About Me.
            </div>

            </div>
        </div>

            <ReactPageScroller
            pageOnChange={handlePageChange}
            customPageNumber={currentPage}
            >

            <div className="typewriter">
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString('Hello World!')
                  .callFunction(() => {
                    console.log('String typed out!');
                  })
                  .pauseFor(2500)
                  .start();
              }}
              className="typewriter"
            />
            </div>


            <ParticleComponent />
            <AboutMe />
            <About />
            <Worked />

            <Projects />
            </ReactPageScroller>
            <ContactTags />
          </div>
      );
  };

export default App;
