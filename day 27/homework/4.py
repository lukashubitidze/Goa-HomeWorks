def filter_evens(numbers):
    even_list = []
    
    for num in numbers:
        if num % 2 == 0: # ვამოწმებთ, არის თუ არა ნაშთი 2-ზე გაყოფისას 0
            even_list.append(num)
            
    return even_list

# მაგალითი:
print(filter_evens([1, 2, 3, 4, 5, 6]))  # გამონატანი: [2, 4, 6]