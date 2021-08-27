
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm'
import React, {useState} from 'react'; 

function App() {
  const [mode, setMode] = useState('light')

  const toggleMode = () => {
    if(mode==='dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }
  }

  return (
   <>
    {/* <Navbar title="TextUtils" aboutText="About TextUtils"/>   */}
    <Navbar title="TextUtils" mode={mode}   toggleMode={toggleMode}/>  
    <div className="container my-3">
    <TextForm heading="Enter your text to analyze below" mode={mode}/>
    {/* <About/> */}
    </div>
   </>
  );
}

export default App;
