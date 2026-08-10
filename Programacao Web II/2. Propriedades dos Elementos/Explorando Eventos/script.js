const element = document.getElementById("myBtn");
element.addEventListener("mouseover", myFunction);
element.addEventListener("click", mySecondFunction);
element.addEventListener("mouseout", myThirdFunction);
element.addEventListener("mousedown", mousePressionado);
element.addEventListener("dblclick", cliqueDuplo);
document.addEventListener("keydown", TeclaPrecionada);
document.addEventListener("keyup", TeclaSolta);

const element2 = document.getElementById("select");
element2.addEventListener("change", valorAlterado);

const element3 = document.getElementById("form");
element3.addEventListener("submit", formularioEnviado);

const element4 = document.getElementById("select");
element4.addEventListener("focus", elementoFocado);

function myFunction() {
    document.getElementById("demo").innerHTML += "Passou o mouse sobre!<br>";
}
function mySecondFunction(){
    document.getElementById("demo").innerHTML += "Clicou!<br>";
}
function myThirdFunction(){
    document.getElementById("demo").innerHTML += "Tirou o cursor do mouse!<br>";
}
function mousePressionado(){
    document.getElementById("demo").innerHTML += "Botão do mouse pressionado!<br>";
}
function cliqueDuplo(){
    document.getElementById("demo").innerHTML += "Duplo clique!<br>";
}
function TeclaPrecionada(){
    document.getElementById("demo").innerHTML += "Tecla precionada!<br>";
}
function TeclaSolta(){
    document.getElementById("demo").innerHTML += "Tecla solta!<br>";
}
function valorAlterado(){
    document.getElementById("demo").innerHTML += "Valor do campo alterado!<br>";
}
function formularioEnviado(event){
    event.preventDefault();
    document.getElementById("demo").innerHTML += "Formulário enviado!<br>";
}
function elementoFocado(){
    document.getElementById("demo").innerHTML += "Elemento focado!<br>"
}