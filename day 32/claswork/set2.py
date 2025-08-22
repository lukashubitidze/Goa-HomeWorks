fruit1 = {"apple","wattermelon","melon"}
fruit2 = {"melon", "greep", "mango"}

# გაერთიანება
print(fruit1.union(fruit2))

#თანაკვეთა
print(fruit1 & fruit2)

#გამოკლება
print(fruit1.difference(fruit2))
print(fruit1-fruit2)

#სიმეტრიული გამოკლება
print(fruit1.symmetric_difference(fruit2))

#მთლიანად ამოშლაa.clear()
fruit1.clear()
print(fruit1)

#დამატება
fruit2.add("dragon fruit")
print(fruit2)

#ამოშლა
fruit2.remove("greep")
print(fruit2)