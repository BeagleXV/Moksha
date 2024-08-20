# Crie um programa que leia três números diferentes e os imprima em ordem crescente.

numeros = []
for posicao in range(1,4):
    numero = int(input(f"Digite o {posicao}° numero: "))
    numeros.append(numero)

if numeros[0] > numeros[1]:
    numeros[0], numeros[1] = numeros[1], numeros[0]
if numeros[0] > numeros[2]:
    numeros[0], numeros[2] = numeros[2], numeros[0]
if numeros[1] > numeros[2]:
    numeros[1], numeros[2] = numeros[2], numeros[1]

print("Os números digitados na ordem crescente: ", end="")
for numero in numeros:
    print(numero, end= " ")
print("")    
