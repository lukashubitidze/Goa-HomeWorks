def sum_even_numbers(numbers):
    even_sum = 0
    for num in numbers:
        if num % 2 == 0:
            even_sum += num
    return even_sum

# ტესტი
example_list = [1, 2, 3, 4, 5, 6, 8, 9, 100, 115]
print("ლუწი რიცხვების ჯამი:", sum_even_numbers(example_list))