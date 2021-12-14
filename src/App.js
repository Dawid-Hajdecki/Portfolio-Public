import React from 'react';

import Header from './components/header';
import SectionAbout from './components/sectionAbout'
import SectionProjectsWeb from './components/sectionProjectsWeb'
import SectionProjectsGraphic from './components/sectionProjectsGraphic'
import SectionSocial from './components/sectionSocial'
import SectionSkills from './components/sectionSkills'

import Background from './bg.jpg';
import './style.css';
import './mobileFriendly.style.css';

const App = () => {
  var secure = false;

  const isSecure = () => {
    console.log(window.location.protocol)
    secure = window.location.protocol === 'https:' ? true : false;
  }

  isSecure();

  //if(!secure) window.location.replace('https://hajdecki.com')

  return (
    <>
      <div className="background" style={{ backgroundImage: `url(${Background})`}}>
        <Header/>
        <SectionProjectsWeb/>
        <SectionProjectsGraphic/>
        <SectionSkills/>
        <SectionAbout/>
        <SectionSocial/>
      </div>
    </>
  );
}

export default App;
