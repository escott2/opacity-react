import React from "react";
import TallyMark from "./TallyMark";
import "./Tally.css";

function Tally(props) {

    //should I be storing this in state instead?... 
    let numberOfTallyMarks = props.level - 1;


    return (
        <div className="Progress-tally">
            <h3>Overall Progress:</h3>
            { (numberOfTallyMarks > 0) ? 
            [
                ...Array(numberOfTallyMarks),
            ].map( (value, index) => (
                <TallyMark key={index} />
            )) : <p>You are making progress on your first level!</p> }
        </div>);
}

export default Tally;