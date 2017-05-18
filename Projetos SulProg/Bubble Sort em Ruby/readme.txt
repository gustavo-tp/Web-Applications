

		Explicação do algoritmo Bubble Sort em Ruby

  - Primeira linha de código:
	my_array = 10.times.map {rand 0..100}

  Na primeira linha de código eu atribuí uma sequência de 10 inteiros aleatórios para a variável my_array, usei o método
 .time para gerar um número aleatório 10 vezes e também usei o método .map para armazenar cada número em sequência em um
 bloco, assim formando uma array.

  - Segunda linha de código:
 	puts "Vetor de inteiros desorganizado: #{my_array}

  Nesta linha usei o comando puts para exibir a sequência de inteiros aleatórios que foi gerada a partir da linha de
 código anterior.

  - Terceira linha de código:
       	for i in 1...my_array.size

  Aqui eu estou dizendo a instrução for, para percorrer pelos índices 1 até o 9 da minha array, o método .size calcula o
 tamanho total da minha matriz de uma linha que é 10, ou seja 10 índices para armazenar os inteiros e os índices são
 nomeados a partir do 0, logo o meu último índice será 9 e não 10, por isso coloquei os três pontos na frente do meu
 array.size, eles estão dizendo para o for percorrer o array de 1 até 10 sem contar com o último valor, ou seja, 
 de 1 até 9. => for i in 1...10
 Obs.: Se fossem apenas dois pontos seria incluído o 10 e o código estaria errado, a matriz ficaria com um índice a mais.

  - Quarta linha de código:
 	for n in 0...my_array.size-1

  Dessa vez a instrução do meu for percorrerá toda a array com exceção do seu último valor.

 - Quinta, sexta, sétima e oitava linhas de código:
	if my_array[i] < my_array[n]
		aux = my_array[n] 
		my_array[n] = my_array[i]
		my_array[i] = aux

  Meu if está dizendo que se minha array índice i for menor que minha array índice n, no caso se array[1] é menor que
 array[0] então eu devo trocá-las de posição, e para fazer isso eu usei uma variável auxiliar para armazezar o valor da
 array índice n, depois disso minha array[n] recebe o valor da array[i] e a array[i] recebe o valor antigo da array[n]
 que ficou armazenado na variável auxiliar, fazendo assim a troca entre os valores dos dois primeiros índices da minha
 array. No segundo loop serão comparados os índices array[2] com array[1] e assim por diante.
 Obs.: Note que a array[i] vem depois da array[n] na sequencia de índices, por isso que se [i] for menor que [n] eles
 trocam de posição.

  - Nona, décima e décima primeira linhas de código:
			end
		end
	end

  O primeiro end índica o fim da instrução if, o segundo end indica o fim do segundo for e o último end o fim do último.
 E esse laço ficará se repetindo até que toda a array esteja organizada do menor valor para o maior valor armazenados em
 cada índice da array.

  - Última linha de código:
	puts "Vetor de inteiros organizado: #{my_array}"

  O comando puts imprime a array já organizada.