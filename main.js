function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();

}
const listadeTeclas = document.querySelector('.tecla');

let contador = 0;
while(contador < listadeTeclas.length){
    const efeito = listadeTeclas[contador].classList[1];
    
    listadeTeclas[contador].onclick = function (){}
}