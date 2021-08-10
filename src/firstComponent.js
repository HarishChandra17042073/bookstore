import React from "react";
import { render } from "react-dom";

function FirstComponent(){
    return(
        <React.Fragment>
            <div>
                <h2>This is my FirstComponent</h2>
                <img src="lion.jfif" alt="The King Lion" width="400" height="350"></img>
            </div>
        </React.Fragment>
    )
}
export default FirstComponent