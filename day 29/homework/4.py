def replace_spaces_with_dash(sentence):
    words = sentence.split()
    # სიტყვებს შორის სფეისის ნაცვლად სვამს ტირეს
    return "-".join(words)

# მაგალითი:
text = "HTML CSS და Python"
print(replace_spaces_with_dash(text))  
# გამონატანი: HTML-CSS-და-Python