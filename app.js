const textArea = document.getElementById("textedit");
const button1 = document.getElementById("1");
const button2 = document.getElementById("2");
const button3 = document.getElementById("3");
const button4 = document.getElementById("4");
const h3 = document.createElement("h3");
let word;
button1.addEventListener('click', allCapital);
button2.addEventListener('click', allLower);
button3.addEventListener('click', principleLower);
button4.addEventListener('click', clear);

function allCapital(){
    word = textArea.value;
    word = word.toUpperCase();
    insertHtml(word);
}
function allLower(){
    word = textArea.value;
    word = word.toLowerCase();
    insertHtml(word);
}
function principleLower(){
    let palabras;
    word = textArea.value;
    const pala = word.split(' ');
    console.log(pala[1]);
    palabras = pala[1];
    palabras = palabras.charArt(0).toUpperCase();
    //if(split.length > 2){
       // for(var i = 0; i>pala.length; i++){
            //palabras = pala[i];
            //word = palabras.charArt(0).toUpperCase();
            //word = word + " ";
        //}
    //}else{
       // palabras=word.charArt(0).toUpperCase();
    //}
    console.log(palabras);
    insertHtml(palabras);
}
function clear(){
    textArea .value="";
    insertHtml("");
}
function insertHtml(word){
    h3.value="";
    h3.textContent=word;
    document.body.appendChild(h3);
}
