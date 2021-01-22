import React, { useState } from "react";
import "./ProgressMade.css"


function ProgressMade(props) {

    return (
        <div className="Progress-made" style={{backgroundColor: "rgba(45, 86, 91, 0.9)", width: `${props.percentComplete}%`}}></div>
    );
}

export default ProgressMade;