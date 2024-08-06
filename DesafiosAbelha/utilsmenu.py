def menu():
    print("1. Listar\n2. Adicionar alunos\n3. Remover aluno\n4. Atualizar idade do aluno\n5. Sair")

def listar():
    for n in alunos:
        print(n, alunos[n])

def add():
    nvaluno = input("Nome do aluno: ")
    nvidade = int(input(f"Idade do {nvaluno}: "))
    alunos[nvaluno] = nvidade

def remover():
    rmaluno = input("Qual aluno vc deseja remover: ")
    del alunos[rmaluno]

def idade():
    aluno = input("Qual aluno vc deseja mudar a idade? ")
    nidade = int(input(f"Qual a nova idade do {aluno}: "))
    alunos[aluno] = nidade
        

def default():
    print("Finalizando")

alunos = {"Fernando":36,"Ricardo":32,"Paula":23}
