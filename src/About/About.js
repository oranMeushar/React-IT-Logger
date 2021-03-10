import React from 'react'
import './About.css';

const About = () => {
    return (
        <div className ="About">
            <h1>About this App</h1>
            <h3>
                Application for an IT department.
                this application was implemented so that IT technicians can keep track
                of their work and add log of their last work.
            </h3>
            <h4>
                <span className="About-highlight">Example:</span>
                <span className="About-red">Network server #077 is down</span>
                <span className="About-blue">HP Z2 Tower G4 Workstation 9LP61ES is up and running</span>
                <span className="About-highlight">Note:</span>
                <span className="About-note">
                    In order to search for all logs which need attention,
                    you should type 'attention' in the search bar
                </span>
                
            </h4>
            
            
        </div>
    )
}

export default About;
