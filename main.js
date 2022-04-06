function tocaSom (seletorAudio){

	const elemento = document.querySelector(idElementoAudio);


	if (elemento && elemento.localName === 'audio') {
				elemento.play();
			}

	else {
		alert('Elemento não encontrado')
		
	     }
	}
	

}

const listaDeTeclas = document.querySelectorAll('.tecla');


// for = deixa colocar variável e outras condições dentro, while não
//while = enquanto/if 

for (contador = 0; contador < listaDeTeclas.length; contador ++) {

	const teclas = listaDeTeclas[contador];
	const instrumento = teclas.classList[1];

	// Template String
	const idAudio = `#som_${instrumento}`;

	teclas.onclick = function(){
			tocaSom(idAudio);
	}	 

	teclas.onkeydown = function (evento) {

		if (evento.code === 'Space' || evento.code === 'Enter') {
			teclas.classList.add('ativa');

		}
		
	}

	teclas.onkeyup = function() {
		teclas.classList.remove('ativa');
	}
}
