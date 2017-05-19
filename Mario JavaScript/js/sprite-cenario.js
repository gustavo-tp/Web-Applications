function SpriteCenario(x, y, largura, altura) {
	this.x = x;
	this.y = y;
	this.largura = largura;
	this.altura = altura;

	this.desenha = function(xCanvas, yCanvas) {
		contexto.drawImage(imgCenario, this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura, this.altura);
	}
}

var montanhaAlta = new SpriteCenario(53, 0, 80, 35);
	arbustoGrande = new SpriteCenario(39, 93, 64, 16);