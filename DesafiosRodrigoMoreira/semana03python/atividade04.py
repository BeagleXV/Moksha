# Crie um programa que verifique se uma palavra ou frase é um palíndromo.

print("Escreva uma frase para saber se é um palíndromo. Digite 'sair' para sair do programa.")
while True:
    frase = input("Escreva uma frase: ").replace(" ","").lower()
    if frase == "sair":
        break
    if frase[::-1] == frase:
        print(f"A frase '{frase}' é um palíndromo.")
    else:
        print(f"A frase '{frase}' NÃO é um palíndromo.")
