import React from "react";
import data from "../data";

function RightSidebar(){
    const skillIcons = data.map((item) => {
        return(
            <div className="skillIcon">
                <img key = {item.id} src = {item.img} alt = {item.altText} width='50' height='50'/>
            </div>
        )
    })
    return(
        <div className="right-sidebar">
            {skillIcons}
        </div>
    )
}

export default RightSidebar;