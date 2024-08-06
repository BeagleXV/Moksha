def bissexto():    
    ano = int(input("Digite um ano: "))
    if ano % 4 == 0:
        if ano % 100 == 0:
            if ano % 400 == 0:
                print(f"O ano de {ano} é bissexto.")
            else:
                print(f"O ano de {ano} não é bissexto.")
        else:
            print(f"O ano de {ano} é bissexto.")
    else:
        print(f"O ano de {ano} não é bissexto.")

bissexto()
bissexto()
bissexto()
bissexto()
