import React, { useEffect, useState } from "react";
import {useSelector} from "react-redux"
import {io} from "socket.io-client"
import {useNavigate} from "react-router-dom"

const socket = io("https://chat-app-server-2-x9ij.onrender.com")//connect websocket server

const Chat = ()=>{
  const username = useSelector((state)=>state.user.username)
  const navigate = useNavigate()
  const [message, setMessage] =useState("")
  const [messages, setMessages] =useState([])
  const [users, setUsers] =useState([])

  useEffect(()=>{
    if(!username){
      navigate("/")
    }else{
      socket.emit("userJoined",username)
    }
  },[username, navigate])


  useEffect(()=>{
    socket.on("receiveMessage", (message)=>{
      setMessages((prev)=>[...prev,message])
    })
    socket.on("updateUsers",(users)=>{
      setUsers(users)
    })
    return()=>{
      socket.off("receiveMessage");
      socket.off("updateUsers")
    }
  },[])


  const sendMessage = () =>{
    if(!message.trim()) return;
    const messageData = {user : username, text:message}
    socket.emit("sendMessage", messageData)
    setMessage("")
  }


  return (
    <div className="chat-container">
      <div className="chat-left">
        <div className="messages">
          {
            messages.map((msg,index)=>(
              <div key={index} className={`message ${msg.user == username ? "sent" : "received"}`}>
                <strong>{msg.user}:</strong>{msg.text}
              </div>
            ))
          }
        </div>
        <div className="message-input">
          <input type="text" value={message} onChange={(e)=> setMessage(e.target.value)} placeholder="Type here...."/>

          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
      <div className="chat-right">
        <div className="online-users">
          <h3>Online Users</h3>
          <ul>
            {
              users.map((user,index)=>(
                <li key={index}>🟢{user}</li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Chat