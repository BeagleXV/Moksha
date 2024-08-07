from random import choice
from utilsforca import *


def main():
    letra_jogador = []
    chances = 6
    ganhou = False
    palavra = forca()
    while True:
        for letra in palavra:
            if letra.lower() in letra_jogador:
                print(letra, end=" ")
            else:
                print("_",end=" ")
        
        print(f"Vc tem {chances} chances")
        tentativa = input("Escolha uma letra: ").strip()
        letra_jogador.append(tentativa.lower())
        
        if tentativa.lower() not in palavra.lower():
            chances -= 1

        ganhou = True
        for letra in palavra:
            if letra.lower() not in letra_jogador:
                ganhou = False

        if chances == 0 or ganhou:
                break
    

    if ganhou:
        print(f"\nMeus parabéns, vc venceu! A palavra era {palavra}")
    else:
        print(f"\nVc perdeu! A palavra era {palavra}")



if __name__ == "__main__":
    main()
