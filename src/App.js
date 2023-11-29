import Keypad from "./keypad" //here for buttons i used keyad.js file and linked it here
import './App.css'  //css file is linked here
import { useState } from "react" // for functional components


function App(){
  let [input,setInput]= useState("")
  function handleClick(value){
    setInput(input+value)

  }

// function calculate(value){
//     let outputVal=eval(input)
//     setInput(outputVal)

//   }
function handleClick(value) {
  setInput(input + value);
}//equal button

function calculate() {
  try {
    let outputVal = eval(input);
    if (!isNaN(outputVal) && isFinite(outputVal)) {
      setInput(outputVal.toString());
    } else {
      setInput("Invalid result");
    }
  } catch (error) {
    setInput("Invalid");
  }
}//try catch block for zero division and invalid expressions

  function handleClear(){
    
    setInput("");
    // setTimeout(() => {
    //   setInput('');
    // }, 15000);
  }
  // function handleCorrection() {
  //   setInput(input.slice(0, -1)); // Remove the last character
  // }
  function handleCorrection() {
    const isResult = input.includes('=')  || input.includes('Error');
  
    if (isResult) {
      setInput("");
    } else {
      setInput(input.slice(0, -1)); // Remove the last character
    }
  }//this function used for backspace or correct the input give by user

  
  return(
      <div  className="app">
      <div className="container">
        <div class="text">
      <h1>Calcuator using React</h1></div> 
      {/* {Heading} */}
      <div className="Calculator"> </div>
      <input type="text" value={input} className="output"/> 
      {/* <button onClick={() => handleCorrection()} className="fun-key"></button> */}
      <Keypad handleClick={handleClick} handleClear={handleClear} calculate={calculate} handleCorrection ={handleCorrection}></Keypad> 
      </div>
      </div>
  )
}

export default App