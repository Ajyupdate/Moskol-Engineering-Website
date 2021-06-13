import React, { useEffect } from 'react'
import HousePicture from './image/HousePicture.jpg'
import SolarPanel from './image/SolarPanel.jpg'
import Invertar from './image/Invertar.jpg'
//import solar from './image/solar.jpeg'
import CCTVPicture from './image/CCTVPicture.jpg'
// import AutomaticGate from './image/AutomaticGate.jpg'
// import MotherBoardPicture from './image/MotherBoardPicture.jpg'

function Carefix(params) {
    useEffect(()=>{
        const cctv = window.location.hash.slice(1)
        const elem = document.getElementById(cctv) 
        if (elem){
            elem.scrollIntoView()
        }                                            
    })
    return(
        <div className="container text-left mt-4">
            
            <div className="text-center mt-4">
                
                <div className="clearfix solar mt-5" id="solar">
                    <img src={SolarPanel}  className="col-md-6 float-md-end mb-3 ms-md-3 product-image"  alt="An installed solar panel on a house"/>

                    <h3 className="ServicePage-Heading" >Solar Installation</h3>
                    <p>
                    When client decides to go solar, where to start always pose challenges and questions, Our Team will walk you through the process of detailing your current energy consuption( Energy Auditing), and then compare it to your home’s solar potential to determine ROI and advise you according to budget.
                    Our solar proposals are easy to read and understand, providing exactly what you need to make an informed decision about whether or not going solar is right for you.  
                    </p>

                    
                </div>

                <div className="clearfix mt-5" id="battery">
                    
                    <img src={Invertar} className="col-md-6 float-md-start p-4 product-image"  alt="An invertar"/>

                    <h3 className="ServicePage-Heading">Inverter and Battery</h3>
                    <p >
                        In cases where you don't want to be totally dependent on solar system, our inverter battery system can be 
                        the next option for you as it serves as a backup option due to it ability to store up electric charge 
                        allowing you to conveniently run conventional appliances and not to mention it's cost effectiveness. Our inverter-Battery system is applicable for use
                        use at home, offices, schools, hospitals and other establishment on need of reliable energy source.
                    </p>  
                </div>
                <div className="clearfix mt-5" id="cctv">
                    <img src={CCTVPicture} className="col-md-6 float-md-end mb-3 ms-md-3 product-image"  alt="CCTV CAMERA"/>

                    <h3 className="ServicePage-Heading" >CCTV Camera NVR Controllers/CATV</h3>
                    <p>
                        A paragraph of placeholder text. We're using it here to show the use of the clearfix class. We're adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image.
                    </p>

                    <p>
                        As you can see the paragraphs gracefully wrap around the floated image. Now imagine how this would look with some actual content in here, rather than just this boring placeholder text that goes on and on, but actually conveys no tangible information at. It simply takes up space and should not really be read.
                    </p>

                    <p>
                        And yet, here you are, still persevering in reading this placeholder text, hoping for some more insights, or some hidden easter egg of content. A joke, perhaps. Unfortunately, there's none of that here.
                    </p>
                </div>
                
                <div className="clearfix mt-5" id="home">
                    
                    <img src={HousePicture} className="col-md-6 float-md-start p-4 product-image" height="300" alt="A home with smart engineering properties"/>

                    <h3 className="ServicePage-Heading">Smart Home Automation</h3>
                    <p>
                    This is where MOSKOL ENGINEERING SERVICES excels. 
                    Our Team of Engineers are experts in Electrical Installations. 
                    They are well talented and trained and experienced smart home installation team.
                    Our installers are full-time employees and average over 7 years with the company.
                    </p>

                    
                </div>

            </div>
            
         
        </div>
        
    )
}
export default Carefix