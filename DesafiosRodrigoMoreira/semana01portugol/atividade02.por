//Escreva um programa que solicite dois números ao usuário, some-os e exiba o resultado.

programa {
	funcao inicio() {
		real numero1, numero2, soma

		escreva("Digite o primeiro numero: ")
		leia(numero1)

		escreva("Digite o segundo numero: ")
		leia(numero2)

		soma = numero1 + numero2
		escreva("O somatório é: " + soma)
	}
}
