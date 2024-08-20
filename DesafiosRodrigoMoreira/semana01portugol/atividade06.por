//Escreva um programa que solicite um número ao usuário e exiba a tabuada de multiplicação desse número de 1 a 10.

programa {
	funcao inicio() {
		inteiro numero

		escreva("Digite um número para ver sua tabuada: ")
		leia(numero)

		para(inteiro i = 1; i <= 10; i++) {
			escreva(numero, " x ", i, " = ", numero * i, "\n")
		}
	}
}
