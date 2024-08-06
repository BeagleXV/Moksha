n = int(input("Digite um número: "))
fat = 1
for i in range(n,0,-1):
    fat*=i
print(f"O fatorial de {n} é: {fat}")
