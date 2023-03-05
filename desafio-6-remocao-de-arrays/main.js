let listaDeFilmes = [];
let elementoFilmeNovo=document.querySelector(".novos-itens");
let elementoSelecao=document.querySelector("#conteudo-delecao-apagar");

function imprimirNaTela(){
    let codigoImprimir = "";
    for(let i=0; i<listaDeFilmes.length; i++){
        codigoImprimir +=`<div class="novo-filme">${listaDeFilmes[i].filme} (${listaDeFilmes[i].categoria})</div>`
    }
    elementoFilmeNovo.innerHTML=codigoImprimir;
}

function adicionarFilme(){
    let filme=document.querySelector("#item").value;
    let categoria=document.querySelector("#categoria").value;

    let novoItem=listaDeFilmes.length;
    listaDeFilmes[novoItem]={filme};
    listaDeFilmes[novoItem].categoria=categoria;
    imprimirNaTela();
    listaDeSelecao();
    limpaInputs();
}

function listaDeSelecao(){
    let listaDeSelecao=`<option selected disabled value="">Selecione um filme para deletar</option>`;
    for(let i=0; i<listaDeFilmes.length; i++){
        listaDeSelecao+=`<option value="${[i]}">${listaDeFilmes[i].filme} (${listaDeFilmes[i].categoria})</option>`;
    }
    elementoSelecao.innerHTML=listaDeSelecao;
}

function deletarFilme(){
    let selecao = parseInt(document.querySelector("#conteudo-delecao-apagar").value);
    if(selecao>=0){
        listaDeFilmes.splice(selecao, 1);
        imprimirNaTela();
        listaDeSelecao();
    }
}

function limpaInputs(){
    document.querySelector("#item").value="";
    document.querySelector("#categoria").value="";
}

document.querySelector(".rodape-mudar-cor").addEventListener("click", () => {
    document.body.classList.toggle("mudar-cor");
  })

listaDeSelecao();
