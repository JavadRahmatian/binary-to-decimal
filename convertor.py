number = int(input("\n enter your number: "))

binary = ""
while(number > 0):
    reminder = number % 2
    binary = str(reminder) + binary
    number = number // 2
    print(binary)

# print(binary)

