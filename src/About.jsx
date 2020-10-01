import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Common from './Common';
import about from './about.png';

const About = () => {
    return(
        <>
        <Common
            name = "About React serviecs offered"
            imgsrc = {about}
            visit = "/contact"
            btname = "Contact Now"
        />
        </>
    )
}

export default About;