import React from "react"
import cctv from './cctv.jpeg'
import display from './display.jpeg'

function  Template() {
    return(
        <div className="container">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src={cctv} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src={display} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src={cctv} className="d-block w-100" alt="..."/>
                </div>
            </div>
        </div>




               <div className="container">
                        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <img src={cctv} className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                <img src={display} className="d-block w-100" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                <img src={cctv} className="d-block w-100" alt="..."/>
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
                </div>



            <div className="container">
                <div className="card">
                    <div className="card-header">
                        Quote
                    </div>
                    <div className="card-body">
                        <blockquote className="blockquote mb-0">
                        <p>A well-known quote, contained in a blockquote element.</p>
                        <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                        </blockquote>
                    </div>
                </div>
            </div>


            <div class="clearfix">
                <img src={cctv} class="col-md-6 float-md-end mb-3 ms-md-3" alt="..."/>

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

        </div>
    )
}

export default Template