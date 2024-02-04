import React, { useState } from 'react'
import "./Temperature.css"
import mbl from './mbl.png';

const temperature = () => {

    const[temp, setTemp] = useState(12);
    const[color, setColor] = useState("#34495e")

    function handlePlus(){
        setTemp(temp+1)
        if (temp >= 18) {
            setColor("red")
        }
    }

    const handleMinus = ()=>{
        setTemp(temp-1)
        if (temp <= 19) {
            setColor("#34495e")
        }
    };

    

    return (
        <>
            <div>
                <div className='temp'>
                    <img src={mbl} alt="mbl" style={{ width: "100%" }} />
                </div>
                <div className="temp-display">
                    <h1 className='actual-temp' style={{backgroundColor: color}}>{temp}°C</h1>
                    <div className="temp-btn">
                        <button onClick={handlePlus}>+</button>
                        <button onClick={handleMinus}>-</button>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default temperature
