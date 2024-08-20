# Escreva um programa que exiba a tabuada de um número fornecido pelo usuário.

print("Digite um número para saber sua tabuáda. Caso queira sair do programa, digite '0'.")
def tabuada():
    while True:
        numero = int(input("Digite um número para saber sua tabuáda: "))
        if numero == 0:
            break
        for i in range(1, 11):
            print(f"{i} x {numero} = {i * numero}")
tabuada()



