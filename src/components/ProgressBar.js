import React from "react";
import "./ProgressBar.css"
import ProgressMade from "./ProgressMade";

function ProgressBar(props) {
    return (
        <div className="Progress-bar">
            <ProgressMade percentComplete={props.percentComplete} />    
        </div>
    );
}

export default ProgressBar;