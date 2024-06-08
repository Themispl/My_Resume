import React from "react"; 
import './Header.css';
import CTA from './CTA';
import ME from '../../assets/me.png'
import HeaderSocials from "./HeaderSocials"

const Header= () =>{
    return(
       <header>
        <div className="container header_container">
            <h5>Hello I'am</h5>
            <h1>Efthimios Pilarinos</h1>
            <h5 className="text-light">Full Stack Developer</h5>
            <CTA/>
            <HeaderSocials/>
            <div className="coverltr">
                <p>
                Passionate Junior Full-stack Developer offering strong foundation in 
                both front-end and back-end technologies, with comprehensive 
                understanding of the software development lifecycle and hands-on 
                experience in building end-to-end web applications. Proficient in front-end technologies such as JavaScript, Angular, and CSS frameworks, as 
                well as back-end technologies such as C#, Java, and SQL databases. 
                Strong collaboration and communication skills, enabling effective 
                teamwork and client interaction. Seeking challenging projects to utilize 
                my full-stack development expertise and contribute to the success of 
                dynamic organizations.  
                </p>
                </div>
           { /* <div className="me">
                <img src={ME} alt=""/>
            </div> */}

            <a href="#contact" className="scroll_down">Scroll Down</a>
        </div>
       </header>
    )
}

export default Header