import {Header} from './components/header';
import TextForm from './components/textForm';
import { useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  const [mode, setmode] = useState('light');
  
  const toggleMode = ()=>{
    if(mode === 'dark'){
      setmode('light')
      document.body.style.backgroundColor = 'white';
    }
    else{
      setmode('dark')
      document.body.style.backgroundColor = '#0e2d5a';
    }
  }
  return(
  
  <Router>
   <Header mode={mode} toggleMode={toggleMode}/>
   <div className='container '>
   <TextForm mode={mode}/>
   </div>
   </Router>
  
  );
}

export default App;
