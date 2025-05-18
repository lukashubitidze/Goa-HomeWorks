amount = int(input('please enter the amount of people in the building: '))
time = int(input('please input a time between 1 and 12: '))
on = bool(input('please input True or False: '))
lightsOn = amount > 2 and time >= 7 and on
print(lightsOn)