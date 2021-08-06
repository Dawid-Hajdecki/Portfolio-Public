import React from 'react';

import Quizzy from './projects/quizzy/quizzy';
import Todo from './projects/Todo/todo';
import Boats from './projects/boats/boats';
import Professionalism from './projects/professionalism/professionalism';
import Hissy from './projects/hissy/hissy';
import Freelance from './projects/freelance/freelance';
import Portfolio from './projects/portfolio/portfolio';

const Section_projects = () => {
    return (
        <>
            <section className="mb-4">
                <div className="container box-shadow container-box-padding margin-top-20px">
                    <h1>Projects</h1>
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

export default Section_projects;
