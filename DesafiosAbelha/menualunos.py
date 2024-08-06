def menu():
    print("1. Listar alunos\n2. Adicionar alunos\n3. Remover aluno\n4. Atualizar idade do aluno\n5. Sair")

def listar():
    for n in alunos:
        print(n, alunos[n])

def add():
    nome = input("Nome do aluno: ")
    idade = int(input("Idade do aluno: "))
    alunos[nome] = idade

def remover():
    nomerm = input("Digite o nome para remover: ")
    del alunos[nomerm]

def idade():
    alunoidade = input("Qual aluno vc deseja alterar a idade? ")
    idadealuno = int(input("Qual é a nova idade? "))
    alunos[alunoidade] = idadealuno

def default():
    print("Finalizando...")

opcao = 1
alunos = {"Carla":15,"Felipe":14,"Julia":14}
funcs = {1:listar, 2:add,3:remover, 4:idade}
while opcao != 5:
    menu()
    opcao = int(input("Escolha uma opção: "))
    x = funcs.get(opcao, default)
    x()
