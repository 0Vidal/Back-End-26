function lutar(){
const classe = document.getElementById('classe').value;
const arma = document.getElementById('arma').value.trim();
const log = document.getElementById('log');

if(!arma){
    log.innerHTML= "Você deve escolher uma arma."
    return;
}

    const dado= Math.floor(Math.random()*20)+1;
    let resultado = `Dado: ${dado} | <strong>${classe}</strong> com <strong>${arma}</strong>`;

    switch(classe){
        case "Guerreiro":
            if(arma.toLowerCase()==="espada" && dado>5){
                resultado += "<span class='sucesso'> SUCESSO: Você apunhalou o monstro com sua espada.</span>"
            }else if(dado>15){
                resultado += "<span class='sucesso'> VITÓRIA: Você espancou o inimigo até a morte.</span>"
            }else{
                resultado += "<span class='derrota'> DERROTA: Você falhou Guerreiro, com a sua morte os monstros dizimaram a humanidade</span>"
            }
            break;

        case "Mago":
            if(arma.toLowerCase()==="cajado" && dado>8){
                resultado += "<span class='sucesso'> SUCESSO: Você lançou um feitiço no monstro.</span>"
            }else if(dado === 20){
                resultado += "<span class='sucesso'> VITÓRIA: A sorte está do seu lado. Você venceu mesmo sem seus feitiços.</span>"
            }else{
                resultado += "<span class='derrota'> DERROTA: Você falhou miseravelmente. Resultando em sua morte.</span>"
            }
            break;
            
        case "Arqueiro":
            if(arma.toLowerCase()==="arco" && dado>8){
                resultado += "<span class='sucesso'> SUCESSO: Sua flecha perfurou o inimigo.</span>"
            }else if(dado === 20){
                resultado += "<span class='sucesso'> CRÍTICO: A sorte está do seu lado. Poucos arqueiros conseguiram tal façanha </span>"
            }else{
                resultado += "<span class='derrota'> DERROTA: Você atirou uma flecha, porém o arco estourou e os estilhaços atingiram seu peito.</span>"
            }
            break;
        
        default:
            resultado += "Você paralisou de medo."  
    }
    log.innerHTML = resultado   
}

