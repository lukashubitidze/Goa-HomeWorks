countries = {
    "kay": "Georgia",
    "fr": "France",
    "it": "Italy"
}

# pop() შლის 'kay'-ს და აბრუნებს მის მნიშვნელობას ("Georgia"), რომელსაც ვსვამთ ახალ 'ge' key-ში
countries["ge"] = countries.pop("kay")

print(countries)
# გამონატანი: {'fr': 'France', 'it': 'Italy', 'ge': 'Georgia'}