import React, {useState} from "react";

function Form(props) {

    let index = props.index;

    const [time, setTime] = useState(0);

    function handleChange(event) {
        const currentValue = event.target.value;
        setTime(Number(currentValue));
    }

    return (
        <form>
            <label for="minutes">Minutes Spent:</label>
            <input onChange={handleChange} type="text" name="minutes" id="minutes" value={time}></input>
            <button
                onClick={(event) => {
                props.handleSubmitTime(time, index)
                setTime(0);
                event.preventDefault();
            }}
            >Submit</button>
        </form>
    )
}

export default Form;