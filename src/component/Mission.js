 import React from 'react'

import lightPicture from './image/lightPicture.jpg'

function Mission() {
    return(
        <div >
            <section className="about-us ">
                <div className="container">
                    <h1 className="title text-center">Who we Are</h1>
                    <div className="row">
                        <div className="col-md-6 aboutColumn">
                            <p className="about-title">Why you should choose us</p>    
                            <p className="about-paragraph">When you choose Moskol engineering
                            Our Team will walk you through the process of detailing your 
                            current need with regards to solar system installations or security management
                            
                            and then compare it to your home’s and office requirement to determine potential 
                            ROI and advise you according to your budget.
                            Our proposals are easy to read and understand, 
                            providing clarity on what you need to make an informed 
                            decision about which of our service is right for you. 
                            We insist on a no-pressure approach, and we are happy to 
                            answer as many questions you can come up with.
                            </p>
                        </div>
                        <div className="col-md-6 ligthDiv">
                            <img src={lightPicture} alt="bulb light" className="img-fluid mt-5"/>
                        </div>

                    </div>
                </div>
                
            </section>

            




            
        </div>
    )
}
export default Mission