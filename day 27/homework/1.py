def remove_edges(elements_list):
    # slicing-ის [1:-1] ნიშნავს: დაიწყე მე-2 ელემენტიდან (ინდექსი 1) და გაჩერდი ბოლო ელემენტამდე
    return elements_list[1:-1]

# მაგალითი:
print(remove_edges([10, 20, 30, 40, 50]))  # გამონატანი: [20, 30, 40]