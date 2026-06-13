products = {
    "apple": 3,
    "banana": 2,
    "milk": 5
}

# 1. ყველა პროდუქტის დაბეჭდვა for loop-ით
print("ხელმისაწვდომი პროდუქტებია:")
for product in products:
    print(f"- {product}")

# 2. მომხმარებლისგან პროდუქტის შეყვანა და შემოწმება
user_choice = input("\nშეიყვანეთ პროდუქტის სახელი ფასის გასაგებად: ").lower()

if user_choice in products:
    print(f"{user_choice}-ის ფასია: {products[user_choice]} ლარი")
else:
    print("სამწუხაროდ, ასეთი პროდუქტი არ გვაქვს.")

# 3. ახალი პროდუქტის დამატება update()-ით
products.update({"orange": 4, "bread": 1.5})
print("\nპროდუქტების დამატების შემდეგ:", products)

# 4. ჩასაშენებლად clear()-ის გამოყენება და ცარიელი dictionary-ს დაბეჭდვა
products.clear()
print("დასუფთავების (clear) შემდეგ:", products) # გამონატანი: {}