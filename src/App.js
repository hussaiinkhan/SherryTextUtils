
import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import About from './Components/About';

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  
  const showAlert=(msg)=>{
    setAlert(msg)
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }
  
  const changeMode =()=>{
    if (mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor = 'rgb(23, 39, 71)';
      showAlert('Dark Mode has be enabled!')
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light Mode has be enabled!')
    }
    
  }
  return (
    <>
    <Router>
      <Navbar btnText={`${mode==='light'?'Enable Dark Mode':'Enable Light Mode'}`} mode ={mode} changeMode={changeMode} title="SherryTextUtils" aboutText="About"/>
      <Alert alert={alert}/>
      
      <div className="container my-3">
        <Routes>

          <Route exact path="/about" element={<About mode={mode}/>}/>

          <Route exact path="/" element={<TextForm  mode ={mode} showAlert={showAlert} heading="Enter Your Text Here to Analyze"/>}/>

        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
