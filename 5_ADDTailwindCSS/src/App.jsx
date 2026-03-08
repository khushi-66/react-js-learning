import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './card.jsx';
function App() {
      let myobj={ name:"madhu sahu",  age:23,salary:34000}
  let array=[45,6,7,7];
  return (
    <>
      <div className='mb-2 text-black text-center bg-green-300 rounded-xl p-4'>Hello Good Morning</div>
       
   <Card   username="khushi"   btntext="Click Me"  exp="4" profession="Java Devevloper"/>
    {/* <Card  name1={array}  name={myobj}/> */}
    <Card username="Rishika "   btntext="Know Me"  exp="6"  profession="SpringBoot Developer "/>
     <Card username="YashRaj "    exp="10"  profession="python Devveloper "/>
    </>
  )
}

export default App
