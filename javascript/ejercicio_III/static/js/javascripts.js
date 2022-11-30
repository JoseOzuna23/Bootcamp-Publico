var contador = 3;
var contadorElemento = document.querySelector("#contador");
console.log(contadorElemento);

function like(){
    contador++;
    contadorElemento.innerText = contador + " like(s)";
    console.log(contador);
}