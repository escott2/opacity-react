import React from "react";
import TallyMark from "./TallyMark";
import "./Tally.css";

function Tally(props) {

    //should I be storing this in state instead?... 
    let numberOfTallyMarks = props.level - 1;
    const totalTimeCompleted = props.timeComplete;
    let totalTimeCompletedHours = totalTimeCompleted / 60;
    let tallyCollection = createTallyCollection();
    
    function createTallyCollection () {
        if (numberOfTallyMarks > 0) {
            const tallyArray = [ ...Array(numberOfTallyMarks),];
            const tallyComponents = tallyArray.map( (value, index) => {
                   return <TallyMark key={index} /> });
            return tallyComponents;
        } else {
            return <p>You are making progress on your first level!</p>
        }
    }




    
    return (
        <div className="Progress-tally">
            <h3>Overall Progress:</h3>
            {tallyCollection}
            <p>{totalTimeCompletedHours} Hours</p>
        </div>);
}

export default Tally;