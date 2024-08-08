"""Escreva um programa que peça a temperatura atual e diga se está quente (acima de
30°C), frio (abaixo de 15°C) ou agradável (entre 15°C e 30°C)"""


temp = int(input("Digite a temperatura atual (em °C): "))

if temp > 30:
    print(f"{temp}°C está quente demais! Beba bastante água. ")
elif 15 <= temp <= 30:
    print(f"{temp}°C está uma tempera muito agradavel!")
else:
    print(f"{temp}°C está muito frio! Melhor por um casaco.")
