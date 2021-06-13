import React, { useEffect } from 'react'
import AboutContent from './AboutContent'
import { Helmet } from 'react-helmet';


function About() {
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
            
                <meta name="keyword" content="Solar, engineering, electrical, electricity, invertar, house wiring, About,solar company, electrical 
                engineerig company, solar engineerig company based in lagos, electrical engineering in lagos, electrical engineering in Ogun State, Renewable energy, electrical engineerig company based in lagos
                    Solar, engineering, about solar comapny, about moskol engineering, electrical, electricity, invertar, house wiring, best solar company, best electrical company"
                />
                <title>About Page</title>
               
            </Helmet>
            <AboutContent />
        </div>
    )
}

export default About
