import React from "react"
import profileImage from "../images/profile-picture.png"

const Header = () => (
  <div>
    <h1 style={{marginRight:"50%", marginRight:"50%"}}>Raul Roca Juncà</h1>
    <img src={profileImage} style={{borderRadius: "50%", marginLeft:"50%"}}/>
  </div>
)

export default Header


