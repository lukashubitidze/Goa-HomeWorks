# 2)შექმენით ფუნქცია რომელიც არგუმენტად იღებს სიტყვას/წინადადებას და ასოს,
#  ის აბრუნებს პირველი სად შეხვდა ასო ამ სიტყვაში

def func(word, letter):
    return word.find(letter)

print(func("programireba", "p"))
print(func("goa", "g"))

def func(word,letter) :
    return word.lower().find(letter.lower())