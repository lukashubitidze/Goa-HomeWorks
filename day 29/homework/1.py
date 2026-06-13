def process_sentence(sentence):
    # თითოეულ სიტყვას ინახავს სიაში
    words_list = sentence.split()
    
    # სიას აერთიანებს ახალ წინადადებად, სადაც სიტყვებს შორის არის ", "
    new_sentence = ", ".join(words_list)
    return new_sentence

# მაგალითი:
text = "პითონი არის ძალიან პოპულარული ენა"
print(process_sentence(text))  
# გამონატანი: პითონი, არის, ძალიან, პოპულარული, ენა