import random

x = random.randint(1, 100)

y = int(input("Enter your Guess the number b/w 1-100: "))

if y >= 101:
    print("The guess number must be less than 101.")
elif x == y:
    print("You are Genius, Fabulous Guess!!!")
elif x > y:
    print("Your guess is low, Try again?")
else:
    print("Your guess is high, Try again?")

print("System Random Number:", x)
