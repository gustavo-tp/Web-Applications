# Bubble Sort em Ruby

# Gerando vetor aleatório
my_array = 10.times.map {rand 0..100}
puts "Vetor de inteiros desorganizado: #{my_array}"

# Organizando o vetor
for i in 1...my_array.size
	for n in 0...my_array.size-1
		if my_array[i] < my_array[n]
			aux = my_array[n] 
			my_array[n] = my_array[i]
			my_array[i] = aux
		end
	end
end
puts "Vetor de inteiros organizado: #{my_array}"