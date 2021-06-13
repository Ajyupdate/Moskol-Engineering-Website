import React,{useEffect} from 'react'
import Footer from './component/Footer'
import Header from "./component/Header";
import Home from "./component/Home";
import About from './component/About'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import ServicePage from './component/ServicePage';
import ContactUs from './component/Contact';
import { Helmet } from 'react-helmet';
import WhatsApp from "./component/image/WhatsApp.png"
import { Link } from 'react-router-dom'


function App(){
    useEffect(() =>{
        window.scrollTo(0,0)
    }, [])
    
    return(
        <div className="AppComponent" style={{backgroundColor: 'white'}}>
           
            <Router> 
                <Helmet className="bg-dark">
                
                </Helmet>
                <Header />
                <Route path="/" exact component={Home}/>
                <Route path="/home" exact component={Home}/>
                <Route path="/About" exact component={About}/>
                <Route path="/Service" exact component={ServicePage}/>
                <Route path="/Contact" exact component={ContactUs}/>                
                
                
                <Footer/> 
                <Link to={{pathname: "https://wa.me/2348023030222"}} target="_blank"><img src={WhatsApp} icon alt="whatsApp" className="watsappIcon"/> </Link>
                <div ></div>
                
            </Router> 
           
        </div>
    )
    
}
export default App
