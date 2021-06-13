import React from 'react'
import Carousel1 from './image/Carousel1.jpg'
import Carousel2 from './image/Carousel2.jpg'
import Carousel3 from './image/Carousel3.jpg'

function Carousel(){
    return(
        <div className="">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Carousel1} className="img-fluid d-block w-100" height="450" alt="..."/>
                        
                    </div>
                    <div className="carousel-item">
                        <img src={Carousel2} className="img-fluid d-block w-100" height="450" alt="..."/>
                        
                    </div>
                    <div className="carousel-item">
                        <img src={Carousel3} className="img-fluid d-block w-100" height="450" alt="..."/>
                        
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>







            {/* <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={display} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={cctv} className="d-block w-100" alt="..."/>
                    </div>
                    
                    <div className="carousel-item">
                        <img src="..." className="d-block w-100" alt="..."/>
                    </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"  data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
                </button>
                
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"  data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
                </button>
            </div> */}




        </div>



    )
}
export default Carousel