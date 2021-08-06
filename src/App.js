import React from 'react';

import Header from './components/header';
import SectionAbout from './components/sectionAbout'
import SectionProjects from './components/sectionProjects'
import SectionSocial from './components/sectionSocial'
import SectionSkills from './components/sectionSkills'

import Background from './bg.jpg';
import './style.css';
import './mobileFriendly.style.css';

const App = () => {

  const isSecure = () => {
    return window.location.protocol === 'https:';
  }

  if(!isSecure) window.location.replace('https://hajdecki.com')

  return (
    <>
      <div className="background" style={{ backgroundImage: `url(${Background})`}}>
        <Header/>
        <SectionProjects/>
        <SectionSkills/>
        <SectionAbout/>
        <SectionSocial/>
      </div>
    </>
  );
}

export default App;
