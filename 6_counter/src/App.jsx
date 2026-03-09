import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
export default App;

function App() {  
  const [counter,setCounter]=useState(15);
    
  const addValue =()=>{
    if(counter<20){
setCounter(counter+1); 
//   //   after clicking one time button
// setCounter(pcounter=>pcounter+1);  // counter ---> 1   run
// setCounter(pcounter=>pcounter+1); //  counter   ---> 2   run
// setCounter(pcounter=>pcounter+1); // counter  ---> 3   run
// setCounter(pcounter=>pcounter+1); // counter ---> 4    run


// //    after clicking one time button
// setCounter(counter+1);   // counter ---> 1   run
// setCounter(counter+1);   // counter ---> 1  not run
// setCounter(counter+1);   // counter ---> 1  not run
// setCounter(counter+1);   // counter ---> 1   not run
// console.log(counter);
    }
    }
   
const removeValue =()=>{
  if(counter>0){
    setCounter(counter-1); //Hooks
console.log(counter);
  }
    
  }
  return (

    <>
      <h1>Chai our Code</h1>
      <h2>Counter Value:{counter}</h2>
      <button type="button" onClick={addValue}>Add Value</button>
      <button  type="button" onClick={removeValue}>Remove Value</button>
       </>
  );
}



// function App() {  let counter=15;
//   const addValue =()=>{
//     counter=counter+1;
//     console.log(  counter);
//    // console.log("value added ," ,Math.random());
//   }
//   return (

//     <>
//       <h1>Chai our Code</h1>
//       <h2>Counter Value:{counter}</h2>
//       <button  onClick={addValue}>Add Value</button>
//       <button>Remove Value</button>
//        </>
//   )
// }



// function App() {
//   return (
//     <>
//       <h1>chai our code</h1>
//        </>
//   )
// }

