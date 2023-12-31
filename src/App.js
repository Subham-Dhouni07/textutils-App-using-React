import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg : message,
      type : type
    })

    setTimeout(()=>{
      setAlert(null)
    }, 1500)
  }


  const ToggleMode = () =>{
    if(mode === 'light')
    {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark Mode has been enabled", 'success')
    }
    else
    {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been enabled", 'success')
    }
  }

  return (
    <>
      {/* <Router> */}
          <Navbar title="TextUtils" mode={mode} ToggleMode={ToggleMode} find_me="About Us"/> 
          <Alert alert={alert} />
          <div className="container my-3">
       
          {/* <Routes> */}
            {/* <Route exact path="/About" element={<About />} /> */}
            {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} /> */}
            <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />       
             {/* Delete above line if using router  */}
          {/* </Routes> */}

          </div>

      {/* </Router> */}
    </>
  );
}

export default App;
