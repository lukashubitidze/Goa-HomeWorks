a = {1,2,3}
b = {3,4,5}
c = {5,6,7}

# გაერთიანება
print(a.union(b,c))
print(a | b | c)

#თანაკვეთა
print(a.intersection(b))
print(a & b)

#გამოკლება
print(a.difference(b))
print(a-b)

#სიმეტრიული გამოკლება
print(a.symmetric_difference(c))
print(a^c)

#მთლიანად ამოშლა
a.clear()
print(a)

#დამატება
a.add(1)
print(a)

#ამოშლა
b.remove(5)
print(b)