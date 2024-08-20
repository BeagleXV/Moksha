#Escreva um programa que peça um número inteiro ao usuário e calcule o fatorial desse número.

print("Digite um número para saber seu fatorial. Digite '0' para sair do programa.")
def fatorial():
    while True:
        numero = int(input("Digite um numero para saber seu fatorial: "))
        fatorial = 1
        if numero == 0:
            break
        for i in range(numero, 0, -1):
            fatorial *= i
            if i != 1:
                print(i, end=" x ")
            else:
                print(i, end="")
        print(f" = {fatorial}")
fatorial()
