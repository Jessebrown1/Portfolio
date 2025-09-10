    import React from 'react'
    import Info from '../../src/Components/info';
    import Cv from '../../src/assets/pdf/steve-cv.pdf'
    import { RiDownload2Line } from "react-icons/ri";
    import Stats from '../../src/Components/Stats';
    import { skill } from '../../src/Data';
    import Skillsitem from '../../src/Components/Skillsitem';
    import { resume } from '../../src/Data';
    import Resumeitem from '../../src/Components/Resumeitem';
    import './About.css'

    const About = () => {
    return (
        <main className="section container">
            <section className="about">
                <h2 className="section-title">
                    About <span>Me</span>
                </h2>

                <div className="about-container grid">
                    <div className="about-info">
                        <h3 className="section-subtitle">
                            Personal Infos
                        </h3>

                        <ul className="info-lists grid ">
                            <Info/>
                        </ul>

                        <a href={Cv} download='' className="button">
                            Download Cv

                            <span className="button-icon">
                            <RiDownload2Line />
                            </span>
                        </a>
                    </div>

                    <div className='stats grid'>
                        <Stats />
                    </div>
                </div>
            </section>

            <div className="separator "></div>

            <section className="skills">
                <h3 className="section-subtitle subtitle-center">
                    My Skills
                </h3>

                <div className="skills-container grid">
                    <div className="skills-group">
                        <h3 className="skills-title">
                            Frontend Developer
                        </h3>
                        <div className="skills-items grid">
                            {skill.map((val)=>{
                                if(val.category === 'developer'){
                                    return <Skillsitem key={val.id} {...val}/>;
                                }
                            })}
                        </div>
                    </div>

                    <div className="skills-group">
                        <h3 className="skills-title">
                            Web Designer
                        </h3>

                        <div className="skills-items grid">
                        {skill.map((val)=>{
                                if(val.category === 'designer'){
                                    return <Skillsitem key={val.id} {...val}/>;
                                }
                            })}
                        </div>
                    </div>
                </div>
            </section>

            <div className="separator "></div>
            
            <section className="resume">
            <h3 className="section-subtitle subtitle-center">
                    Experience & Education
                </h3>

                <div className="resume-container grid">
                    <div className="resume-group grid">
                        {resume.map((val) =>{
                            if(val.category === 'experience'){
                                return <Resumeitem key={val.id} {...val}/>;
                            }
                        })}
                    </div>


                    <div className="resume-container grid">
                    <div className="resume-group grid">
                        {resume.map((val) =>{
                            if(val.category === 'education'){
                                return <Resumeitem key={val.id} {...val}/>;
                            }
                        })}
                    </div>
                </div>
                </div>
            </section>

        </main>
    )
    }

    export default About