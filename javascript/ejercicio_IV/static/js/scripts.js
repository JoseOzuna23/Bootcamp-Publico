var contadorI = 9;
var contadorII = 12;
var contadorIII = 9;

var contadorElementoI = document.querySelector("#contadorI");
console.log(contadorElementoI);


function likeI(){
    contadorI++;
    contadorElementoI.innerText = contadorI + " like(s)";
    console.log(contadorI);
}
var contadorElementoII = document.querySelector("#contadorII");
console.log(contadorElementoII);

function likeII(){
    contadorII++;
    contadorElementoII.innerText = contadorII + " like(s)";
    console.log(contadorII);
}

var contadorElementoIII = document.querySelector("#contadorIII");
console.log(contadorElementoIII);
function likeIII(){
    contadorIII++;
    contadorElementoIII.innerText = contadorIII + " like(s)";
    console.log(contadorIII);
}
