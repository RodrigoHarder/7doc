

let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];
let outros = [];

let fazerListaDeCompras = prompt("Voce deseja adicionar um item a sua lista de compras?");

function pulaLinha(){
    document.write("<br>");
}

function mostra(){
    document.write("<h1>Lista de compras do mercado</h1>");
    pulaLinha();
    document.write("<strong>Doces:</strong> " + doces);
    pulaLinha();
    document.write("<strong>Congelados:</strong> " +  congelados);
    pulaLinha();
    document.write("<strong>Frutas:</strong> " +  frutas);
    pulaLinha();
    document.write("<strong>Laticínios:</strong> " +  laticinios);
    pulaLinha();
    document.write("<strong>Outros itens:</strong> " +  outros);
}

if(fazerListaDeCompras === "sim"){
    let quantidadeDeItens = parseInt(prompt("Quantos itens deseja adicionar?"));
    for (let i=0; i<quantidadeDeItens; i++){
        let item = prompt("Digite o que deseja adicionar a sua lista");
        let categoria = prompt("Em qual categoria você deseja adicionar este item?");
        if(categoria==="doces"){
            doces.push(item);
            } else if(categoria==="congelados"){
            congelados.push(item);
                }else if(categoria ==="frutas"){
                    frutas.push(item);
                    }else if(categoria==="laticinios"){
                        laticinios.push(item);
                        }else if(categoria==="outros"){
                            outros.push(item);
                        }
    }
    mostra();
}else if (fazerListaDeCompras==="não"){
    alert("Tudo bem! Quando for ao mercado, lembre-se de adiiconar os itens a sua lista de compras!");
}