/*
let nome = prompt('Qual o seu nome?');
let idade = prompt('Qual a sua idade?');
let linguagem = prompt('Qual a linguagem de programação você está estudando?')

function mostra(frase){
    document.write(`${"<h3>" + frase + "</h3>"}`);
    document.write("<br>");
}

mostra ("Olá " + nome + ", você tem " + idade + " anos e já está aprendendo " + linguagem + " !");

let gostoDeEstudar = prompt('Você gosta de  estudar ' + linguagem + ' ? Rosponda com o número 1 para SIM ou 2 para NÃO.');

if(gostoDeEstudar == 1){
    mostra("Muito bom! Continue estudando e você terá muito sucesso.");
} else if (gostoDeEstudar == 2){
    mostra("Ah que pena... Já tentou aprender outra linguagem?");
} else{
    alert('Digite uma opção válida!')
}
*/

function mostraFrase(){

    let nome = document.querySelector("#nome").value;
    let idade = document.querySelector("#idade").value;
    let linguagem = document.querySelector("#linguagem").value;

    document.querySelector(".frase").innerText = ('Olá ' + nome + ', você tem ' + idade + ' anos e já está aprendendo ' + linguagem + ' !');

    document.querySelector("#nome").value = "";
    document.querySelector("#idade").value = "";
    document.querySelector("#linguagem").value = "";
}

function respostaSim(){
    document.querySelector(".frase-opcao").innerText = ('Muito bom! Continue estudando e você terá muito sucesso.')
}

function respostaNao(){
    document.querySelector(".frase-opcao").innerText = ('Ah que pena... Já tentou aprender outra linguagem?')
}



