# Escreva um programa que peça ao usuário um número inteiro e informe se ele é par ou ímpar.

print("Digite um número para saber se é Par ou Ímpar.")

numero = int(input("Digite um número: "))
if numero % 2 == 0:
    print(f"O número {numero} é Par.")
else:
    print(f"O número {numero} é Ímpar.")
