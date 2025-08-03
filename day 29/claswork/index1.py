def count_words(sentence):
    words = sentence.split()
    return len(words)

# ტესტი
example = "hello my name is Luka"
print("words number", count_words(example))