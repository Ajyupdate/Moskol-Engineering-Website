import React,{useEffect} from 'react'
import Jumbotron from './Jumbotron'
import ServicePageContent from './ServicePageContent'
import Carefix from './productList'
import Helmet from 'react-helmet'
function ServicePage() {
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
                
                <meta name="keyword" content="Solar, engineering, electrical, electricity, invertar, house wiring, service,solar company, electrical 
                engineerig company, solar engineerig company based in lagos, electrical engineering in lagos, electrical engineering in Ogun State, Renewable energy, electrical engineerig company based in lagos
                    Solar, engineering, services of solar comapny, electricl services, service offered by moskol engineering, electrical, electricity, invertar, house wiring, best solar company, best electrical company"
                />
                <title>Services</title>

            </Helmet>
            <Jumbotron/>
            <ServicePageContent/>
            <Carefix/>
        </div>
    )
}

export default ServicePage
