import React from 'react';

import VitalBox from './graphicProjects/vitalBox/vitalBox';
import Pingu from './graphicProjects/Pingu/pingu';


const Section_projectsGraphic = () => {
    return (
        <>
            <section className="mb-4">
                <div className="container box-shadow container-box-padding margin-top-20px">
                    <h1>Projects - Graphic</h1>
                    <ul className="nav nav-tabs">
                        <li className="active"><a href="#VitalBox" data-toggle="tab">Vital Box</a></li>
                        <li><a href="#Pingu" data-toggle="tab">Pingu</a></li>
                    </ul>
                    <div className="tab-content margin-top-7px">
                        <div className="tab-pane active" id="VitalBox">
                            <VitalBox/>
                        </div>
                        <div className="tab-pane" id="Pingu">
                            <Pingu/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Section_projectsGraphic;
