class Monstro{
    constructor(nome, hp){
        this.nome = nome;
        this.hp = Number(hp);

    }
    receberDano(quantidade){
        this.hp -= quantidade 
        if(this.hp <= 0){
            this.hp = 0;
            return `${this.nome} bateu as botas!!`
        }else{
            return `${this.nome} sofreu ${quantidade} de dano!`;
        }
    }
}

let monstroBatalha;
function iniciarJogo(){
    const nomeMonstro = document.getElementById('nomeMonstro').value;
    const hpMonstro = document.getElementById('hpMonstro').value;
monstroBatalha = new Monstro(nome, hp);

function atualizaTela(){
    document.getElementById('painel-combate')
}


}