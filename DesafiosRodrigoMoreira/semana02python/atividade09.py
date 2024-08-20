"""Escreva um programa que peça uma frase ao usuário e conte quantas vezes uma letra
específica aparece."""

print("Digite uma frase e uma letra para saber quantas vezes essa letra aparece na frase.")

frase_usuario = input("Digite uma frase: ").lower()
escolha_de_letra = input("Digite uma letra: ").strip().lower()
contador = 0

for letra in frase_usuario:
    if letra.lower() == escolha_de_letra:
        contador+=1

print(f"Na sua frase '{frase_usuario}' existem {contador} letras {escolha_de_letra}")
