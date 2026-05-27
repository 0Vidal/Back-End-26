/*
Desafio 
Enunciado: 
"Foi adicionado um novo campo de input do tipo number no HTML chamado 'Nível do Herói'. 
Modifique a classe Heroi para que o construtor também receba e armazene esse nível.
No JavaScript da função, capture esse novo input e garanta que o nível seja exibido 
no painel de resultado acessando a propriedade do objeto."
*/ 

class heroi{
    constructor(nome, classe, nivel){
        this.nome = nome;
        this.classe = classe;
        this.nivel = nivel
    }
}
    function criarHeroi(){
        const nomeHeroi = document.getElementById('nomeInput').valiue;
        const classeSelecionada = document.getElementById('classeSelect').value;
        const nivelHeroi = document.getElementById('nivelinput').value

        const novoHeroi = new heroi(nomeHeroi, classeSelecionada, nivelHeroi);

        document.getElementById('resultado').style.display = "block";
        document.getElementById('dadosHeroi').innerHTML = `
        Nome: <strong>${novoHeroi.nome}</strong> <br>
        Classe: <strong>${novoHeroi.classe}</strong>
        Nível: <strong>${novoHeroi.nivel}</strong>`;

    }
