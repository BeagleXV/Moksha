# Escreva um programa que peça ao usuário uma lista de números e, ao final, exiba o maior, o menor, e a média dos números inseridos.

lista_numeros = []
soma = 0
contador = 0
while True:
    numero = int(input("Digite um número (digite 0 para parar o programa): "))
    soma += numero
    contador += 1
    if numero == 0:
        break
    lista_numeros.append(numero)
media = soma / contador
print(f"O maior número é {max(lista_numeros)}, o menor número é {min(lista_numeros)} e a média entre os numeros é: {media}")


