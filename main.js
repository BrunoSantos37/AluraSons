function tocaSom(idElementoAudio) {
    const elemento = document.querySelector(idElementoAudio);
    
    if (elemento && elemento.localName == 'audio') {
        elemento.play();
    }
    else{
        alert('Elemento não compatível!')
    }
}

//9 botões
const teclas = document.querySelectorAll('.tecla');

for(i = 0; i < teclas.length; i++){

    const tecla = teclas[i]; // 1 tecla/botão 
    const instrumento = tecla.classList[1]; //a 2° classe da tecla
    const idSom = `#som_${instrumento}`;// id dos áudios com template string

    tecla.onclick = function() {
        tocaSom(idSom);
    }
    
    tecla.onkeydown = function(evento){
        console.log(evento.code)
        if (evento.key == 'Space' || evento.key == 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }

}
