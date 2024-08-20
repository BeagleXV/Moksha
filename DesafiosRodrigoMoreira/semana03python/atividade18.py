# Desenvolva um programa que conte quantas palavras há em uma frase fornecida pelo usuário.

frase = input("Digite uma frase: ").split()
quantas_palavras = len(frase)
frase_formatada = " ".join(frase)
print(f"Existem {quantas_palavras} palavras na frase '{frase_formatada}'")
