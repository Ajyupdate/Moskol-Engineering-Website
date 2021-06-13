import React from 'react'
import moskolWebLogo from './image/moskolWebLogo.png'
import dots from "./image/dots.png"
import { Link } from 'react-router-dom'


function Footer() {
    return(
        <div style={{backgroundImage:`url(${dots})`}}>


            


            <section className="FooterDiv">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 footer-box text-left">
                            <img src={moskolWebLogo} alt="moskol logo"/>
                            <p>Moskol Engineering is an electrical and solar 
                                engineering company based in Lagos. Moskol 
                                Enginnering over the years has provided 
                                quality and affordable electrical and 
                                solar services to client all over Nigeria. 
                                At Moskol enginnering we are focused on 
                                providing the best and most affordable 
                                solutions to power failure through our 
                                home and office solar installation system. 
                                We also provide electrical surveilance security to homes and 
                                offices with state of the art CCTV installation, automatic gate and 
                                also providing your home with a smart electrical automation.</p>
                        </div>
                        <div className="col-md-4 footer-box text-left">
                            <h4>You Can Contact us on Our media accounts</h4>
                            <p><i className="fa fa-whatsapp"></i>      <Link to={{pathname: "https://wa.me/2348023030222"}} target="_blank">WatsApp</Link></p>
                            <p><i className="fas fa-envelope-square"></i>  <Link to={{pathname: "https://moskolengr@gmail.com"}} target="_blank">Gmail</Link></p>
                            <p><i className="fab fa-linkedin-in"></i>      <Link to={{pathname: "https://linkedin.com/linkedin"}} target="_blank">Linkedin</Link></p>
                            <p><i className="fab fa-facebook-f"></i>       <Link to={{pathname: "https://www.facebook.com/Moskol-Engineering-services-111454950997195"}} target="_blank">Facebook</Link></p>
                            <p><i className="fab fa-twitter"></i>          <Link to={{pathname: "https://twitter.com/moskolengr"}} target="_blank" >Twitter</Link></p>
                            <p><i className="fab fa-instagram"></i>        <Link to={{pathname: "https://Instagram.com/moskolengr"}} target="_blank" >Instagram</Link></p>
                            
                        </div>
                        <div className="col-md-4 footer-box text-left">
                            <p>Our Address</p>
                            <p><i className="fa fa-map-marker"></i>Onifade Itele Ota</p>
                            <p><i className="fa fa-whatsapp" aria-hidden="true"></i>       080934473993</p>
                            
                        </div>
                        
                    </div>
                    <hr/>
                    <p className="text-center mb-0 pb-2">&copy; Copyright 2020; All rights reserved Moskol Engineering</p>
                </div>

            </section>
        </div>

    )
}
export default Footer