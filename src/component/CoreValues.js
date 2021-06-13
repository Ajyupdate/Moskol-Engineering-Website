import React from 'react'
import Transparency from './image/Transparency.jpg'
import customerSatisfaction from './image/customerSatisfaction.jpg'
import Reliabilty from './image/Reliabilty.jpg'

import Accountability from './image/Accountability.jpg'
function CoreValues() {
    return (
        <div>
            <section >
                <h1 className="title text-center">Our Core Values</h1>
                <div className="container about-us-CoreValues">
                    
                    


                    <div className="row text-center">
                        <div className="col-md-3">
                                
                            <div>
                                <img src={Transparency} alt="transparency icon"/>   
                            </div>
                            <div >
                                <p>Transparency </p>
                            </div>
                        </div>


                        <div className="col-md-3">
                            
                                
                            <div >
                                <img src={Reliabilty} alt="reliability icon"/>
                            </div>
                            <div >
                                <p>Reliabilty </p>
                            </div>
                           
                         
                        </div>

                        

                        <div className="col-md-3">
                            
                                
                            <div >
                                <img src={Accountability} alt="accountability icon"/>
                            </div>
                            <div>
                                <p>Accountability </p>
                            </div>
                         
                        </div>
                        <div className="col-md-3">
                           
                            <div ><img src={customerSatisfaction} alt="customer satisfaction icon"/></div>
                            <div >
                                <p> Customer Satisfaction </p>
                            </div>
                            
                        </div>

                        

                    </div>
                
                </div>
            
            </section>

        </div>
    )
}

export default CoreValues
