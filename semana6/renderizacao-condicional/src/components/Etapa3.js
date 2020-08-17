import React from 'react';

class Pagina3 extends React.Component{
    render(){
        return(
            <div>
                <h1> Etapa3 - Informações Gerais de Ensino </h1>

                <div>
                    <p>7. Porque você não terminou um curso de graduação</p>
                        <input/>

                        <p> 8. Você fez algum curso complementar</p>
                        <select name="select">
                                <option value="valor1">Nenhum</option>
                                <option value="valor3">Curso tecnico</option>
                                <option value="valor2">Curso de inglês</option>
                        </select>
                </div>
            </div>

        );
    }
}

export default Pagina3;