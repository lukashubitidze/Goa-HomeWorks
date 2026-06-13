def reverse_word_order(sentence):
    words = sentence.split()
    
    # სიტყვების სიას ვაბრუნებთ უკუღმა
    reversed_words = words[::-1]
    
    # ვაერთიანებთ ისევ წინადადებად
    return " ".join(reversed_words)

# მაგალითი:
text = "დღეს არის კარგი ამინდი"
print(reverse_word_order(text))  
# გამონატანი: "ამინდი კარგი არის დღეს"