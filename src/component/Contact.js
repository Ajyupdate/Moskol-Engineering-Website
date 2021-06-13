import React,{useEffect} from 'react'
import GoogleApiWrapper from './googleMap'
import Helmet from 'react-helmet'

import Contact from './ContactContent'

function ContactUs() {
    useEffect(() =>{
        window.scrollTo(0,0)
    }, [])
    return (
        <div>
            <Helmet>
                <meta charset="UTF-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta name="description" content="Moskol is a world class solar engineering firm"/>
                
                <meta name="keyword" content="Solar, engineering, electrical, electricity, invertar, house wiring, contact, solar company, electrical 
                engineering company, solar engineerig company based in lagos, electrical engineering in lagos, electrical engineering in Ogun State, Renewable energy, electrical engineerig company based in lagos
                    Solar, engineering, services of solar comapny, electricl services, service offered by moskol engineering, electrical, electricity, invertar, house wiring, best solar company, best electrical company"
                />
                <title>Contact </title>
           
            </Helmet>

            <div><GoogleApiWrapper/></div> 
            <Contact/>
        </div>
    )
}

export default ContactUs
