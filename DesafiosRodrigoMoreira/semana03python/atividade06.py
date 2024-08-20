#Crie um programa que peça uma frase ao usuário e conte quantas vogais (a, e, i, o, u) ela contém.

print("Digite um frase para saber quantas vogais existem nela. Digite 'sair' para sair do programa.")
def conta_vogais():
    while True:
        frase = input("Digite uma frase: ").lower()
        contador = 0
        if frase == "sair":
            break

        for letra in frase:
            if letra.lower() in "áàâãaeéêiíoõóôuú":
                contador += 1
        print(f"Na frase '{frase}' existem {contador} vogais.")
conta_vogais()
