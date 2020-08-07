    let despesas= []
    let valor = document.getElementById("valor")
    let tipo = document.getElementById("tipo")
    let descricao = document.getElementById("descricao")
   
function cadastrarDespesas(){
   if(valor.value === "" || tipo.value === "" || descricao.value === "" )  {
        alert("Tente novamente")

   }else {
    let despesa={
        valor: Number(valor.value),
        tipo: tipo.value,
        descricao: descricao.value,
        }
    despesas.push(despesa)
    console.log(despesas)
   }

   function limparCampos(){
        valor.value = ""
        tipo.value = ""
        descricao.value = ""
        valorMaximo = ""
        valorMinimo = ""
   }
  } 
    
  let valorMaximo = document.getElementById("valorMaximo").value
  let valorMinimo = document.getElementById("valorMinimo").value

  function filtrar(){
      limparCampos()
      if(valorMaximo.value === "" || valorMaximo.value === ""){
          alert("Tenta novamente")
      }
      
     
  }
 