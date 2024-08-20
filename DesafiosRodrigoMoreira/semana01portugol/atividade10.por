//Escreva um programa que solicite cinco números ao usuário e conte quantos são positivios.

programa {
	funcao inicio() {
		inteiro numero, contador = 0

		para(inteiro i = 1; i <= 5; i++) {
			escreva("Digite o número ", i, ": ")
			leia(numero)

			se (numero > 0) {
				contador++
			}

			escreva("Você digitou ", contador, " números positivos.\n")
		}
	}
}
