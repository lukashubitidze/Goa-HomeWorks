def is_consonant(letter):
    vowels = 'aeiouAEIOUაეიოუ'
    return letter.isalpha() and letter not in vowels

while True:
    user_input = input("შეიყვანე ტექსტი: ")
    if len(user_input) == 0:
        print("ცარიელი სტრინგია, სცადე თავიდან.")
        continue

    first = user_input[0]
    last = user_input[-1]

    if is_consonant(first) and is_consonant(last):
        print("შესანიშნავია! პირველი და ბოლო ასოები თანხმოვნებია.")
        break
    else:
        print("პირველი და ბოლო ასოები არ არის თანხმოვნები, სცადე თავიდან.")
