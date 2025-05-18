
age = int(input('please input ur age: '))
experience = int(input('please input ur experience: '))
height = int(input('please input ur height: '))
isHired = age >= 18 and experience >= 2 and height >= 175
print(f'You are hried: {isHired}')

