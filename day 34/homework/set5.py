
words = ("apple", "მსხალი", "banana", "apple", "kivi", "banana", "apple")
word_count = {}

for word in words:
    if word in word_count:
        word_count[word] += 1
    else:
        word_count[word] = 1

for word, count in word_count.items():
    print(f"სიტყვა '{word}' მეორდება {count} ჯერ")
