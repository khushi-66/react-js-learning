import { useState } from 'react'



function App() {
  const [isLoggedin, setisLoggedIn] = useState(NaN);
  const [isLoggedin1, setisLoggedIn1] = useState(0);
  const [isLoggedin2, setisLoggedIn2] = useState();
 const [isLoggedin3, setisLoggedIn3] = useState(undefined);
  const [isLoggedin4, setisLoggedIn4] = useState("");
  
   const click=()=>{
       setisLoggedIn(!isLoggedin);
      setisLoggedIn1(!isLoggedin1);
      setisLoggedIn2(!isLoggedin2);
      setisLoggedIn3(!isLoggedin3);
      setisLoggedIn4(!isLoggedin4);
      
      };

  return (
    <>
       <button  onClick={click}>Click To OppositeValue</button>

      <h3>And && Operator  : {isLoggedin}</h3> 
      {   isLoggedin && <p>welcome</p>}
     {/* {  !! isLoggedin && <p>welcome</p>} */}
      <h3>Turnary Operator : {isLoggedin}</h3> 
       {isLoggedin ?<p>welcome</p> :<p>please log in</p>}

 
      <h3>And && Operator  : {isLoggedin1}</h3> 
      {   isLoggedin1 && <p>welcome</p>}
     {/* {  !! isLoggedin && <p>welcome</p>} */}
      <h3>Turnary Operator : {isLoggedin1}</h3> 
       {isLoggedin1 ?<p>welcome</p> :<p>please log in</p>}

        <h3>And && Operator  : {isLoggedin2}</h3> 
      {   isLoggedin2 && <p>welcome</p>}
        <h3>Turnary Operator : {isLoggedin2}</h3> 
       {isLoggedin2 ?<p>welcome</p> :<p>please log in</p>}

        <h3>And && Operator  : {isLoggedin3}</h3> 
      {   isLoggedin3 && <p>welcome</p>}
       <h3>Turnary Operator : {isLoggedin3}</h3> 
       {isLoggedin3 ?<p>welcome</p> :<p>please log in</p>}

        <h3>And && Operator  : {isLoggedin4}</h3> 
      {   isLoggedin4 && <p>welcome</p>}
     <h3>Turnary Operator : {isLoggedin4}</h3> 
       {isLoggedin4 ?<p>welcome</p> :<p>please log in</p>}


    
    </>
  )
}

export default App
