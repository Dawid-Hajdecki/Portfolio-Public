import React from 'react';

const Section_social = () => {
    return (
        <>
            <section className="pb-4">
                <div className="container box-shadow container-box-padding">
                    <h1>Social</h1>
                    <div className="row">
                        <div className="col">
                            <h4>Email:</h4><h5>Hajdecki.Dawid@gmail.com</h5>
                            <button className="btn btn-primary" onClick={() =>  navigator.clipboard.writeText('Hajdecki.Dawid@gmail.com')}>Copy</button>
                        </div>
                        <div className="col">
                            <h4>Linked In:</h4><h5><a href="https://linkedin.com/in/dawid-hajdecki-9b761214b/" target="_blank" rel="noreferrer">Dawid Hajdecki</a></h5>
                        </div>
                        <div className="col">
                            <h4>CodeWars:</h4><h5><a href="https://codewars.com/users/VoxPl" target="_blank" rel="noreferrer">Vox</a></h5>
                        </div>
                        <div className="col">
                            <h4>Github:</h4><h5><a href="https://github.com/Voxuuu" target="_blank" rel="noreferrer">Voxuuu</a></h5>
                        </div>
                        <div className="col">
                            <h4>Instagram:</h4><h5><a href="https://instagram.com/rl.dawid/" target="_blank" rel="noreferrer">rl.Dawid</a></h5>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Section_social;
