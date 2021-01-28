import React, {useState} from "react";
import "./Form.css";

function Form(props) {

    let index = props.index;

    const [time, setTime] = useState(0);

    function handleChange(event) {
        const currentValue = event.target.value;
        setTime(Number(currentValue));
    }

    return (
        <div className="Form-wrapper">
            <form className="Form-flex">
                <label className="Input-Group">Minutes Spent
                <input className="Time-input" onChange={handleChange} type="text" name="minutes" id="minutes" value={time}></input>
                </label>
                <button
                    onClick={(event) => {
                    props.handleSubmitTime(time, index)
                    setTime(0);
                    event.preventDefault();
                }}
                >submit</button>
            </form>
        </div>
    )
}

export default Form;