import { useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState(1);
 // const [mulValue,setMulValue]=useState(1);------->Over Engineering
 let mulValue=value*5;
  const multiplyfive=()=>{
    //setMulValue(value * 5);
    setValue(value + 1);
  }
  return (
    <>
      <h1>  main value :  {value}</h1>
      <button   type="button"onClick={multiplyfive}>Click to Multiply to 5</button>
      <h1>Multiplied Value :  {mulValue}</h1>
    </>
  )
}

export default App
