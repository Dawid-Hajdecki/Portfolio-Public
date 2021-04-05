import React, {useState} from 'react';

import ProjectImage from './quizzy.jpg';

const Quizzy = () => {
    const [style, setStyle] = useState({display: 'none'});
    return (
        <>
            <div className="project-image box-shadow" style={{ backgroundImage: `url(${ProjectImage})`}} onMouseEnter={e => {setStyle({display: 'grid'});}} onMouseLeave={e => {setStyle({display: 'none'})}}>
                <div className="row project-text-height">
                    <div className="col" style={style}>
                        <a href="https://afternoon-mesa-24850.herokuapp.com" target="_blank" rel="noreferrer">
                            <div className="project-text grid-center">
                                Web
                            </div>
                        </a>
                    </div>
                    <div className="col" style={style}>
                        <a href="https://github.com/Voxuuu/Quizzy-Public" target="_blank" rel="noreferrer">
                            <div className="project-text grid-center">
                                Github
                            </div>
                        </a>
                    </div>
                </div>
                <div className="row project-technologies-height">
                    <div className="col grid-center" style={style}>
                        <div className="ml-4 technology-info">MERN</div>
                    </div>
                    <div className="col grid-center" style={style}>
                        <div className="ml-4 technology-info">HTML</div>
                    </div>
                </div>
            </div>
            <p className="mt-4">
                <p className="overflow-200px ">
                    <b>This is my Honours Project</b>
                    <br/><br/>Throughout the last couple of months, I have focused on developing something that I will be really proud of. In this day, I can say that this project is the best that I have ever created. It allowed me to expand my programming skills and develop my strengths and weaknesses, to the point that I am ready to start looking for a job.
                    <br/><br/>This is an educational quizz app, allowing students and teachers to interact during and outside of classes. After opening this app, you first have to register/log-in. When this is done, you can create groups of join existing groups, open and finish quizzes(that exist in that group). After each quizz is finished, you get feedback on each question.
                    <br/><br/>As an Admin of a specific group, you are allowed to perform CRUD on that specific group, on any quizz in that group and on any question in any quiz of that group(Editing a question is disabled). You can also view the users that have attempted any quiz of your group and see their answers.
                    <br/><br/>There are also user groups: Regular and Admin. There are a couple extra functionalities that an Admin can do. They can ban and unban users, join any group without their password and perform CRUD on any group, quiz and question(Editing a question is disabled). Any user group can perform CRUD(without account deletion) on their account.
                    <br/><br/>This project is 90% complete. I still want to add a posibility to retrive password, delete account and make sure that it is functional on all screen sizes. Plus some minor changes will happen.
                </p>
                <small>Last Update: 01/04/2021</small>
            </p>
            <div>
                <a href="https://afternoon-mesa-24850.herokuapp.com" target="_blank" rel="noreferrer" className="mr-2">Web</a>
                <a href="https://github.com/Voxuuu/Quizzy-Public" target="_blank" rel="noreferrer">Github</a>
            </div>
        </>
    );
}

export default Quizzy;
