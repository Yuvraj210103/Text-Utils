

import React,{useState} from "react"

export default function TextForm (props) {
    //to chnage the text to uppercase
    const handleUpClick =()=>{
       let newText = text.toUpperCase();
       setText(newText);
    }
    const handleLowClick =()=>{
      let newText = text.toLowerCase();
      setText(newText);
   }
   const handleCopyClick =()=>{
    navigator.clipboard.writeText(text);
   }
   const handleClearClick =()=>{
    setText('');
   }
   const handleSpaceClick =()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
   }
    //to change the text in text area manually after any oprtion
    const handleOnChange =(event)=>{
        setText(event.target.value);
     }

    const [text, setText] = useState('');
  return (
    <div className="m-10 ">
    <h1 className={`text-lg font-bold mt-5 ${props.mode==='dark'?'text-white':'text-black'}`}>Enter Text Below</h1>
    <div>
    <textarea className={` p-4 min-w-full mt-4 outline outline-blue-100 ${props.mode==='dark'?'text-white bg-gray-800':'text-black'}`} rows="8" value={text} onChange={handleOnChange}></textarea>
    </div>
    <div className=" flex flex-col md:flex-row">
    <button className="p-2 my-2  text-white bg-blue-500 rounded-md md:mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
    <button className="p-2 my-2  text-white bg-blue-500 rounded-md md:mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
    <button className="p-2 my-2  text-white bg-blue-500 rounded-md md:mx-2" onClick={handleCopyClick}>Copy Text</button>
    <button className="p-2 my-2  text-white bg-blue-500 rounded-md md:mx-2" onClick={handleSpaceClick}>Remove Extra Spaces</button>
    <button className="p-2 my-2  text-white bg-red-500 rounded-md md:mx-2" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className={`container ${props.mode==='dark'?'text-white':'text-black'}`}>
    <h1 className="mt-5 font-semibold">Analysis</h1>
    <p>{text.split(/[ ]+/).length-1} Words and {text.length} Characters with Spaces</p>
    <p>{0.008 * (text.split(/[ ]+/).length-1)} Minutes read</p>
    <h2 className="mt-5 font-semibold">Preview</h2>
    <p>{text}</p>
   </div>
    </div>
  )
}
