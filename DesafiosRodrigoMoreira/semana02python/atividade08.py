# Escreva um programa que mostre os primeiros n números da sequência de Fibonacci, onde n é informado pelo usuário.

print("Quantos números da sequência de Fibonacci vc deseja mostrar?")

numero = int(input("Quantos números você quer mostrar? "))
termo1 = 0
termo2 = 1
print(f"{termo1} {termo2}",end= " ")
contador = 3
while contador <= numero:
    termo3 = termo1 + termo2
    print(f"{termo3}", end= " ")
    termo1 = termo2
    termo2 = termo3
    contador += 1
print("Fim")
