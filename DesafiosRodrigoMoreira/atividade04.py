"""Escreva um programa que peça a temperatura atual e diga se está quente (acima de
30°C), frio (abaixo de 15°C) ou agradável (entre 15°C e 30°C)"""


temperatura = int(input("Digite a temperatura atual (em °C): "))

if temperatura > 30:
    print(f"{temperatura}°C está quente demais! Beba bastante água. ")
elif 15 <= temperatura <= 30:
    print(f"{temperatura}°C está uma tempera muito agradavel!")
else:
    print(f"{temperatura}°C está muito frio! Melhor por um casaco.")
