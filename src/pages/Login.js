import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import Navbar from '../components/Navbar'
import users from '../data/users'
function Login ({changeLoginState}){
    
    let navigate = useNavigate()
    const[email, setEmail] = useState("")
    const [password, setPassword]= useState("")
    //const [isloggedIn, setIsLoggedIn] = useState(false)
    let handleSubmit = ()=>{
        let userExist = users.findIndex(user=>user.identifier == email)
        if(userExist == -1){
            alert("User does not exist")
        }
        else{
            if(users[userExist].password == password){
                changeLoginState(true)
                navigate("/dashboard")
            }
            else{
                alert("Password Mismatch")
            }
        }
       
        
    }
    return(
    <div className="login-parent">
        <Navbar></Navbar>
    <h2>Hello! Login</h2>

    <div className="login">
    <div className="login-body">
   
    <input className="login-phone-email" value={email} onChange={e=>{setEmail(e.target.value)}} type="text"  placeholder= " Phone No/Email" name="" id=""></input>

    <input className="login-password" value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder=" Password"></input>
   
        </div>
        
        <div className="login-butt">
        <button onClick={handleSubmit}>Login</button>
        <p>Forget Password? Click here</p>
        </div>
        </div>
    
    </div>
    )
    }
    
    
    export default Login