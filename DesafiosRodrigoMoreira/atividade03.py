"""Escreva um programa que peça dois números ao usuário e exiba a soma, subtração,
multiplicação e divisão deles."""

print("Digite 2 numeros para saber sua soma, subtração, multiplicação e divisão deles.")
n1 = int(input("Digite o primeiro numero: "))
n2 = int(input("Digite o segundo numero: "))
print(f"{n1} + {n2} = {n1+n2}\n{n1} - {n2} = {n1-n2}\n{n1} x {n2} = {n1*n2}\n{n1} % {n2} = {n1/n2:.1f}")
