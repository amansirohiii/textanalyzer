import React, {useState} from "react";
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const [text, setText] = useState("");
    // const [count, setCount]=useState(0);


    const handleOnChange = (event)=>{
        setText(event.target.value);
        // setCount(event.target.value.length);
    }
    const handleUpClick = ()=>{
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleLowClick = ()=>{
        let newText=text.toLowerCase();
        setText(newText);
    }
    const clearText = ()=>{
        setText("");
        // setCount(0);
    }
  return (
    <div>
        <div className="mb-3">
        <label htmlFor="myBox" className="form-label"><h1>{props.heading}</h1></label>
        <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
        </div>
        <div className="container">
        <button className="btn btn-dark" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-dark mx-3" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-danger" onClick={clearText}>Clear</button>
        </div>
        <div className="container my-3">
        <h1>Text Summary</h1>
        <button className="btn btn-dark">Characters: {text.length}</button>
        <button className="btn btn-dark mx-3">Words: {text.trim() === '' ? 0 : text.split(" ").length}</button>
        </div>
    </div>
  );
}
TextForm.propsType={heading: PropTypes.string.isRequired}