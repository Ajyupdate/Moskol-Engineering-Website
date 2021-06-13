import React,{useEffect} from 'react'

import Carousel from "./Carousel";
import Service from "./Service";
import Mission from "./Mission";
import Reviews from "./Reviews";
import CoreValues from './CoreValues'
import { Helmet } from 'react-helmet';



function Home() {
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
                
                <meta name="keyword" content="Solar, engineering, electrical, electricity, invertar, house wiring,solar company, electrical 
                engineerig company, solar engineerig company based in lagos, electrical engineering in lagos, electrical engineering in Ogun State, Renewable energy, electrical engineerig company based in lagos
                    Solar, engineering, home solar comapny, hopepage of moskol engineering, electrical, electricity, invertar, house wiring, best solar company, best electrical company"
                />
                <title>Moskol Enginneering - Home</title>
            </Helmet>
            <Carousel id="caro"/>
            <Service/>
            <Mission/>
            <CoreValues/>
            <Reviews/>
            
        </div>
    )
}

export default Home
