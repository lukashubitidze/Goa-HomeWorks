about_me = {
    "სახელი": "ლუკა",
    "გვარი": "შუბითიძე",
    "ასაკი": 13
}

value = about_me.pop("სახელი")

about_me["Name"] = value

print("შეცვლიი ლექსიკონი:")
print(about_me)
