import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

let mode = '';
let text = '';
export const Header = (props) => {
  if (props.mode == 'dark') {
    mode = 'bg-gray-800';
    text = 'text-white';
  }
  else {
    mode = 'bg-gray-300';
    text = 'text-black';
  }
  return (

    <nav className={`navbar flex p-3 shadow-md ${mode}`}>
      <label className={`text-lg font-semibold ${text}`} htmlFor="">Text-Utils</label>
      <ul className='flex ml-auto'>
        <a className={`mx-2  hover:underline  ${text} `} href=""><li>Home</li></a>
        <a className={`mx-2 hover:underline ${text}`} href="/about"><li>About</li></a>
        <div className="form-check form-switch mx-2">
          <input className="form-check-input cursor-pointer" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
          <label className={`form-check-label ${text}`} htmlFor="flexSwitchCheckDefault">DarkMode</label>
        </div>

      </ul>
    </nav>
  )
}
