import React from "react"
import profileImage from "../images/profile-picture.png"
import "./left_column.css";
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn"
import { FaGithub } from "@react-icons/all-files/fa/FaGithub"
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope"
import { FaMobile } from "@react-icons/all-files/fa/FaMobile";

const LeftColumn = () => {
    return (
   <div className="resume_left">
     <div className="resume_profile">
     <img src={profileImage}/>
     </div>
     <div className="resume_content">
       <div className="resume_item resume_info">
         <div className="title">
           <p className="bold">Raül Roca Juncà</p>
           <p className="regular">Software Developer</p>
         </div>
         <ul>
           <li>
               <FaMobile className="mobile"/>
             <div className="data">
               606037703
             </div>
           </li>
           <li>
              <FaEnvelope className="email"/>
             <div className="data">
               alcarras.raulroca@gmail.com
             </div>
           </li>
         </ul>
       </div>
       <div className="resume_item resume_skills">
         <div className="title">
           <p className="bold">skills</p>
         </div>
         <ul>
           <li>
             <div className="skill_name">
               HTML
             </div>
             <div className="skill_progress">
               <span style={{width: "60%"}}></span>
             </div>
             <div className="skill_per">60%</div>
           </li>
           <li>
             <div className="skill_name">
               CSS
             </div>
             <div className="skill_progress">
               <span style={{width: "30%"}}></span>
             </div>
             <div className="skill_per">30%</div>
           </li>
           <li>
             <div className="skill_name">
               Java
             </div>
             <div className="skill_progress">
               <span style={{width: "90%"}}></span>
             </div>
             <div className="skill_per">90%</div>
           </li>
           <li>
             <div className="skill_name">
               JS
             </div>
             <div className="skill_progress">
               <span style={{width: "80%"}}></span>
             </div>
             <div className="skill_per">80%</div>
           </li>
           
         </ul>
       </div>
       <div className="resume_item resume_social">
         <div className="title">
           <p className="bold">Social</p>
         </div>
         <ul>
           <li>
             <div className="icon">
               <FaLinkedinIn className="icon"/>
             </div>
             <div className="data">
               <p className="semi-bold">Github</p>
               <p><a href="https://github.com/raultds">Raül Roca Junca</a></p>
             </div>
           </li>       
           <li>
             <div className="icon">
              <FaGithub className="icon"/>
             </div>
             <div className="data">
               <p className="semi-bold">Linkedin</p>
               <a href="https://www.linkedin.com/in/ra%C3%BCl-roca-junc%C3%A0-869776178/"><p>Raül Roca Juncà</p></a>
             </div>
           </li>
         </ul>
       </div>
     </div>
  </div>
    )
}

export default LeftColumn;