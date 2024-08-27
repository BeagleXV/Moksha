# 1. Desvendando o Código Secreto da Polkadot

"""Objetivo: Desenvolver um programa em Python que aplique conceitos de lógica e programação
para resolver um problema de decifração de códigos utilizando laços de repetição e
condicionais. Neste desafio, você ajudará a Polkadot a proteger suas transações criptográficas
ao decifrar um código que protege os fundos em DOT, a moeda digital da rede Polkadot."""

numero_inicial = int(input("Digite o número inicial do intervalo: "))
numero_final = int(input("Digite o número final do intervalo: "))
soma = 0
for numero in range(numero_inicial, numero_final + 1):
    if numero % 3 == 0:
        soma += numero
    if numero % 5 == 0:
        soma -= numero
    if numero % 3 == 0 and numero % 5 == 0:
        continue
print(f"O valor total calculado é: {soma}")
