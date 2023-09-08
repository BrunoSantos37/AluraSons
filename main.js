
const sons = document.querySelectorAll('.sons');
const pom = document.querySelector('.som_tecla_pom');

function tocaSom() {
    pom.play();
}

//9 botões
const teclas = document.querySelectorAll('.tecla');

let contador = 0;

while(contador <= teclas.length) {
    teclas[contador].onclik = tocaSom;
    contador++
}
