#Crie um programa que funcione como uma calculadora simples, pedindo ao usuário dois números e a operação que deseja realizar.

numero1 = int(input("Digite o primeiro valor: "))
numero2 = int(input("Digite o segundo valor: "))
print("Digite '+' para somar os valores\nDigite '-' para subtrair os valores\nDigite '*' para multiplicar os valores\nDigite '/' para dividir os valores")
operador = input("Escolha um dos operadores para obter o resultado: ")

if operador == "+":
    print(f"{numero1} + {numero2} = {numero1 + numero2}")
if operador == "-":
    print(f"{numero1} - {numero2} = {numero1 - numero2}")
if operador == "*":
    print(f"{numero1} x {numero2} = {numero1 * numero2}")
if operador == "/":
    print(f"{numero1} % {numero2} = {numero1 / numero2:.1f}")

