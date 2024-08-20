//Escreva um programa que solicite 3 números ao usuário e calcule a média desses números.

programa {
	funcao inicio() {
		real numero1, numero2, numero3, media

		escreva("Digite o primeiro numero: ")
		leia(numero1)

		escreva("Digite o segundo numero: ")
		leia(numero2)

		escreva("Digite o terceiro numero: ")
		leia(numero3)

		media = (numero1 + numero2 + numero3) / 3
		escreva("A média dos números é: " + media)
	}
}
