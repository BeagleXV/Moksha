//Escreva um programa que solicite um número inteiro positivo ao usuário e calcule o fatorial desse número.

programa {
	funcao inicio() {
		inteiro numero, fatorial = 1

		escreva("Digite um número inteiro positivo: ")
		leia(numero)

		para(inteiro i = 1; i <= numero; i++) {
			fatorial = fatorial * i
		}

		escreva("O fatorial de " + numero + " é: " + fatorial)
	}
}
