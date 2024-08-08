"""Escreva um programa que peça dois números ao usuário e exiba a soma, subtração,
multiplicação e divisão deles."""


n1 = int(input("Digite um numero: "))
n2 = int(input("Digite outro numero: "))
print(f"{n1} + {n2} = {n1+n2}\n{n1} - {n2} = {n1-n2}\n{n1} x {n2} = {n1*n2}\n{n1} % {n2} = {n1/n2:.1f}")
