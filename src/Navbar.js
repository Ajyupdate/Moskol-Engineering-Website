import React from "react";
//import { BrowserRouter as Router, Route, Switch, Link }  from "react-router-dom";
import { Switch, Link } from "react-router-dom";

function Navbar() {
    return(
        <div>

            <Switch>

                <Link to="/products">product</Link>
                    
            </Switch>
            <Switch>
                <Link to="/about">about</Link>
                    
            </Switch>
        </div>
    )
}
export default Navbar