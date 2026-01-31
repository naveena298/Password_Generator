import random

letters = list("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ")
numbers = list("0123456789")
symbols = list("!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~")

def generate_password(nl, nd, ns):
    password = ""

    for _ in range(nl):
        password += random.choice(letters)

    for _ in range(nd):
        password += random.choice(numbers)

    for _ in range(ns):
        password += random.choice(symbols)

    password_list = list(password)
    random.shuffle(password_list)

    return "".join(password_list)



if __name__ == "__main__":
    nl = int(input("Enter number of letters: "))
    nd = int(input("Enter number of numbers: "))
    ns = int(input("Enter number of symbols: "))

    print("Generated Password:", generate_password(nl, nd, ns))
