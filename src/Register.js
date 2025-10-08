import React,{useState} from 'react';
import { useNavigate } from "react-router-dom";
function Register()
{
    const [user,setuser]=useState('');
    const [ph,setph]=useState('');
    const [email,setemail]=useState('');
    const [pass,setpass]=useState('');
    const [msg,setmsg]=useState('')

    const navigate = useNavigate();

    function submit()
    {
        if(user&&pass)
        {
            localStorage.setItem(user,pass);
            setmsg('Successfully Registered');
            setTimeout(()=>{
                navigate("/");},1000);
            }

        
        else{
            setmsg('Enter details');
        }
    };
    return(
        <>
        <h1>Register</h1>
        <form onSubmit={submit}>
            <label> Name : 
                <input type='text' value={user} onChange={(e)=>setuser(e.target.value)}></input>
                </label>
                <br/>
            <label>Phone No. :
                <input type='number' value={ph} onChange={(e)=>setph(e.target.value)}></input>
                </label> 
                <br/> 
            <label> Email : 
                <input type='email' value={email} onChange={(e)=>setemail(e.target.value)}></input>
                </label>  
                <br/>  
            <label> Password : 
                <input type='password' value={pass} onChange={(e)=>setpass(e.target.value)}></input>
                </label> 
                <br/>
            <label>
                <button type='submit'>Submit</button>
                </label>   
                <br/>
                <h1>{msg}</h1>      
                </form>
                </>
    );
}
export default Register;