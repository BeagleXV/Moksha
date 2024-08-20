# Escreva um programa que peça ao usuário um número n e calcule a soma dos primeiros n números naturais.

numero = int(input("Digite um número para saber a soma dos primeiros números naturais entre ele: "))
soma = 0
for numeros in range(1, numero + 1):
    soma += numeros
print(f"A soma dos primeiros {numeros} números naturais é {soma}")

