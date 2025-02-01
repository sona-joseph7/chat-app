import {BrowserRouter as Router,Routes, Route} from "react-router-dom"
import './App.css'
import Login from "./components/login"
import Chat from "./components/chat"

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element ={<Login/>}/>
        <Route path="/chat" element ={<Chat/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
