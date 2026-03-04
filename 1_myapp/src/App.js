import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Chai from './chai.jsx';

function App() {

  const username='react our chai'
     return (
      <>
      <Chai />
      <h1>Hello {username}   !!!</h1>
      </>
   
  );
}

export default App;
