import React from 'react'
import moskolWebLogo from './image/moskolWebLogo.png'
import { NavLink} from 'react-router-dom'
function Header(){
    return(

        <div className="containerClass navbar-head">
            <nav className="navbar navbar-expand-lg navbar-light " >
                <div className="container-fluid p-2">
                    <div><NavLink to="/"><img src={moskolWebLogo} width="150" height="30" alt="moskol logo" className="mb-3"/></NavLink><br/> <small><i className="text-white">Moskol Engineering your one <br/>stop for all electrical works</i></small></div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fa fa-bars"></i>
                        </button>
                        <div className="collapse navbarText navbar-collapse row" id="navbarText">
                            <div className="col-md-6">
                                <span className="navbar-text p-3">
                                    <i className="Header-text text-white"></i>
                                </span>
                            </div>
                            <div className='col-md-6'>
                                <ul className="navbar-nav ">
                                    <li className="nav-item">
                                        <NavLink to="/#" className="nav-link  text-white active" aria-current="page" title="home page">Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/About" className="nav-link text-white" aria-current="page"  title="About page">About</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/Service" className="nav-link text-white" title="service page">Our Service</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/Contact" className="nav-link text-white" title="Contact page page">Contact Us</NavLink>
                                    </li>
                                </ul>
                            </div>
                            
                            
                            
                        </div>
                    </div>
            </nav>
        </div>
    )
}

export default Header