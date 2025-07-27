# 3) შექმენით ერთი ვოიდ ფუნქცია და ერთი ფუნქცია რომელიც აბრუნებს სტრინგს.

def furnace_check(name):
    import random
    status = random.choice(["წარმატებული", "წარუმატებელი"])
    print(f"{name} ფურნტიკა: {status}")
    return status == "წარმატებული"

furnace1_success = furnace_check("პირველი")
furnace2_success = furnace_check("მეორე")

if furnace1_success or furnace2_success:
    print("ერთ-ერთი ფურნტიკა წარმატებით დასრულდა")
else:
    print("ორივე ფურნტიკა წარუმატებელი იყო")