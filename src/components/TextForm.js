import React from 'react'
import { useState } from 'react'

export default function TextForm(props) {
    // to change to uppercase
    const handleUpperCase = () => {
        console.log("converting" + text + "to uppercase");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    }

    // to change to lowercase
    const handleLowerCase = () => {
        console.log("converting" + text + "to lowercase");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");
    }
    // to remove extra spaces
    const handleExtraSpaces = () => {
        console.log("removing extra spaces from " + text);
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed extra spaces", "success");
    }

    //to clear text
    const handleClearText = () => {
        console.log("clearing text ");
        setText("");
        props.showAlert("Text cleared", "success");
    }
    //to copy text
    const handleCopyText = () => {
        console.log("copying text ");
        let copyText = document.getElementById("textBox");
        navigator.clipboard.writeText(copyText.value);
        props.showAlert("Copied to clipboard", "success");
    }

    //to clear text ------------try later
    // const handleUndo = () => {
    //     console.log("undo" + text);
    //     // let newText = 
    //     // setText(" ");
    // }

    // to change the text
    const onTextChange = (event) => {
        console.log("text is changed");
        setText(event.target.value);
    }

    const [text, setText] = useState("");
    return (
        <>
        <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor: props.mode==='light'?'white':'grey' ,color: props.mode==='dark'?'white':'black'}} value={text} onChange={onTextChange} id="textBox" rows="8" placeholder='enter text here'></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleLowerCase}>Convert to lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleUpperCase}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove extra spaces</button>
            <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopyText}>Copy Text</button>
            {/* <button className="btn btn-primary mx-2" onClick={handleUndo}>Undo</button> */}
        </div>
        <div className="container">
            <h2>Your text summary</h2>
            <p>{text.split(" ").length-1} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length } Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length===0?"Enter text to preview it here":text}</p>
        </div>

        </>

    )
}
