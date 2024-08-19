"""Desenvolva um programa que calcule a média de várias notas inseridas pelo usuário. 
O programa deve parar de pedir notas quando o usuário digitar -1."""

soma = 0
contador = 0

while True:
    notas = float(input(f"Digite o valor da {contador+1}° nota: "))
    if notas == -1:
        break
    soma += notas
    contador += 1
media = soma / contador
print(f"A média das notas inseridas é de {media:.1f}")
