import React from "react";
import '../styles/css/Card.css';


function Card ({nutriment, valeur, imgNutriment, bgColor}) {


    return (
        <div className="card">
            <div 
            className="card__img"
            style={{ backgroundColor: bgColor }}
            >
                <img src={imgNutriment} alt=""  />
            </div>
           
            <div className="card__text">
                <p><strong>{valeur}</strong></p>
                <p>{nutriment}</p>
            </div>

        </div>
    )
}

export default Card;