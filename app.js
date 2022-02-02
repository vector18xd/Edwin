const count = document.getElementById("count");
const img = document.getElementById("img");
const buttonPlus = document.getElementById("3");
const buttonReset = document.getElementById("2");
const buttonLess = document.getElementById("1");

let counts = 0;

buttonPlus.addEventListener('click',Plus);
buttonReset.addEventListener('click',Reset);
buttonLess.addEventListener('click',Less);

function Plus(){
    counts  = counts+1;
    imprimir(counts);
}
function Reset(){
    counts = 0;
    imprimir(counts)
}
function Less(){
    counts=counts-1;
    imprimir(counts)
}
function imprimir(counts){
    count.textContent=counts;
    img.style.filter="brightness("+(100+counts)+"%)";  
}
