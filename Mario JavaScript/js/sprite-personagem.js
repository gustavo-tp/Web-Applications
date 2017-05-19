function SpritePersonagem(x, y, largura, altura) {
	this.x = x;
	this.y = y;
	this.largura = largura;
	this.altura = altura;

	this.desenha = function(xCanvas, yCanvas) {
		contexto.drawImage(imgPersonagem, this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura, this.altura);
	}
}

var marioParado = new SpritePersonagem(2, 32, 12, 16);