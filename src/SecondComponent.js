import React from "react";
import { render } from "react-dom";

function SecondComponent(){
    return(
        <React.Fragment>
            <div>
                <h1>This is my Second Component</h1>
                <img src="lion.jfif" alt="The King Lion" width="400" height="350"></img>
            </div>
        </React.Fragment>
    )
}
export default SecondComponent