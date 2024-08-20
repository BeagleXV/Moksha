# Desenvolva um programa que calcule a área de um círculo a partir do raio fornecido pelo usuário.

from math import pi

raio = float(input("Digite o valor do raio para saber a área de um circulo: "))
area = pi * raio ** 2
print(f"A área do círculo é de {area:.2f} de acordo com o valor do raio de {raio:.2f} que vc forneceu.")
