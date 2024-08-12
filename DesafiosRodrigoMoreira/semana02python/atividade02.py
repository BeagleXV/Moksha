#Crie um programa que converta uma temperatura dada em Celsius para Fahrenheit e Kelvin.

celsius = float(input("Digite a temperatura (atual em °C): "))
fahrenheit = (celsius * 9/5) + 32
kelvin = celsius + 273.15
print(f"A temperatura em {celsius:.1f}°C corresponde a {fahrenheit:.1f}°F e {kelvin:.1f}K")
