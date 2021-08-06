import React from 'react';

const Header = () => {
    return (
        <>
            <header className="box-shadow my-4 grid-center">
                <div className="container">
                    <div className="grid-center height-300px text-center">
                        <div>
                            <h1>Dawid Hajdecki</h1>
                            <h3>Junior Full-Stack Web Developer</h3>
                            <h5>Future Software Developer</h5>
                        </div>
                        <a href="https://drive.google.com/file/d/17qaGAhEm4Uivui8lIwT1HAHlp7n4ph6c/view?usp=sharing" target="_blank" rel="noreferrer">
                            <h4 className="">Online CV</h4>
                        </a>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;