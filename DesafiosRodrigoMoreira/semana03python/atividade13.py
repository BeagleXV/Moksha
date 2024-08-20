# Escreva um programa que calcule a soma de todos os números pares entre 1 e 100.

soma = 0

for numero in range(1,101):
    if numero % 2 == 0:
        soma += numero

print(f"A soma de todos os números pares entre 1 e 100 é {soma}")
