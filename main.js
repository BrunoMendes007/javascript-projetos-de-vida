const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for(let i = 0; i< botoes.length; i++){
    botoes[i].onclick = function(){
        for(let j = 0; j< botoes. length; j++){
            botoes[j].classlist.remove("ativo");
             botoes[j].classlist.remove("ativo");
        }
        botoes[i].classlist.add("ativo");
        textos[i].classlist.add("ativo");
    }
}
const contadores = document.querySelectorAll(".contador");
const TempoObjetivol = new Date("2025-10-05T00:00:00");

contadores [0] .textContent = TempoObjetivol - tempoAtual;

function calculaTempo(TempoObjetivo){
    let tempoAtual = new Date();
    let tempoFinal = TempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;

    return dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " segundos ";
    
}