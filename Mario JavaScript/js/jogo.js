var canvas, contexto, ALTURA, LARGURA, frames = 0, imgBlocos, imgCenario, imgPersonagem,

	chao = {
		y: 200,
		x: 0,

		desenha: function() {
			var i = this.x + blocoChao.largura;
			blocoChao.desenha(this.x, this.y);
			meioBlocoChao.desenha(this.x, 216);	
			while (i < LARGURA) {
				blocoChao.desenha(i, this.y);				
				meioBlocoChao.desenha(i, 216);
				i += blocoChao.largura;
			}					
		}
	},

	cenario = {
		y: 165,
		x: 0,

		desenha: function() {
			montanhaAlta.desenha(this.x, this.y);
			arbustoGrande.desenha(184, 184);
		}
	},

	personagem = {
		y: 185,
		x: 42,
		altura: marioParado.altura,
		largura: marioParado.largura,
		gravidade: 0.5,
		velocidade: 0,
		forcaDoPulo: 7,
		qtdPulos: 0,

		pula: function() {			
			//if (this.qtdPulos < 1) {
				this.velocidade = -this.forcaDoPulo;
				this.qtdPulos++;
			//}
		},

		andaDireita: function() {
			this.x += 5;
		},

		andaEsquerda: function() {
			this.x -= 5;
		},

		atualiza: function() {
			this.velocidade += this.gravidade;
			this.y += this.velocidade;

			if (this.y > chao.y - this.altura) {
				this.y = chao.y - this.altura;
			}
		},

		desenha: function() {
			marioParado.desenha(this.x, this.y);
		}
	};

function keyPressed(evt) {
    evt = evt || window.event;
    var key = evt.keyCode || evt.which;
    //return String.fromCharCode(key);
    if (key == 38) {
    	personagem.pula();
    }

    else if (key == 39) {
    	personagem.andaDireita();
    }

    else if (key == 37) {
    	personagem.andaEsquerda();
    }
}


document.onkeydown = function (evt) {
    var str = keyPressed(evt);
};

// function clique(event) {
// 	personagem.pula();
// }

function main() {
	ALTURA = 224;
	LARGURA = 256;	

	canvas = document.createElement("canvas");
	canvas.height = ALTURA;
	canvas.width = LARGURA;		
	canvas.style.border = "1px solid #000";

	contexto = canvas.getContext("2d");
	document.body.appendChild(canvas);

	//document.addEventListener("mousedown", clique);

	imgBlocos = new Image();
	imgBlocos.src = "imagens/blocos.png";

	imgCenario = new Image();
	imgCenario.src = "imagens/cenario.png";

	imgPersonagem = new Image();
	imgPersonagem.src = "imagens/personagem.png";

	roda();
}

function roda() {
	atualiza();
	desenha();

	window.requestAnimationFrame(roda);
}

function atualiza() {
	frames++;

	personagem.atualiza();
}

function desenha() {
	contexto.fillStyle = "#5C94FC";
	contexto.fillRect(0, 0, LARGURA, ALTURA - 24);

	chao.desenha();
	cenario.desenha();
	personagem.desenha();
}

main();