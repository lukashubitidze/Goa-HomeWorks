def multiply_list_sums(list1, list2):
    sum1 = 0
    sum2 = 0
    
    # პირველი სიის ჯამი
    for num in list1:
        sum1 += num
        
    # მეორე სიის ჯამი
    for num in list2:
        sum2 += num
        
    # ჯამების ერთმანეთზე გამრავლება და დაბრუნება
    return sum1 * sum2

# მაგალითი:
print(multiply_list_sums([1, 2, 3], [4, 5]))  # (1+2+3) * (4+5) = 6 * 9 = 54