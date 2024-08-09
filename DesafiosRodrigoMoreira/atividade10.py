"""Crie um programa que encontre e imprima todos os números primos em um intervalo
definido pelo usuário."""

print("Digite um numero para inicio e outro para o fim, e saiba os numeros primos no intervalo entre eles.")

inicio = int(input("Digite um numero para iniciar: "))
fim = int(input("Digite um numero para finalizar: "))

def eh_primo(numero):
    if numero <=1:
        return False
    for i in range(2,int(numero**0.5)+1):
        if numero % i == 0:
            return False
    return True
for numero in range(inicio, fim+1):
    if eh_primo(numero):
        print(numero, end=" ")
