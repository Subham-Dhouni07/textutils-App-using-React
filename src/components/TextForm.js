// textTransform
import React, {useState} from 'react'

export default function TextForm(props) {

  const handleUpClick = () =>{

    if(text.length == 0)
    {
      props.showAlert("No text found!", "danger")
    }
    else
    {
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Text converted to Uppercase!", "success")
    }
  }
  
  const handleLowClick = () =>{
    if(text.length == 0)
    {
      props.showAlert("No text found!", "danger")
    }
    else
    {
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Text converted to Lowercase!", "success")
    }
  }
  
  const handleClearClick = () =>{
    let newText = "";
    setText(newText);
    props.showAlert("Text has been cleared!", "success")
  }

  const handleOnChange = (event) =>{
    setText(event.target.value)
  }

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }

  const handleFirstLetter = () => {
    if(text.length == 0)
    {
      props.showAlert("No text found!", "danger")
    }
    else
    {
      let newText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
      setText(newText);
      props.showAlert("Text has been changed!", "success")
    }
  };

  const handleCopy = () => {
    if(text.length == 0)
    {
      props.showAlert("No text found!", "danger")
    }
    else
    {
      navigator.clipboard.writeText(text);
      props.showAlert("Copied!", "success")
    }
  };

  const handleExtraSpaces = ()=>{
    if(text.length == 0)
    {
      props.showAlert("No text found!", "danger")
    }
    else
    {

      let newText = text.replace(/\s+/g, ' ').trim();
      setText(newText)
      props.showAlert("Removed extra spaces!", "success")
    }
    }

  const [text, setText] = useState('');

  return (
    <>
        <div className='container' style={{color: props.mode==='dark' ? 'white' : 'black'}}>
                <h3>{props.heading}</h3>          
            <div className="mb-3">
                <textarea className="form-control" id="exampleFormControlTextarea1" value={text} style={{backgroundColor: props.mode==='dark' ? '#6e8ba4' : 'white', color: props.mode==='dark' ? 'white' : 'black'}} onChange={handleOnChange} rows="8"></textarea>
            </div>
            <button className="btn btn-success mx-2 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-success mx-2 my-1" onClick={handleLowClick}>Convert to LowerCase</button>
            <button className="btn btn-success mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-success mx-2 my-1" onClick={speak}>Text Speech</button>
            <button className="btn btn-success mx-2 my-1" onClick={handleFirstLetter}>Sentence Case</button>
            <button className="btn btn-success mx-2 my-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-success mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="contianer my-4" style={{color: props.mode==='dark' ? 'white' : 'black'}}>
          <h3>Your Text Summary</h3>
          <h6>{text.split(/\s+/).filter((element)=>{return element.length!== 0}).length } Words and {text.length} Characters</h6>
          <h3>Preview</h3>
          <p>{text.length > 0 ? text : "Enter something in the text box to preview"}</p>
        </div>
    </>
  )
}
