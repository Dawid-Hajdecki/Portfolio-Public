import React from 'react';

import Quizzy from './webProjects/quizzy/quizzy';
import Todo from './webProjects/Todo/todo';
import Boats from './webProjects/boats/boats';
import Professionalism from './webProjects/professionalism/professionalism';
import Hissy from './webProjects/hissy/hissy';
import Freelance from './webProjects/freelance/freelance';
import Portfolio from './webProjects/portfolio/portfolio';

const Section_projectsWeb = () => {
    return (
        <>
            <section className="pb-4">
                <div className="container box-shadow container-box-padding">
                    <h1>Projects - Web</h1>
                    <ul className="nav nav-tabs">
                        <li className="active"><a href="#Quizzy" data-toggle="tab">Quizzy</a></li>
                        <li><a href="#Todo" data-toggle="tab">Todo</a></li>
                        <li><a href="#Boats" data-toggle="tab">Boats</a></li>
                        <li><a href="#Professionalism" data-toggle="tab">Professionalism</a></li>
                        <li><a href="#Hissy" data-toggle="tab">Hissy</a></li>
                        <li><a href="#Freelance" data-toggle="tab">Freelance</a></li>
                        <li><a href="#Portfolio" data-toggle="tab">Portfolio</a></li>
                    </ul>
                    <div className="tab-content margin-top-7px">
                        <div className="tab-pane active" id="Quizzy">
                            <Quizzy/>
                        </div>
                        <div className="tab-pane" id="Todo">
                            <Todo/>
                        </div>
                        <div className="tab-pane" id="Boats">
                            <Boats/>
                        </div>
                        <div className="tab-pane" id="Professionalism">
                            <Professionalism/>
                        </div>
                        <div className="tab-pane" id="Hissy">
                            <Hissy/>
                        </div>
                        <div className="tab-pane" id="Freelance">
                            <Freelance/>
                        </div>
                        <div className="tab-pane" id="Portfolio">
                            <Portfolio/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Section_projectsWeb;
