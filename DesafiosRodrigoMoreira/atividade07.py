"""Crie uma lista de compras que permita ao usuário adicionar itens e,
em seguida, imprimir a lista completa."""

lista = []
print("""Lista de compras:\nDigite os itens da sua lista de compras, escreva 'sair', e eles serão inseridos no programa.""")
while True:
    compra = input("Digite o nome do item: ").lower()
    if compra == "sair":
            break
    lista.append(compra)
for i in lista:
    print("-",i)



