def double_numbers(numbers):
    doubled_list = []
    index = 0
    
    # სანამ ინდექსი სიის სიგრძეზე ნაკლებია
    while index < len(numbers):
        doubled_list.append(numbers[index] * 2)
        index += 1 # გადავდივართ შემდეგ ინდექსზე
        
    return doubled_list

# მაგალითი:
print(double_numbers([1, 2, 3, 4]))  # გამონატანი: [2, 4, 6, 8]