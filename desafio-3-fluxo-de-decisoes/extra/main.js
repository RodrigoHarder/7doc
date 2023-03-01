function pulaLinha(){
    document.write("<br>")
}
    
var escolha = prompt("Digite um número de 1 a 6!");

if(escolha==1){
    document.write("<img src='https://imgur.com/Gt9GRgs.png' width='180px' height='180px'>");
    pulaLinha();
    document.write("<h3>B-MO</h3>");
}else if(escolha==2){
    document.write("<img src='https://imgur.com/XOu3KGH.png' width='200px' height='200px'>");
    pulaLinha();
    document.write("<h3>Finn</h3>");
} else if(escolha==3){
    document.write("<img src='https://imgur.com/8hIBNua.png' width='250px' height='200px'>");
    pulaLinha();
    document.write("<h3>Jake</h3>");
} else if(escolha==4){
    document.write("<img src='https://imgur.com/nLS4T7V.png' width='60px' height='200px'>"); 
    pulaLinha();
    document.write("<h3>Princesa Jujuba</h3>");
} else if(escolha==5){
    document.write("<img src='https://imgur.com/lkAsWVF.png' width='200px' height='200px'>");
    pulaLinha();
    document.write("<h3>Marceline</h3>");
} else if(escolha==6){
    document.write("<img src='https://imgur.com/T1ZlgtT.png' width='180px' height='180px'>");
    pulaLinha();
    document.write("<h3>Rei Gelado</h3>");
}else{
    document.write("<h3>Selecione um valor entre 1 e 6!</h3>");
}
