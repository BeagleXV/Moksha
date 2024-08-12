"""Crie um programa que pergunte ao usuário por números até que ele digite zero e
então mostre a soma dos números digitados."""
soma = 0
contagem = 0
print("Digite quantos numeros quiser para saber a soma entre eles.\nDigite 0 para sair do programa.")
while True:
    n = int(input("Digite um numero: "))
    if n == 0:
        break
    soma+=n
    contagem+=1
   
print(f"Vc digitou {contagem} numeros e a soma entre eles é {soma}")
