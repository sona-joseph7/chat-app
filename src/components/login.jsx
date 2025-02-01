import {React, useState} from "react";
import { useDispatch } from "react-redux";
import {setUsername} from "../redux/store"
import {useNavigate} from "react-router-dom"

const Login = () =>{
  const [name,setName] = useState("");
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin=()=>{
    if(!name.trim()) return;
    dispatch(setUsername(name))
    navigate("/chat")
  }

  return(
    <div className="login-container">
      <div className="login-box border rounded p-5">
       
          <h2 className="p-2 text-light">Join the Chat, Start Talking!</h2>
          <input className="form-control rounded p-1 mb-2" type="text" placeholder="What should we call you...?" value={name} onChange={(e)=> setName(e.target.value)}/>
          <button id="login-btn" className="form-control rounded p-1" onClick={handleLogin}>Start Chatting...!!!</button>
       
      </div>
    </div>
  )
}

export default Login