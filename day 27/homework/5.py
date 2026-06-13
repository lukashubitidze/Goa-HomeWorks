def filter_n_names(names):
    n_names_list = []
    
    for name in names:
        # startswith() ამოწმებს იწყება თუ არა ტექსტი კონკრეტული სიმბოლოთი
        if name.startswith("N"): 
            n_names_list.append(name)
            
    return n_names_list

# მაგალითი:
names_list = ["Nika", "Anna", "Nino", "Giorgi", "Natalia"]
print(filter_n_names(names_list))  # გამონატანი: ['Nika', 'Nino', 'Natalia']