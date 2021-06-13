import React from 'react'
//import GoogleApiWrapper from './googleMap'


function Contact() {
    return(
            
            <div className="container" >
                
                <div className="row contactForm"> 
                    <div className="col-md-6 contactForm">
                        <h3><i className="fa fa-map-marker"></i>     Our Address</h3>
                        <p>Moskol Engineering concept <br/> 2 Ogunyomi Stret Onifadee<br/> Off Ota Road Ota <br/> Ogun State</p>
                        <h6>Call us: 08023030222, 08109313397 <i className="fas fa-phone"></i></h6>
                        <h6>email: Moskolengr@gmail.com <i className="fas fa-envelope-square"></i></h6>
                    </div>
                    <div className="col-md-6 contactDetails card contactForm">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Your Name</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                <div id="emailHelp" className="form-text">Your details are safe</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Phone Number</label>
                                <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                <div id="emailHelp" className="form-text">We'll never share your details with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Company's Name</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                <div id="emailHelp" className="form-text">We'll never share your details with anyone else.</div>
                            </div>
                            {/* <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                <label className="form-check-label" for="exampleCheck1">Check me out</label>
                            </div> */}
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
                
            </div>
        )
}
export default Contact