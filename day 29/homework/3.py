def remove_extra_spaces(sentence):
    # .split() ავტომატურად შლის ყველა ზედმეტ გამოტოვებას სიტყვებს შორის
    clean_words = sentence.split()
    
    # ვაერთიანებთ სიტყვებს თითო სფეისით
    return " ".join(clean_words)

# მაგალითი:
ugly_text = "გამარჯობა      როგორ   ხარ     მეგობარო"
print(remove_extra_spaces(ugly_text))  
# გამონატანი: "გამარჯობა როგორ ხარ მეგობარო"