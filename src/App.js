
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm'
import React, {useState} from 'react'; 
import Alert from './Components/Alert';

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if(mode==='dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success")
    }
  }

  return (
   <>
    {/* <Navbar title="TextUtils" aboutText="About TextUtils"/>   */}
    <Navbar title="TextUtils" mode={mode}   toggleMode={toggleMode}/>  
    <Alert alert= {alert}/>
    <div className="container my-3">
    <TextForm showAlert={showAlert} heading="Enter your text to analyze below" mode={mode}/>
    {/* <About/> */}
    </div>
   </>
  );
}

export default App;
