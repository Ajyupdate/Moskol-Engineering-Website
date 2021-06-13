import React from 'react'
import solar from './image/solar.jpeg'
import HomePics from './image/HomePics.jpeg'
import CCTVPicture from './image/CCTVPicture.jpg'
//import { Link } from 'react-router-dom'

function Service() {
    
    return(
        <div className="container  text-center">
            

            <h1 className="title text-Upper">Our Service</h1>
                <section className="service">
                    <div className="row text-left">

                        <div className="col-md-4 servicesColumn">
                            <img src={solar} alt="solar panel" className="service-imgg"/>
                            <h4>Solar Installation</h4>
                            <p>When client decides to go solar, 
                                where to start always pose challenges 
                                and questions, Our Team will walk you 
                                through ...<br/>
                            </p>
                            {/* <Link to="/service#solar"><button type="`````````````````````````````````````````````````button" className="btn btn-danger">Read More</button></Link> */}
                            <a href="/service#solar"><button type="button" className="btn btn-danger">Read More</button></a>
                        </div>
                        <div className="col-md-4 servicesColumn">
                            <img src={HomePics} alt="home with installed solar panel" className="service-imgg"/>
                            <h4>Home Installation</h4>
                            <p>This is where MOSKOL ENGINEERING SERVICES excels.
                                 Our Team of Engineers are experts in Electrical 
                                 Installations. They are well......<br/> 
                                </p>
                                {/* <Link  to="/service#home"><button type="button" className="btn btn-danger">Read More</button></Link> */}
                                <a  href="/service#home"><button type="button" className="btn btn-danger">Read More</button></a>
                        </div>
                        <div className="col-md-4 servicesColumn">
                            <img src={CCTVPicture} alt="CCTV" className="service-imgg"/>
                            <h4>CCTV installation</h4>
                            <p>Lorem ipsum dolor sit amet consectetur 
                                adipisicing elit.Esse, voluptas dignissimos aspernatur quas 
                                qutotam exercitationem ipsum. <br/></p>
                                {/* <Link to="/service#cctv"><button type="button"  className="btn btn-danger">Read More</button></Link> */}
                                <a href="/service#cctv"><button type="button"  className="btn btn-danger">Read More</button></a>
                        </div>
                    </div>
                    <a href="./service"><button type="button" href="/service" className="btn btn-primary">See all our Services</button></a>
                    
                </section>
                
            </div>
            

        
    )
}
export default Service