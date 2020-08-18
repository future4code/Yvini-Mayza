import React from 'react'

class Pagina1 extends React.Component{
    render(){
        return(
            <div >
      <h1>Etapa 1 - Dados Gerais</h1>

      <div>
      <p>1.Qual o seu nome ?</p>
      <input/>

      <p>2.Qual sua idade?</p>
      <input/>
      
       <p>3.Qual seu email?</p>
       <input/>

       <p>4.Qual a sua escolaridade?</p>
       
       <select name="select">
         <option value="valor1">Ensino médio incompleto</option>
         <option value="valor2">Ensino médio completo</option>
         <option value="valor3">Ensino superior incompleto</option>
         <option value="valor4">Ensino superior completo</option>

        

       </select>
       
      </div>

     
    </div>
            
        );

    }
}

export default Pagina1;