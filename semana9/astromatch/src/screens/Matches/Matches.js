import React, { useState , useEffect} from "react"
import axios from "axios"

export default function Matches (props){
    const[likes, setLikes]= useState([])
 
    const pegarMatches =() =>{
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/yvini/matches")
        .then(response =>{
           console.log(response)
            setLikes(response.data.matches)
        })
        .catch(error =>{
            console.log(error)
        })
     }

     useEffect(() =>{
         pegarMatches()
     },[likes])

      const limparMatches =() => {
          axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/yvini/clear ")
          .then(response =>{
            setLikes([])
          })
          .catch(error =>{
            console.log(error)
          })
      }
    return(
     <div>
         <button onClick={limparMatches}>Limpar</button>
         <button onClick={props.mudarPagina}>Muda tela </button>
         {likes.map((item)=>{
             return(
            <p>{item.name}</p>
             )
         })}
     </div>
    )
}