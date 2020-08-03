/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
      let usuario= [];
      let computador= [];

    console.log("Bem vindo ao jogo de Blackjack!")



   if(confirm("Deseja começar uma rodada?")){
  
      usuario.valorTotal = 0;
      computador.valorTotal = 0;
   
      for(let i=0;i<=1;i++){
         usuario[i] = comprarCarta();
         usuario.valorTotal += usuario[i].valor
         computador[i] = comprarCarta();
         computador.valorTotal += computador[i].valor
   
      }
   }
      console.log(`Usuário - cartas: ${usuario[0].texto} ${usuario[1].texto} - pontuação ${usuario.valorTotal}`)
      console.log(`Usuário - cartas: ${computador[0].texto} ${computador[1].texto} - pontuação ${computador.valorTotal}`)