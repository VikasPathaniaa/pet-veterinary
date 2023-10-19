import React from 'react';
import DogImage from "../../assets/dog.png";
import "../About/About.css";

const About = () => {
  return (
    <div className='about_section'>
        <div className='about_section_img'>
            <img src={DogImage} alt='dog image' width={100} height={125} />
        </div>
        <div>
                <h2 className='aboutus_heading'>  About us  </h2>
                <p className='about_section_tile'>My name is Charlie and I’m going to tell you about our project!</p>
            </div>
    </div>
  )
}

export default About