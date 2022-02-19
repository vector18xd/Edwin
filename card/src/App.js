import React, {useState} from 'react';
import { Button } from './Button';
import './App.css';
import { Div } from './divs.jsx' 
import  calima from '../src/img/calima.png'
import  rx15 from '../src/img/rx15.jpg'

function App() {
  const [onOff, setOnOff] = useState(false)
  const change = () =>{
    if(onOff === false){
      setOnOff(true)
      document.querySelector("img").style.filter = "saturate(200%)";
      document.querySelector(".rx15").style.filter = "saturate(200%)";
      document.querySelector(".OnOff").style.background = "red";
    }else if(onOff === true){
        document.querySelector("img").style.filter = "saturate(50%)";
        document.querySelector(".rx15").style.filter = "saturate(50%)";
        document.querySelector(".OnOff").style.background = "white";
        setOnOff(false)
    }
  }
  return (
    <div className="App">
        <div className='Card'>
            <Div idN="calima" classH2="efect" name="calima" link={calima} imgIn="calima" imgClas="calima"/>
            <br/>
            <Div idN="rx15" classH2="efect" name="rx15" link={rx15} imgIn="rx15" imgClas="rx15"/>
        </div>
        <div className='Buttons'>
            <Button classN="OnOff" event={change} text="ON / OFF"/>
        </div>
    </div>
  );
}

export default App;
