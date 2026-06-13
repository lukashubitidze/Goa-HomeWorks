A = {1, 2, 3}
B = {3, 4, 5}

# გაერთიანება (Union) - ყველა ელემენტი ორივე სეტიდან (დუბლიკატების გარეშე)
union_set = A | B  # ან A.union(B)
print("გაერთიანება:", union_set)  # გამონატანი: {1, 2, 3, 4, 5}

# გადაკვეთა (Intersection) - მხოლოდ საერთო ელემენტები
intersection_set = A & B  # ან A.intersection(B)
print("გადაკვეთა:", intersection_set)  # გამონატანი: {3}

# სხვაობა (Difference) - ელემენტები A-დან, რომლებიც არ არის B-ში
difference_set = A - B  # ან A.difference(B)
print("სხვაობა (A - B):", difference_set)  # გამონატანი: {1, 2}