// Espera o site carregar completamente
document.addEventListener("DOMContentLoaded", function(){

// Alerta inicial
alert("Exemplo de JavaScript funcionando!");


// BOTÃO MODO NOTURNO

const botaoTema = document.getElementById("modoNoturno");

botaoTema.addEventListener("change", function(){

if(botaoTema.checked){
document.body.classList.add("dark");
}else{
document.body.classList.remove("dark");
}

});

});



// FUNÇÃO QUE CRIA TEXTO COM JS
function explicarJS(){

const divJS = document.querySelector(".js");

const texto = document.createElement("p");

texto.innerText = "Este texto foi criado usando JavaScript.";

divJS.appendChild(texto);

}



// FUNÇÃO DAS PERGUNTAS
function mostrarResposta(pergunta){

if(pergunta === 1){
document.getElementById("resp1").innerText = "Resposta correta: B";
}

if(pergunta === 2){
document.getElementById("resp2").innerText = "Resposta correta: A";
}

if(pergunta === 3){
document.getElementById("resp3").innerText = "Resposta correta: C";
}

}