#Escreva um programa que peça um número inteiro ao usuário e calcule o fatorial desse número.

numero = int(input("Digite um numero para saber seu fatorial: "))
fatorial = 1
for i in range(numero, 0, -1):
    fatorial *= i
    if i != 1:
        print(i, end=" x ")
    else:
        print(i, end="")
print(f" = {fatorial}")
