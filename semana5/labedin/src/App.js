import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import minhaFoto from './img/minha-foto.jpg'
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem= {minhaFoto}
          nome="Yvini Mayza" 
          descricao="Oi, eu sou a Yvini . Sou aluna da Labenu. Adoro programar ."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
       <CardPequeno
          imagem="https://image.flaticon.com/icons/svg/95/95645.svg"
          informacao= "Email: yvinimayza@gmail.com"
       />
      </div>

      <div className="page-section-container">
       <CardPequeno
          imagem="https://image.flaticon.com/icons/svg/1295/1295181.svg"
          informacao= "Endereço: Rua ao infinito e além , nº209"
            />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4D0BAQEXWbGaVeQwcw/company-logo_200_200/0?e=2159024400&v=beta&t=f1ncqf8HrDp9m2O2r94P7-F9NpC7JnNjUaa65ji9wRw" 
          nome="Almeida e Mendonça Advogados " 
          descricao="Estagio de auxiliar administrativa" 
        />
        
        <CardGrande 
          imagem="https://empbraatsstorage.blob.core.windows.net/atslogos/aee041a7-d6e2-4f98-9368-35063d93e1f8_4.png" 
          nome=" Credit Cash Acessoria Financeira" 
          descricao="Atendimento ao cliente ." 
        />
      </div>

      <div className="page-section-container">
        <h2> Meus Projetos </h2>
        <CardGrande 
          imagem="https://i.imgur.com/Jr5UlQe.png" 
          nome="Projeto Labenu" 
          descricao="Minha primeira pagina HTML!" 
        />
        
        <CardGrande 
          imagem="https://i.imgur.com/Fq4iAxg.jpg" 
          nome="Labetube" 
          descricao="Copia do youtube ." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>

  
    </div>
  );
}

export default App;
