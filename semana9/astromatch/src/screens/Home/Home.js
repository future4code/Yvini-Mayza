import React, { useState, useEffect } from "react";
import { ContainerHome, ContainerImg ,ContainerButton, ContainerHeader} from "./styled.js";
import axios from "axios";

function Home(props) {
    const [perfil, setPerfil] = useState("")

    const pegaPerfil = () => {
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/yvini/person"
        )
            .then(response => {
                setPerfil(response.data.profile)
               
            })
            .catch(error => {
                console.log(error)
            })
    }
    useEffect(() => {
        pegaPerfil()
    }, [])

    const darLike = () => {
        const body = {
            id: perfil.id,
            choice: true
        }
        axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/yvini/choose-person", body)
            .then(response => {
                pegaPerfil()
            })
            .catch(error => {
                console.log(error)
            })
    }

        const darDeslike = () =>{
            const body = {
                id:perfil.id,
                choice:false
            }
            axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/yvini/choose-person", body)
            .then(response => {
                pegaPerfil()
            })
            .catch(error => {
                console.log(error)
            })
        }
    return (
        <ContainerHome>
            <ContainerHeader>
                <h1> Astromatch </h1>
                <button onClick={props.mudarPagina}>Muda tela </button>
            </ContainerHeader>

            <ContainerImg>
                <img src={perfil.photo} width="100vw" height="90%" ></img>
                <p> {perfil.name} </p>
                <p>{perfil.age}</p>
                <p>{perfil.bio}</p>
            </ContainerImg>

            <ContainerButton>
                <button onClick={darDeslike}> X </button>
                <button onClick={darLike}> v </button>
            </ContainerButton>
            
        </ContainerHome>
    );
}

export default Home;
