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
let tempoAtual = new Date();

contadores [0] .textContent = TempoObjetivol - tempoAtual;