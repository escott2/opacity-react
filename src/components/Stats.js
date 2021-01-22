import React from "react";


function Stats(props) {

        // function renderTimePerLevel (statDiv, timePerLevel, MINUTES_IN_HOUR) {
    //     const timePerLevelHrs = (timePerLevel / MINUTES_IN_HOUR);
    //     const timePerLevelDiv = document.createElement("div");
    //     const timePerLevelText = document.createElement("p");
    //     timePerLevelText.textContent = `${timePerLevelHrs} Hours`;
    //     statDiv.appendChild(timePerLevelDiv.appendChild(timePerLevelText));
    // }



    return ( 
    <div className="React-stats">
        <h3 className="level-heading">{`Level ${props.level}`}</h3>
        <p>{Math.ceil(props.percentComplete)}%</p>
        <p>{props.hoursPerLevel} Hours</p>
    </div>
    )
}

export default Stats;