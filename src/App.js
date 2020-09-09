import React from 'react';
import { Provider } from 'react-redux';
import './configs/reactotronConfig';
import Profile from './pages/profile/profile';
import Projects from './pages/projects';
import Contact from './pages/contact';
import Skills from './pages/skills';
import AboutMe from './pages/about-me';
import store from './store';

function App() {
  return (
    <>
      <Provider store={store}>
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
              <Skills />
            </div>
          </div>
        </div>
      </Provider>
    </>
  );
}

export default App;
