import React from 'react'
import { Link } from 'react-router-dom';

const InfoBox = ({ text, link, btnText }) => (
    <div className='info-box'>
        {text}
        <Link to={link}>
            {btnText}
        </Link>

    </div>
)

const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, I'm a <span>React ThreeJs Developer</span> 👋
            <br />
            A Software Engineer From Morroco.
        </h1>
    ),
    2: (
        <InfoBox 
            text = "Worked in many projects and picked up many skills along the way."
            link="/about"
            btnText="Learn more"
        />
    ),
    3: (
        <h1>3</h1>
    ),
    4: (
        <h1>4</h1>
    ),
}

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo