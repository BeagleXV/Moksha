# Crie um jogo onde o programa escolhe um número aleatório entre 1 e 100, e o usuário deve adivinhar qual é o número.

from random import randint

numero_sorteado = randint(1,100)

while True:
    
    escolha_jogador = int(input("Tente adinhar um número entre 1 e 100: "))
    
    if numero_sorteado == escolha_jogador:
        print(f"Parabens, vc venceu! O número sorteado foi {numero_sorteado}")
        break

    if numero_sorteado < escolha_jogador:
        print(f"O número não é {escolha_jogador}, tente um número mais baixo.")
    else:
        print(f"O número não é {escolha_jogador}, tente um número mais alto")
   
