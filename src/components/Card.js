import React from "react";
import "./Card.css";
import ProgressBar from "./ProgressBar";
import Stats from "./Stats";
import Tally from "./Tally";
import Form from "./Form";



function Card(props) {

    //Can probably turn this into a reduct function
    function calcTimeComplete(log) {
        let timeComplete = 0;
        for (let entry of log) {
            timeComplete += entry.timeInMinutes;
        }
        return timeComplete;
      }

    function calcPercentComplete(timeComplete, totalTimePerLevel) {
        const percentComplete = (timeComplete / totalTimePerLevel) * 100;

        //Renders percent correctly, at each level.
        const percentRemainder = percentComplete % 100;
        return percentRemainder;
    }

    function calcLevel(totalTimePerLevel, timeComplete) {
        const progressPercent = timeComplete / totalTimePerLevel;
    
        if (progressPercent % 1 === 0) {
            return progressPercent + 1;
        } else if (progressPercent > 1) {
            return Math.ceil(progressPercent);
        } else {
            return 1;
        }
    }

    
    const MINUTES_IN_HOUR = 60;
    const totalTimePerLevel = 5 * MINUTES_IN_HOUR;
    const timeComplete = calcTimeComplete(props.log);
    const percentComplete = calcPercentComplete(timeComplete, totalTimePerLevel);
    const level = calcLevel(totalTimePerLevel, timeComplete);
    const hoursPerLevel = totalTimePerLevel / MINUTES_IN_HOUR;
  
    
    

    return (
        <div className="Container">
            <h2>{props.name}</h2>
            <ProgressBar percentComplete={percentComplete} />
            <Stats percentComplete={percentComplete} level={level} hoursPerLevel={hoursPerLevel} />
            <Tally level={level} timeComplete={timeComplete} />
            <Form index={props.index} handleSubmitTime={props.handleSubmitTime}/>
        </div>
    );
}

export default Card;