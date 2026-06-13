vowels = ['ა', 'ე', 'ი', 'ო', 'უ']
correct_words = []

print("უნდა შეიყვანოთ 5 სიტყვა:")
for i in range(5):
    word = input(f"შეიყვანეთ მე-{i+1} სიტყვა: ")
    
    if word[0] not in vowels and word[-1] not in vowels:
        correct_words.append(word) # ინახავს მხოლოდ სწორს

print("\nშენახული სწორი სიტყვებია:", correct_words)