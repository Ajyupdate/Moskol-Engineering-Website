import React from "react";
import Jumbotron from './Jumbotron'
import Reviews from "./Reviews"
import Mission from "./Mission"
import CoreValues from "./CoreValues"
function  AboutContent() {
    return(
        <div  >
            
            <Jumbotron/>
            <div>
            <Mission/>
            <CoreValues/>
            <div className="row" id="abt">
                <div className="col-md-6">
                    <h4 className=" aboutHeading text-center">Our Mission</h4>   
                    <p className="vision-mission text-center">
                        To acheive optimum customer satisfacton by ensuring professonalism and cohearance 
                        in providing renewable energy solution, security management, energy consultation 
                        Power design and management and above all obtaining efficient service delievery
                    </p>
                </div>
                <div className=" col-md-6">
                    <h4 className="aboutHeading text-center">Our Vision</h4>   
                    <p className="text-center vision-mission">
                        Our Vision is to be the most preffered and trusted partner in providing quality enginnering
                        services through innovation that leads to optimal growth development
                    </p>
                </div>
               
            </div>
            </div>
            <Reviews/>
            
            
        </div>
    )
}

export default AboutContent