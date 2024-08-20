# Escreva um programa que verifique se um número dado é um número perfeito.

def numero_perfeito(numero):
    soma = 0
    for numeros in range(1, numero):
        if numero % numeros == 0:
            soma += numeros
    return soma == numero

numero_ = int(input("Digite um número para verificar se ele é perfeito: "))

if numero_perfeito(numero_):
    print(f"O número {numero_} é perfeito.")
else:
    print(f"O número {numero_} NÃO é perfeito.")
