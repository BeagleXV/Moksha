temp = int(input("Digite a temperatura atual (em °C): "))

if temp > 30:
    print(f"{temp}°C está quente demais! Beba bastante água. ")
elif 15 <= temp <= 30:
    print(f"{temp}°C está uma tempera muito agradavel!")
else:
    print(f"{temp}°C está muito frio! Melhor por um casaco.")
