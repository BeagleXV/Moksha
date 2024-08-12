#Escreva uma função que receba um número e retorne se ele é par ou ímpar.

def imparpar():    
    num = int(input("Digite um numero para saber se é par ou impar: "))
    if num % 2 == 0:
        num = "Par"
    else:
        num = "impar"
    return num

print(imparpar())

