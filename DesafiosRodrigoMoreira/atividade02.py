"""Crie um programa que pergunte ao usuário seu filme favorito e o ano em que foi
lançado, e depois imprima uma mensagem usando essas informações."""

filme = input("Qual nome do seu filme favorito? ")
ano_atual = int(input(f"Em qual ano {filme} foi lançado? "))
print(f"O seu filme favorito é {filme} e ele foi lançado no ano de {ano_atual}.")
