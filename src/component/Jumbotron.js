import React from 'react'
import JumbotronPicture from './image/JumbotronPicture.jpg'

function Jumbotron() {
    return(
        <div>
            <div className="jumbotron  text-center p-5" style={{backgroundImage: `url(${JumbotronPicture})`}} >
                <div className="container text-white" >
                    <h1>Moskol Engineering</h1>
                    <p ><i>Moskol Engineering; the number one engineering company</i></p>
                    
                </div>
            </div>
        </div>
    )
}
export default Jumbotron