import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import  { Carousel } from 'react-responsive-carousel';

import ProjectImageTodo from './Todo-Home2.png';
import ProjectImageTodoSecond from './Todo-Second2.png';
import ProjectImageTodoEdit from './Todo-Edit2.png';
import ProjectImageTodoThird from './Todo-Third2.png';

const Quizzy = () => {
    return (
        <>
            <div className="row ml-1">
                <a href="http://todo.hajdecki.com/" className="projects-button mr-3 my-2" target="_blank" rel="noreferrer">Web</a>
                <a href="https://github.com/Voxuuu/Todo-Public" className="projects-button mr-3 my-2" target="_blank" rel="noreferrer">Github</a>
            </div>
            <Carousel className="project-web-image">
                <div>
                    <img src={ProjectImageTodo} alt="Home Page"/>
                    <p className="legend">Home Page</p>
                </div>
                <div>
                    <img src={ProjectImageTodoSecond} alt="Added Todos"/>
                    <p className="legend">Added Todos</p>
                </div>
                <div>
                    <img src={ProjectImageTodoEdit} alt="Editing Todo"/>
                    <p className="legend">Editing Todo</p>
                </div>
                <div>
                    <img src={ProjectImageTodoThird} alt="Edited Todo"/>
                    <p className="legend">Edited Todo</p>
                </div>
            </Carousel>
            <div className="row my-2 ml-1">
                <div className="mr-3 my-2 technology-info">HTML</div>
                <div className="mr-3 my-2 technology-info">CSS</div>
                <div className="mr-3 my-2 technology-info">React.js</div>
            </div>
            <p className="mt-4 project-paragraph-background">
                <p className="overflow-200px ">
                    <b>React Todo</b>
                    <br/><br/>I picked React as the main technology here in order to further develop my technical skills. Because I now finished university, I am trying to establish a good portfolio in a dedicated technology to make it easier for recruters to know what I am most experienced in.
                    <br/><br/>I picked a task that was easy enough that I could remind myself of the basics of React, but also making it a bit challenging to learn while I code this.
                    <br/><br/>While the basic "Todo List" is finished I am thinking of further adding more functionalities into this project before starting a new one. For now I'm thinking of adding the possibility to add members. Members would be able to create tasks and assign other members to tasks. Also comments and a database to hold everything together.
                </p>
            </p>
        </>
    );
}

export default Quizzy;
