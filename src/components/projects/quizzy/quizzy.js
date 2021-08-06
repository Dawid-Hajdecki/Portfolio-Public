import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import  { Carousel } from 'react-responsive-carousel';

import ProjectImageQuizzy from './quizzy.jpg';
import ProjectImageQuizzyProfile from './quizzy-profile.jpg';
import ProjectImageQuizzyQuiz from './quizzy-quiz.jpg';
import ProjectImageQuizzyQuizAdmin from './quizzy-quiz-admin.jpg';

const Quizzy = () => {
    return (
        <>
            <div className="project-text">
                <a href="https://afternoon-mesa-24850.herokuapp.com" target="_blank" rel="noreferrer">Web</a>
                <a href="https://github.com/Voxuuu/Quizzy-Public" target="_blank" rel="noreferrer" className="mx-4">Github</a>
            </div>
            <Carousel className="project-image">
                <div>
                    <img src={ProjectImageQuizzy} alt="Home Page"/>
                    <p className="legend">Home Page</p>
                </div>
                <div>
                    <img src={ProjectImageQuizzyProfile} alt="Admin's Profile Page"/>
                    <p className="legend">Admin's Profile Page</p>
                </div>
                <div>
                    <img src={ProjectImageQuizzyQuiz} alt="Quiz Page"/>
                    <p className="legend">Quiz Page</p>
                </div>
                <div>
                    <img src={ProjectImageQuizzyQuizAdmin} alt="Admin's Quiz Page"/>
                    <p className="legend">Admin's Quiz Page</p>
                </div>
            </Carousel>
            <div className="row">
                <div className="grid-center my-2">
                    <div className="ml-4 technology-info">HTML</div>
                </div>
                <div className="grid-center my-2">
                    <div className="ml-4 technology-info">CSS</div>
                </div>
                <div className="grid-center my-2">
                    <div className="ml-4 technology-info">MongoDb</div>
                </div>
                <div className="grid-center my-2">
                    <div className="ml-4 technology-info">Express</div>
                </div>
                <div className="grid-center my-2">
                    <div className="ml-4 technology-info">React.js</div>
                </div>
                <div className="grid-center my-2">
                    <div className="ml-4 technology-info">Node.js</div>
                </div>
            </div>
            <p className="mt-4 project-paragraph-background">
                <p className="overflow-200px ">
                    <b>This is my Honours Project</b>
                    <br/><br/>Throughout the last couple of months, I have focused on developing something that I will be really proud of. To this day, I can say that this project is the best that I have ever created. It allowed me to expand my programming skills and develop my strengths and weaknesses, to the point that I am ready to start looking for a job.
                    <br/><br/>This is an educational quiz app, allowing students and teachers to interact during and outside of classes. After opening this app, you first have to register/log in. When this is done, you can create groups or join existing groups, open and finish quizzes (that exist in that group). After each quiz is finished, you get feedback on each question.
                    <br/><br/>As an admin of a specific group, you are allowed to perform CRUD in any given situation regarding it. This means you can use it in any quiz or any question in that particular group (Editing a question is disabled). You can also view the users that have attempted any quiz made in your group and see their answers.
                    <br/><br/>There are also user groups: Regular and Admin. There are a couple of extra functionalities that an Admin can do. They can ban and unban users, join any group without their password and perform CRUD on any groups, quizzies and questions (Editing a question is disabled). Any user group can perform CRUD (without account deletion) on their account.
                </p>
            </p>
        </>
    );
}

export default Quizzy;
