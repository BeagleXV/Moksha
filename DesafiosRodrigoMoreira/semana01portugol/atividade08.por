//Escreva um programa que solicite um ano ao usuário e informe se o ano é bissexto ou não.

programa {
	funcao inicio() {
		inteiro ano

		escreva("Digite o ano: ")
		leia(ano)

		se ((ano % 4 == 0) e (ano % 100 != 0) ou (ano % 400 == 0)) {
			escreva(ano, " é um ano bissexto.")
		} senao {
			escreva(ano, " não é um ano bissexto.")
		}
	}
}
