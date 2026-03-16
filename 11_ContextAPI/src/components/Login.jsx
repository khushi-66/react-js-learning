import { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function Login()
{
    const [userName,setUsername]=useState('');
    const[password,setPassword]=useState('');
    const {setUser}=useContext(UserContext);
    const handlesubmit=(e)=>{
        e.preventDefault();
        setUser({userName,password});
    }
return(
          <div>
            <h2>Login Form</h2>
            <input type='text' value={userName} onChange={(e)=>setUsername(e.target.value)}  placeholder="userName"/><br></br>
        <br></br> <input type='text' value={password} onChange={(e)=>setPassword(e.target.value)}  placeholder="password"/><br></br><br></br>
        <button type="submit"   onClick={handlesubmit}>Login</button>
          </div>
);
}

export default Login;