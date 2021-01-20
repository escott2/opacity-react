import React from "react";
import "./Card.css";

function Card(props) {
    return (
        <div className="Container">
            <h2>{props.name}</h2>
            <div className="Progress-bar">
                <div className="Progress-made Js-react-progress"></div>
            </div>
            <div className="React-stats Js-react-stats"></div>
            <div class="Progress-tally"></div>
        </div>
    );
}

export default Card;