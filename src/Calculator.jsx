import React, { useState } from 'react';
import './index.css';
import { evaluate } from 'mathjs'; 

function Calculator() {
    const [value,setValue]= useState('');
    const [output,setOutput]= useState('');

  return (
    <div>
        <h1>React Calculator</h1>
         <input type="text" value={value} style={{width:"240px",height:"30px"}} />
        <h1> {output}</h1>
       <div className="calc">
         <button onClick={()=>{
            debugger;
            setValue((prev)=>prev+7)
         }}>7</button>
         <button onClick={()=>{
            setValue((prev)=>(prev+8))
         }}>8</button>
         <button onClick={()=>{
            setValue((prev)=>(prev+9))
         }}>9</button>
         <button onClick={()=>{
            setValue((prev)=>prev+'+')
         }}>+</button>
         </div>
         <div className="calc">
         <button onClick={()=>{
            setValue((prev)=>prev+4)
         }}>4</button>
         <button onClick={()=>{
            setValue((prev)=>prev+5)
         }}>5</button>
         <button onClick={()=>{
            setValue((prev)=>prev+6)
         }}>6</button>
         <button onClick={()=>{
            setValue((prev)=>prev+'-')
         }}>-</button>
         </div>
         <div className="calc">
         <button onClick={()=>{
            setValue((prev)=>prev+1)
         }}>1</button>
         <button onClick={()=>{
            setValue((prev)=>prev+2)
         }}>2</button>
         <button onClick={()=>{
            setValue((prev)=>prev+3)
         }}>3</button>
         <button onClick={()=>{
            setValue((prev)=>prev+'*')
         }}>*</button>
         </div>
         <div className="calc">
         <button onClick={()=>{
          setValue('');
          setOutput('');
         }
         }>C</button>
         <button onClick={()=>{
            setValue((prev)=>prev+0)
         }}>0</button>
         <button onClick={()=>{
            try{
            setOutput(evaluate(value));
            }catch{
                setOutput('Error');
            }
         }}>=</button>
         <button onClick={()=>{
            setValue((prev)=>{setValue(prev+'/');})
         }}>/</button>
         </div>

    </div>
  )
}

export default Calculator;
