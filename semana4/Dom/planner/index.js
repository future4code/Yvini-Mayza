function criarTarefa(){

    let valorInput = document.getElementById("tarefa")

    let valorSelect = document.getElementById("dias-semana")

    if(valorInput.value !== ""){

        console.log(`${valorSelect.value} ${valorInput.value}`)

        let lista =document.getElementById(`${valorSelect.value}`)
        

        lista.innerHTML +=`<p> ${valorInput.value}</p>`

         valorInput.value=""

    }else{

        alert("digite alguma tarefa ")
    }

   
}
