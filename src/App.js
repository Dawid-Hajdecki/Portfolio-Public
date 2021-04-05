import React from 'react';

import Header from './components/header';
import SectionAbout from './components/sectionAbout'
import SectionProjects from './components/sectionProjects'
import SectionSocial from './components/sectionSocial'

import Background from './bg.jpg';
import './style.css';
import './mobileFriendly.style.css';

const App = () => {
  return (
    <>
      <div className="background" style={{ backgroundImage: `url(${Background})`}}>
        <Header/>
        <SectionAbout/>
        <SectionProjects/>
        <SectionSocial/>
      </div>
    </>
  );
}

export default App;
