vowels = ['ა', 'ე', 'ი', 'ო', 'უ']

while True:
    word = input("\nშეიყვანეთ სიტყვა: ")
    
    v_count = 0 # ხმოვნების მთვლელი
    c_count = 0 # თანხმოვნების მთვლელი
    
    # სათითაოდ ვამოწმებთ სიტყვის თითოეულ ასოს
    for letter in word:
        if letter in vowels:
            v_count += 1
        else:
            c_count += 1
            
    print(f"ამ სიტყვაში არის {v_count} ხმოვანი და {c_count} თანხმოვანი.")
    
    # მთავარი პირობა ციკლიდან გამოსასვლელად
    if word[0] not in vowels and word[-1] not in vowels:
        print("გილოცავთ, ეს სწორი სიტყვაა და თამაში დასრულდა!")
        break