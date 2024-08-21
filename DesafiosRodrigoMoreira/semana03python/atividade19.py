# Crie um programa que calcule a média ponderada de três notas fornecidas pelo usuário, considerando os pesos 2, 3 e 5.

notas = []

for nota in range(1,4):
    valor = float(input(f"Qual valor da {nota}ª nota: "))
    notas.append(valor)
media_ponderada = (notas[0] * 2 + notas[1] * 3 + notas[2] * 5) / 10
print(f"A média ponderada das {notas[0]}, {notas[1]} e {notas[2]} é: {media_ponderada:.2f}")

