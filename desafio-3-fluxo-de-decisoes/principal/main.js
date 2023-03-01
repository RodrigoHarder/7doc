
function perguntas(){
    
    const nome = prompt("Qual é o seu nome?");

    alert (nome + " responda para as perguntas a seguir com 1 para 'SIM' e 2 para 'NÃO'");

    const pergunta1 = prompt(nome + " você gosta da parte visual?");
    if(pergunta1 == 1){
        const pergunta2 = prompt(nome + ", você conhece as linguagens HTML, CSS e JavaScript?");
        if (pergunta2==1){
            const pergunta4 = prompt('Qua o seu nível de conhecimento nessas tecnologias? (Digite "I" para iniciante, "M" para mediano e "A" para avançado)');
            if(pergunta4 == "I"|| pergunta4 == "M"){
                const pergunta7 = prompt(nome + " gostaria de aprender mais sobre essas linguagens?");
                if (pergunta7==1){
                    alert(nome + " venha conhecer a Alura, aqui temos vários cursos que podem te ajudar a aperfeiçoar os seus conhecimentos!");
                }else if(pergunta7=="A"){
                    alert("Que pena" + nome + " ! Mas saiba que há várias tecnologias diferentes para aprender e você pode contar com a Alura para isso!");
                }
            }else if(pergunta4 = "A"){
                const pergunta8 = prompt("Muito bom" + nome + " ! Tem interesse em conhecer o que está por detrás de uma aplicação e se tornar um profisisonal FullStack?");
                if(pergunta8==1){
                    alert(nome + "venha conhecer a área de Back-End da Alura focada nesse tipo de conhecimento!");
                } else if(pergunta8==2){
                    alert("Tudo bem" + nome + " ! Continue se especializando em Front-End com outras tecnologias para aperfeiçoar os seus conhecimentos!");
                }
            }
        }else if(pergunta2==2){
            alert("Essas são as linguagens principais do Front-End, a área que cuida da parte visual do site. Caso se interesse acesso a plataforma da Alura para conhecer nossos cursos sobre essas linguagens");
        }
    }else if(pergunta1==2){
        const pergunta3 = prompt(nome + ", você prefere a área que está por detrás de uma aplicação");
        if (pergunta3==1){
            const pergunta5 = prompt(nome + ", você conhece alguma linguagem dessa área?");
            if(pergunta5==1){
                const pergunta9 = prompt(nome + ", qual(is) linguagem(ns) você conhece?");
                alert(nome +", " + pergunta9 + "  é(são) linguagem(ns) muito legal(is). Venha aprender mais sobre elas aqui na Alura!");
            }else if(pergunta5==2){
                const pergunta10 = prompt(nome + ", já ouviu falar de Java, php, Ruby ou C#?");
                if(pergunta10==1){
                    const pergunta11 = prompt(nome + ", quer aprender mais sobre alguma delas?");
                    if(pergunta11=1){
                        alert(nome + ", aqui na Alura você pode conhecer mais sobre essas linguagens é só acessar nossa plataforma, se matricular e começar seus estudos!");
                    }else if(pergunta11==2){
                        const pergunta12 = prompt(nome +", você tem interesse por outra linguagem ou área da tecnologia?");
                        if(pergunta12=1){
                            const pergunta13 = prompt(nome + ", qual área você tem interesse?");
                            alert(nome + ", aqui na Alura temos ótimos cursos sobre" + pergunta13);
                        } else if(pergunta12==2){
                            alert("Que pena" + nome + " ! Mas saiba que há muitos conhecimentos diferentes e que você pode buscar o que você mais gostar, para que assim você tenha ainda mais vontade em aprender!");
                        }
                    }
                }else if(pergunta10==2){
                    const pergunta14 = prompt(nome +", você tem interesse por outra linguagem ou área da tecnologia?");
                    if(pergunta14==1){
                        const pergunta15 = prompt(nome + ", qual área você tem interesse?");
                        alert(nome + ", aqui na Alura temos ótimos cursos sobre" + pergunta15);
                    }else if(pergunta14==2){
                        alert("Que pena" + nome + " ! Mas saiba que há muitos conhecimentos diferentes e que você pode buscar o que você mais gostar, para que assim você tenha ainda mais vontade em aprender!");
                    }
                }
            }
        }else if(pergunta3==2){
            const pergunta6= prompt("Gosta de outra área da tecnologia que não foi mencionada?");
            if(pergunta6==1){
                const pergunta16 = prompt(nome + ", qual área você tem interesse?");
                alert(nome + ", aqui na Alura temos ótimos cursos sobre" + pergunta16);
            }else if(pergunta6==2){
                alert("Que pena" + nome + " ! Mas saiba que há muitos conhecimentos diferentes e que você pode buscar o que você mais gostar, para que assim você tenha ainda mais vontade em aprender!");
            }
        }
    }
}

var listaDeCursos = [""];
var novo = document.querySelector(".lista")

function adicionar(){
    var meusCursos = document.querySelector(".container-2-inserir-curso").value;
    var j= listaDeCursos.length;
    listaDeCursos[j] = meusCursos;
    document.querySelector(".container-2-inserir-curso").value = "" ;
    imprimirNaTela();
}

function imprimirNaTela(){
    var imprimir = "";
    for(var i=0; i<listaDeCursos.length; i++){
        imprimir = `<li>${listaDeCursos[i]}</li>`;
        novo.innerHTML = imprimir;
    }
}