

		Explica��o do algoritmo Bubble Sort em Ruby

  - Primeira linha de c�digo:
	my_array = 10.times.map {rand 0..100}

  Na primeira linha de c�digo eu atribu� uma sequ�ncia de 10 inteiros aleat�rios para a vari�vel my_array, usei o m�todo
 .time para gerar um n�mero aleat�rio 10 vezes e tamb�m usei o m�todo .map para armazenar cada n�mero em sequ�ncia em um
 bloco, assim formando uma array.

  - Segunda linha de c�digo:
 	puts "Vetor de inteiros desorganizado: #{my_array}

  Nesta linha usei o comando puts para exibir a sequ�ncia de inteiros aleat�rios que foi gerada a partir da linha de
 c�digo anterior.

  - Terceira linha de c�digo:
       	for i in 1...my_array.size

  Aqui eu estou dizendo a instru��o for, para percorrer pelos �ndices 1 at� o 9 da minha array, o m�todo .size calcula o
 tamanho total da minha matriz de uma linha que � 10, ou seja 10 �ndices para armazenar os inteiros e os �ndices s�o
 nomeados a partir do 0, logo o meu �ltimo �ndice ser� 9 e n�o 10, por isso coloquei os tr�s pontos na frente do meu
 array.size, eles est�o dizendo para o for percorrer o array de 1 at� 10 sem contar com o �ltimo valor, ou seja, 
 de 1 at� 9. => for i in 1...10
 Obs.: Se fossem apenas dois pontos seria inclu�do o 10 e o c�digo estaria errado, a matriz ficaria com um �ndice a mais.

  - Quarta linha de c�digo:
 	for n in 0...my_array.size-1

  Dessa vez a instru��o do meu for percorrer� toda a array com exce��o do seu �ltimo valor.

 - Quinta, sexta, s�tima e oitava linhas de c�digo:
	if my_array[i] < my_array[n]
		aux = my_array[n] 
		my_array[n] = my_array[i]
		my_array[i] = aux

  Meu if est� dizendo que se minha array �ndice i for menor que minha array �ndice n, no caso se array[1] � menor que
 array[0] ent�o eu devo troc�-las de posi��o, e para fazer isso eu usei uma vari�vel auxiliar para armazezar o valor da
 array �ndice n, depois disso minha array[n] recebe o valor da array[i] e a array[i] recebe o valor antigo da array[n]
 que ficou armazenado na vari�vel auxiliar, fazendo assim a troca entre os valores dos dois primeiros �ndices da minha
 array. No segundo loop ser�o comparados os �ndices array[2] com array[1] e assim por diante.
 Obs.: Note que a array[i] vem depois da array[n] na sequencia de �ndices, por isso que se [i] for menor que [n] eles
 trocam de posi��o.

  - Nona, d�cima e d�cima primeira linhas de c�digo:
			end
		end
	end

  O primeiro end �ndica o fim da instru��o if, o segundo end indica o fim do segundo for e o �ltimo end o fim do �ltimo.
 E esse la�o ficar� se repetindo at� que toda a array esteja organizada do menor valor para o maior valor armazenados em
 cada �ndice da array.

  - �ltima linha de c�digo:
	puts "Vetor de inteiros organizado: #{my_array}"

  O comando puts imprime a array j� organizada.