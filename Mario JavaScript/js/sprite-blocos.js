function SpriteBloco(x, y, largura, altura) {
	this.x = x;
	this.y = y;
	this.largura = largura;
	this.altura = altura;

	this.desenha = function(xCanvas, yCanvas) {
		contexto.drawImage(imgBlocos, this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura, this.altura);
	}
}

var blocoChao = new SpriteBloco(1, 78, 16, 16);
	meioBlocoChao = new SpriteBloco(1, 78, 16, 8);