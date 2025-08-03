def find_max(numbers):
    if not numbers:
        return None  # თუ სია ცარიელია
    max_number = numbers[0]
    for num in numbers:
        if num > max_number:
            max_number = num
    return max_number

# ტესტი
num_list = [3, 7, 2, 10, 5]
print("უმაღლესი რიცხვი არის:", find_max(num_list))