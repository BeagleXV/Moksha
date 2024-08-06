from utilsmenu import *


funcs = {1:listar,2:add,3:remover,4:idade}

def main():
    opcao = 1
    while opcao != 5:
        menu()
        opcao = int(input("Escolha uma opcao: "))
        x = funcs.get(opcao,default)
        x()

if __name__ == "__main__":
    main()
