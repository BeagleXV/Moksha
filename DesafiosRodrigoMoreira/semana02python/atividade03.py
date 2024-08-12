# Escreva um programa que peça o peso e a altura de uma pessoa e calcule seu índice de Massa Corporal (IMC).

print("Digite seu peso e altura para saber seu IMC (índice de massa corporal)")

peso = float(input("Digite o seu peso: "))
altura = float(input("Digite a sua altura: "))
imc = peso / altura**2

print(f"Seu IMC é: {imc:.2f}")
