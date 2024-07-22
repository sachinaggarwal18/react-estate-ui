import { useState } from "react"
import "./navbar.scss"

function Navbar() {

  const[open,setOpen] = useState(false);

  return (
    <nav>

        <div className="left">
          <a href="/" className="logo" >
            <img src="/logo.png" alt="" />
            <span>Sachin.</span>
          </a>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
        </div>

        <div className="right">
          <a href="">Sign Up</a>
          <a href="" className="register">Log In</a>
          <div className="menuIcon" onClick={()=>setOpen(!open)}>
            <img src="/menu.png" alt="" />
          </div>
          <div className={open ? "menu active" : "menu"}>
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Contact</a>
            <a href="/">Agents</a>
            <a href="/">Sign Up</a>
            <a href="/">Log In</a>
          </div>
        </div>
    </nav>
  )
}

export default Navbar
