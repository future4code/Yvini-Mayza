
a = 10
b = 10

// console.log(b)

b = 5
// console.log(a, b)
/*
Será impresso 10 
              10 5 
*/



a = 10
b = 20
c = a
b = c
a = b

// console.log(a, b, c)
/*
Será impresso 10 20 10
*/


/*1- A */
    let nome;

/* B*/
    let idade;

/*C*/
    // console.log(typeof(nome))
    // console.log(typeof(idade))

/*D 
Undefined foi imprimido no console, porque não tem nenhum valor, então retorna como tipo indefinido .
*/
     nome = prompt("Qual é o seu nome?")
     idade = prompt("qual a sua idade?")
    
/*E*/
    // console.log(typeof(nome))
    // console.log(typeof(idade))

/* Notei que o que estava sendo impresso mudou de undefined para string */

/*F*/
   console.log("ola",nome,"você tem ",idade,"anos" )
   

 /* 2*/
    let endereco;
    let comida;
    let cor;
    let musica;
    let esporte;

    endereco = prompt("qual é o seu endereço?")
    comida= prompt("qual é sua comida favorita ?")
    cor = prompt("qual é a sua cor favorita?")
    musica = prompt("qual é sua musica favorita")
    esporte = prompt("qual é o seu esporte favorito")

    // console.log("meu endereço é:",endereco,"minha comida favorita:",comida,"cor favorita:",cor,"música favorita:",musica,"esporte favorito:",esporte)

 /* 3-A*/
  let comidasfavoritas = ["lasanha","escondidinho","pizza","macarrão","feijoada"]

 /*B*/ 
//   console.log(comidasfavoritas)
 
//   console.log(comidasfavoritas[0])
//   console.log(comidasfavoritas[1])
//   console.log(comidasfavoritas[2])
//   console.log(comidasfavoritas[3])
//   console.log(comidasfavoritas[4])

/*C*/
 
 comidasfavoritas[1]= prompt("qual é sua comida preferida ?")
//  console.log(comidasfavoritas)

 /* 4*/
 let perguntas =["você almoçou hoje?","você está usando preto hoje?", "você dormiu bem hoje?"]

 let respostas =[false,true,true]

 console.log( perguntas[0], respostas[0])
 console.log( perguntas[1], respostas[1])
 console.log( perguntas[2], respostas[2])
 


  
  
    
 
   
