    import React from 'react'
    import Profile from "../../src/assets/home.jpg"
    import {Link} from 'react-router'
    import { RiArrowRightLine } from "react-icons/ri";
    import './Home.css'

    const Home = () => {
    return (
        <section className="home-container grid">
            <img src={Profile} alt="" className="home-img" />

            <div className="home-content">
                <h1 className="home-title"><span>I'm Isaac Bentum</span> <br /> Web Developer</h1>
                
                <p className="home-description">
                I am a Ghana-based front-end developer skilled in building modern, responsive, and user-focused websites. I combine clean design with functional interfaces to deliver accessible,
                efficient, and impactful digital solutions.
                </p>
            
                <Link to='about' className='button'>
                    More About Me
                    <span className="button-icon">
                    <RiArrowRightLine />
                    </span>
                </Link>
            </div>

            <div className="color-block"></div>
        </section>
    )
    }

    export default Home