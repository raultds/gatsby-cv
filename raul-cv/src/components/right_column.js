import React from "react";
import "./right_column.css"



const RightColumn = (props) => {   
    return (
        <div className="resume_right">
    <div className="resume_item resume_about">
        <div className="title">
           <p className="bold">Qui soc?</p>
         </div>
        <p>Graduat d'Enginyeria Informàtica amant de la tecnologia. M'agrada treballar en equip i tenir una actitud proactiva tant dins com fora de l'àmbit acadèmic i professional.
          <br/>Tinc moltes ganes d'aprendre i millorar les meves habilitats.</p>
    </div>
    <div className="resume_item resume_work">
        <div className="title">
           <p className="bold">Experiència laboral</p>
         </div>
        <ul>
            <li>
                <div className="date">{props.context.prismicData[0].dateEnd} - {props.context.prismicData[0].dateStart}</div> 
                <div className="info">
                     <p className="semi-bold">{props.context.prismicData[0].experienceTitle}</p> 
                </div>
            </li>
            <li>
              <div className="date">{props.context.prismicData[1].dateEnd} - {props.context.prismicData[1].dateStart}</div>
              <div className="info">
                     <p className="semi-bold">{props.context.prismicData[1].experienceTitle}</p> 
                </div>
            </li>
        </ul>
    </div>
    <div className="resume_item resume_education">
      <div className="title">
           <p className="bold">Educació</p>
         </div>
      <ul>
            <li>
                <div className="date">2016-2020</div> 
                <div className="info">
                     <p className="semi-bold">Enginyeria Informàtica</p> 
                  <p>Menció en Enginyeria del Software</p>
                </div>
            </li>
            <li>
              <div className="date">2015</div>
              <div className="info">
                     <p className="semi-bold">University of Cambridge</p> 
                  <p>First Certificate in English</p>
                </div>
            </li>
        </ul>
    </div>
  </div>
    )
}

export default RightColumn