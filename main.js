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
const TempoObjetivo2 = new Date("2025-12-05T00:00:00");
const TempoObjetivo3 = new Date("2025-12-20T00:00:00");
const TempoObjetivo4 = new Date("2026-02-05T00:00:00");

const tempos = [TempoObjetivol, TempoObjetivo2, TempoObjetivo3, TempoObjetivo4]

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
    if (tempoFinal > 0 ){

        return dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + "segundos"
    }else{
        return "Prazo Finalizado";
    }
    
}

function atualizaCronometro(){
    for (let = i = 0; i < contadores.length; i++){
        contadores[i].textContent = calculaTempo(tempos[i]);
    }
}

function comecaCronometro(){
    atualizaCronometro();
    setInterval(atualizaCronometro, 1000);
}
comecaCronometro();
