game.splash("Pizza order")
let Diameter = game.askForNumber("Enter the diameter if the pizza (inch)")
let Labour_cost = 0.75
let Rent_cost = 1
let Material_cost = 0.5 * Diameter
let Subtotal = Labour_cost + (Rent_cost + Material_cost)
let Total = Subtotal * 1.13
let Subcost = Total / 100
let Final_cost = Subcost * 100
game.splash("The cost of a pizza" + Diameter + "inch is " + convertToText(Final_cost))
