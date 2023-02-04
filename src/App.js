//import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg : message,
      type: type
    });
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    console.log("mode = " + mode);
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = '#082542'
      document.body.style.color = 'white'
      showAlert("Dark mode enabled", "success");
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert("Light mode enabled", "success");
    }
  }

  return (    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container">
        <TextForm showAlert={showAlert} heading="Text Formatting done in seconds" mode={mode} />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
