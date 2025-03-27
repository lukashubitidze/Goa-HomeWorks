from turtle import *

#we want to paint a house

#step 1:   draw a squere
speed(30)
width(7)
color("purple")
forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)
#end of squere

#drawing a dor

forward(70)

color("yellow")
begin_fill()
left(90)
forward(120)      #height of the door
right(90)
forward(60)
right(90)
forward(120)
end_fill()

penup()
goto(200, 200)
pendown()

color("red")
begin_fill()
right(150)
forward(200)
left(120)
forward(200)
end_fill()

#drawing a windous

color("brown")
begin_fill()
left(30)
penup()
goto(30, 180)
pendown()
forward(35)
left(90)
forward(35)
left(90)
forward(35)
left(90)
forward(35)
end_fill()

begin_fill()
penup()
goto(180, 180)
pendown()
forward(35)
left(90)
forward(35)
left(90)
forward(35)
left(90)
forward(35)
end_fill()

exitonclick()