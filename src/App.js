import React from 'react';
import Profile from './pages/profile/profile';
import Projects from './pages/projects';
import Contact from './pages/contact';
import AboutMe from './pages/about-me';

function App() {
  return (
    <>
      <div className="container">
        <Profile />
      </div>
      <div className="p20">
        <div className="row">
          <div className="double-column">
            <AboutMe />
            <Projects />
          </div>
          <div className="column">
            <Contact />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
