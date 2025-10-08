import React, {useState} from "react";
import { Routes, Route, Link } from "react-router-dom";

import Register from './Register';
function Login()
{
  const [user,setuser] = useState('');
  const [pass,setpass] = useState('');
  function handlesubmit(props)
  {
    const gnpass=localStorage.getItem(user);
    if(pass===gnpass)
    {
      alert("Succesfully logged in");
    }
    else
    {
      alert("unSuccesfully logged in");
    }
  }
  return(
    <>
    <h2>LOGIN IN</h2>
    <form onSubmit={handlesubmit}>
      <label>Username :
        <input type="username" value={user} onChange={(e)=>setuser(e.target.value)}></input>
      </label>
      <br />
      <label>Password :
        <input type="password" value={pass} onChange={(e)=>setpass(e.target.value)}></input>
      </label>
      <br />
      <label>
        <button type="submit">Submit</button> 
      </label>
      <Link to='./Register'>Dont have account, click here to register</Link>
    </form>
    </>
  );


  
}  
function App()
{
  return(
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/Register" element={<Register/>} />
    </Routes>
  );
} 
export default App;// ✅ must be exactly like this
