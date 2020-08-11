import React from 'react';
import './CardPequeno.css'

function CardPequeno (props){
    return (
        <div className="littleCard">
            <img src={props.imagem}/>
             <p> {props.informacao} </p>
             
        </div>
    )

}

export default CardPequeno;