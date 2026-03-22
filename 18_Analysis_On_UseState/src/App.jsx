import { useState } from 'react'
import './App.css'

function App() {
  console.log("Component App() rendered ................");
  // const [value, setValue] = useState(0);
  // const clickMe=()=>{
  //  // setValue(0);             component mount firstTime only
  //  setValue(3);  //            component mount EachTime only
  //  console.log("Component App() rendered ................");
  // }

  const [value, setValue] = useState({value:0});
  const clickMe=()=>{
    setValue({value:0});             //    component mount EachTime only   
    // because reference code of  {value:0} != {value:0}
   //setValue({value:3});  //              component mount EachTime only
   console.log("Component App() rendered ................");
  }
  return (
    <>
      <button onClick={clickMe}>Click Me </button>
      <h1>Value  :  {value.value}</h1>
    </>
  )
}

export default App
