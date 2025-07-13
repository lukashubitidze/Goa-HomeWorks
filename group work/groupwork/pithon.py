print("უპასუხე კითხვებს ქულების დაგროვებისათვის, ყოველი სწორი პასუხი +1 ქულას უდრის. არასწორი პასუხის არჩევის შემთხვევაში, მომხმარებელს ქულა არ მოემატება")
print("არის 15 კითხვა და გაქვს 5 სიცოცხლე")
redo = True
while redo:
    points = 0
    lives = 5

    #1
    q1 = input("N1. რას გამოიტანს ეს კოდი 3**3?: ")
    if q1 == "27":
        points+=1
        print("სწორი პასუხია")
        print(f" დარჩენილი სიცოცხლე: { lives}")
    else:
        print("არასწორია") 
        lives -= 1
        print(f" დარჩენილი სიცოცხლე: { lives}")

    
    print(" ")
    #2   
    q2 = input("N2. რა ინდექსი აქვს ლისტის პირველ ელემენტს?: ")
    if q2 == "0":
        points+=1
        print("სწორი პასუხია")
        print(f" დარჩენილი სიცოცხლე: { lives}")
    else:
        print("არასწორია") 
        lives -= 1
        print(f" დარჩენილი სიცოცხლე: { lives}")

     
    
    print(" ")
    #3  
    q3 = input("N3. როგორ იწერება კომენტარი პითონში?: ")
    if q3 == "#":
        points+=1
        print("სწორი პასუხია")
        print(f" დარჩენილი სიცოცხლე: { lives}")
    else:
        print("არასწორია") 
        lives -= 1
        print(f" დარჩენილი სიცოცხლე: { lives}")

    if lives >= 4 and q3 =="#":
        print(" ")
        print("კარგად ართმევ თავს!")
    elif q3 != "#" and lives >= 4:
        print("არაუშავს, კიდე შანსი გაქვს!")
    elif lives < 4:
        print(" ")
        print("ფრთხილად იყავი, ცოტა სიცოცხლე დაგრჩა!")

    print(" ")
    #4
    print("1. <-- -->")
    print("2. <!-- -->")
    print("3. <-- /-->")
    q4 = input("N4. როგორ იწერება კომენტარი html-ში?(აირჩიეთ 1/2/3): ")
    if q4 == "2":
        points+=1
        print("სწორი პასუხია")
        print(f" დარჩენილი სიცოცხლე: { lives}")
    else:
        print("არასწორია") 
        lives -= 1
        print(f" დარჩენილი სიცოცხლე: { lives}")

     

    print(" ")
    #5
    q5 = input("N5. რა არის საფრანგეთის დედაქალაქი?: ")
    if q5 ==  "პარიზი" :
        points+=1
        print("სწორი პასუხია")
        print(f" დარჩენილი სიცოცხლე: { lives}")
    else:
        print("არასწორია") 
        lives -= 1
        print(f" დარჩენილი სიცოცხლე: { lives}")

    if lives == 0:
        print("ამოგეწურა სიცოცხლეები, ცადე თავიდან.")
        break

    print(" ")
    #6  
    q6 = input("N6. რამდენი კონტინენტია დედამიწაზე?: ")
    if q6 == "7":
        points+=1
        print("სწორი პასუხია")
        print(f" დარჩენილი სიცოცხლე: { lives}")
    else:
        print("არასწორია") 
        lives -= 1
        print(f" დარჩენილი სიცოცხლე: { lives}")

    if lives == 0:
        print("ამოგეწურა სიცოცხლეები, ცადე თავიდან.")
        break

    if lives >= 4 and q6 == "7":
        print(" ")
        print("ასე გააგრძელე!")
    elif q6 != "7" and lives >= 4:
        print("არაუშავს, კიდე შანსი გაქვს!")
    elif lives < 4:
        print(" ")
        print("ფრთხილად იყავი, ცოტა სიცოცხლე დაგრჩა!")


    print(" ")
    #7  
    q7 = input("N7. რამდენია 144-ის ფესვი?: ")
    if q7 == "12":
        points+=1
        print("სწორი პასუხია")
        print(f" დარჩენილი სიცოცხლე: { lives}")
    else:
        print("არასწორია") 
        lives -= 1
        print(f" დარჩენილი სიცოცხლე: { lives}")

    if lives == 0:
        print("ამოგეწურა სიცოცხლეები, ცადე თავიდან.")
        break

    print(" ")
    #8  
    q8 = input("N8. რომელ გრადუსზე იყინება წყალი?(ცელსიუსი)?: ")
    if q8 == "0":
        points+=1
        print("სწორი პასუხია")
        print(f" დარჩენილი სიცოცხლე: { lives}")
    else:
        print("არასწორია") 
        lives -= 1
        print(f" დარჩენილი სიცოცხლე: { lives}")

    if lives == 0:
        print("ამოგეწურა სიცოცხლეები, ცადე თავიდან.")
        break

    print(" ")
    #9 
    q9 = input("N9. რომელ წელს დასრულდა მეორე მსოფლიო ომი?: ")
    if q9 == "1945":
        points+=1
        print("სწორი პასუხია")
        print(f" დარჩენილი სიცოცხლე: { lives}")
    else:
        print("არასწორია") 
        lives -= 1
        print(f" დარჩენილი სიცოცხლე: { lives}")

    if lives == 0:
        print("ამოგეწურა სიცოცხლეები, ცადე თავიდან.")
        break

    if lives >= 4 and q9 == "1945":
        print(" ")
        print("ბრავო!")
    elif q9 != "1945" and lives >= 4:
        print("არაუშავს, კიდე შანსი გაქვს!")
    elif lives < 4:
        print(" ")
        print("ფრთხილად იყავი, ცოტა სიცოცხლე დაგრჩა!")


    print(" ")
    #10  
    q10 = input("N10. რას გამოიტანს print(len('hello'))?: ")
    if q10 == "5":
        points+=1
        print("სწორი პასუხია")
        print(f" დარჩენილი სიცოცხლე: { lives}")
    else:
        print("არასწორია") 
        lives -= 1
        print(f" დარჩენილი სიცოცხლე: { lives}")

        
    if lives == 0:
        print("ამოგეწურა სიცოცხლეები, ცადე თავიდან.")
        break


    print(" ")
    #11
    print("1. მერკური")
    print("2. ნეპტუნი")
    print("3. იუპიტერი")
    q11 = input("N11. რომელი პლანეტა არის ყველაზე დიდი ჩვენს სისტემაში?(აირჩიეთ 1/2/3): ")
    if q11 == "3":
        points+=1
        print("სწორი პასუხია")
        print(f" დარჩენილი სიცოცხლე: { lives}")
    else:
        print("არასწორია") 
        lives -= 1
        print(f" დარჩენილი სიცოცხლე: { lives}")

    if lives == 0:
        print("ამოგეწურა სიცოცხლეები, ცადე თავიდან.")
        break

    print(" ")
    #12
    print("1. არაბთა გაერთიანებული საამიროები")
    print("2. ინდოეთი")
    print("3. ამერიკის შეერთებული შტატები")
    q12 = input("N12. რომელ ქვეყანაშია უმაღლესი შენობა?(აირჩიეთ 1/2/3): ")
    if q12 == "1":
        points+=1
        print("სწორი პასუხია")
        print(f" დარჩენილი სიცოცხლე: { lives}")
    else:
        print("არასწორია") 
        lives -= 1
        print(f" დარჩენილი სიცოცხლე: { lives}")

    if lives == 0:
        print("ამოგეწურა სიცოცხლეები, ცადე თავიდან.")
        break

    if lives >= 4 and q12 == "1":
        print(" ")
        print("შესანიშნავია!")
    elif q12 != "1" and lives >= 4:
        print("არაუშავს, კიდე შანსი გაქვს!")
    elif lives < 4:
        print(" ")
        print("ფრთხილად იყავი, ცოტა სიცოცხლე დაგრჩა!")


    print(" ") 
    #13 
    q13 = input("N13. რამდენია 3 + 4 * 3?: ")
    if q13 == "15":
        points+=1
        print("სწორი პასუხია")
        print(f" დარჩენილი სიცოცხლე: { lives}")
    else:
        print("არასწორია") 
        lives -= 1
        print(f" დარჩენილი სიცოცხლე: { lives}")
    
    if lives == 0:
        print("ამოგეწურა სიცოცხლეები, ცადე თავიდან.")
        break

    print(" ")
    #14  
    q14 = input("N14. როგორ დავწეროთ 'არ უდრის' პითონში?: ")
    if q14 == "!=":
        points+=1
        print("სწორი პასუხია")
        print(f" დარჩენილი სიცოცხლე: { lives}")
    else:
        print("არასწორია") 
        lives -= 1
        print(f" დარჩენილი სიცოცხლე: { lives}")
    
    if lives == 0:
        print("ამოგეწურა სიცოცხლეები, ცადე თავიდან.")
        break

    print(" ")
    #15
    print("1. 2006")
    print("2. 2007")
    print("3. 2008")
    print("4. 2009")
    q15 = input("N15. რომელ წელს გამოვიდა პირველი აიფონი?(აირჩიე 1/2/3/4)")
    if q15 == "2":
        points+=1
        print("სწორი პასუხია")
        print(f" დარჩენილი სიცოცხლე: { lives}")
    else:
        print("არასწორია") 
        lives -= 1
        print(f" დარჩენილი სიცოცხლე: { lives}")

    if lives == 0:
        print("ამოგეწურა სიცოცხლეები, ცადე თავიდან.")
        break

    if lives >= 4 and q15 == "2":
        print(" ")
        print("ყოჩაღ!")
    elif q15 != "2" and lives >= 4:
        print("არაუშავს, კიდე შანსი გაქვს!")
    elif lives < 4:
        print(" ")
        print("ფრთხილად იყავი, ცოტა სიცოცხლე დაგრჩა!")

    print(" ")
    #16
    q16 = input("N16. რა არის ეგვიპტის დედაქალაქი?: ") 
    if q16 == "კაირო":
        points+=1
        print("სწორი პასუხია")
        print(f" დარჩენილი სიცოცხლე: { lives}")
    else:
        print("არასწორია") 
        lives -= 1
        print(f" დარჩენილი სიცოცხლე: { lives}")
    
    if lives == 0:
        print("ამოგეწურა სიცოცხლეები, ცადე თავიდან.")
        break

    print(" ")
    #17
    print("1. 82")
    print("2. 87")
    print("3. 94")
    print("4. 97")
    q17 = input("N17. რამდენი მთვარე აქვს იუპიტერს?(1/2/3/4): ")
    if q17 == "4":
        points+=1
        print("სწორი პასუხია")
        print(f" დარჩენილი სიცოცხლე: { lives}")
    else:
        print("არასწორია") 
        lives -= 1
        print(f" დარჩენილი სიცოცხლე: { lives}")

    if lives == 0:
        print("ამოგეწურა სიცოცხლეები, ცადე თავიდან.")
        break
    
    if lives >= 4 and q17 == "4":
        print(" ")
        print("დაუჯერებელია!")
    elif q17 != "4" and lives >= 4:
        print("არაუშავს, კიდე შანსი გაქვს!")
    elif lives < 4:
        print(" ")
        print("ფრთხილად იყავი, ცოტა სიცოცხლე დაგრჩა!")


    print(" ")
    #18
    print("1. იენი(Yen)")
    print("2. იუანი(Yuan)")
    print("3. ვონი(Won)")
    print("4. თენგე(Tenge)")
    q18 = input("N18. რომელია ჩინეთის ვალუტა?(1/2/3/4): ")
    if q18 == "2":
        points+=1
        print("სწორი პასუხია")
        print(f" დარჩენილი სიცოცხლე: { lives}")
    else:
        print("არასწორია") 
        lives -= 1
        print(f" დარჩენილი სიცოცხლე: { lives}")

    if lives == 0:
        print("ამოგეწურა სიცოცხლეები, ცადე თავიდან.")
        break

    print(" ")
    #19
    q19 = input("N19. რა ფორმულა აქვს წყალს?: ")
    if q19 == "H2O":
        points+=1
        print("სწორი პასუხია")
        print(f" დარჩენილი სიცოცხლე: { lives}")
    else:
        print("არასწორია") 
        lives -= 1
        print(f" დარჩენილი სიცოცხლე: { lives}")

    if lives == 0:
        print("ამოგეწურა სიცოცხლეები, ცადე თავიდან.")
        break

    print(" ")
    #20
    print("1. მიხეილ სააკაშვილი")
    print("2. ედუარდ შევარდნაძე")
    print("3. ზვიად გამსახურდია")
    print("4. სალომე ზურაბიშვილი")
    q20 = input("N20. ვინ იყო საქართველოს პირველი პრეზიდენტი?(1/2/3/4): ")
    if q20 == "3":
        points+=1
        print("სწორი პასუხია")
        print(f" დარჩენილი სიცოცხლე: { lives}")
    else:
        print("არასწორია") 
        lives -= 1
        print(f" დარჩენილი სიცოცხლე: { lives}")

    if lives == 0:
        print("ამოგეწურა სიცოცხლეები, ცადე თავიდან.")
        break
    else:
        print(f"თქვენ წარმაატებულად დაასრულეთ ქვიზი და მხოლოდ {5-lives} შეცდომა გქონდათ. თქვენი საბოლოო ქულაა {points}. ყოჩაღ!")