
document.write("<h1>Question 1</h1>")
// Addition
var num1 = 32;
var num2 = 54;
var addition = num1 + num2;
document.write("<br>" + " Addition of " + num1 + " and " + num2 + " is " + addition);

// Subtraction
var subtraction = num2 - num1;
document.write("<br>" + " Subtraction of " + num2 + " and " + num1 + " is " + subtraction)

// multiplication
var product = num2 * num1;
document.write("<br>" + " Product of " + num2 + " and " + num1 + " is " + product)

// division
var division = num2 / num1;
document.write("<br>" + " division of " + num2 + " and " + num1 + " is " + division)

// division
var modulus = num2 % num1;
document.write("<br>" + " Modulus of " + num2 + " and " + num1 + " is " + modulus)


document.write("<br> <h1>Question 2</h1> <br>")
var value1
document.write(" value after the decleration of variable is " + value1)
var value2 = 5;
document.write(" <br> Intial value is " + value2)
var value_increment = ++value2;
document.write(" <br> after increment " + value_increment)
var value3 = value_increment + 7;
document.write(" <br> value after addition of 7 is " + value3)
var value_decrement = --value3;
document.write(" <br> value after decrement " + value3)
var modulus2 = value_increment % 12;
document.write(" <br> Reminder is " + modulus2)

// movies ticket

document.write("<br> <h1> Movies Ticket </h1> <br>")
var ticket_price = 600;
var quantity = +prompt(" Quantity of Tickets ") 
var tickets_numbers = ticket_price * quantity;
document.write("<br> Price Of Ticket is " + ticket_price + "<br> Quantity of Ticket is " + quantity + " <br> Total Price of ticket is " + tickets_numbers)

// table of any number input by user
document.write('<br> <h1> Table</h1> <br>')
var table = 4;
document.write(`<br> ${table} x 1 = ${table * 1} `)
document.write(`<br> ${table} x 2 = ${table * 2} `)
document.write(`<br> ${table} x 3 = ${table * 3} `)
document.write(`<br> ${table} x 4 = ${table * 4} `)
document.write(`<br> ${table} x 5 = ${table * 5} `)
document.write(`<br> ${table} x 6 = ${table * 6} `)
document.write(`<br> ${table} x 7 = ${table * 7} `)
document.write(`<br> ${table} x 8 = ${table * 8} `)
document.write(`<br> ${table} x 9 = ${table * 9} `)
document.write(`<br> ${table} x 10 = ${table * 10}`)


// temperature conversion

// C to F
document.write("<br> <h1> Temperature Conversion </h1>")
var temp = +prompt("Enter Temperature for C to F")
var C = (temp * 9/5) + 32;
document.write(C + " F ")
// F to C
document.write("<br>")
var temp2 = +prompt("Enter Temperature for F to C")
var F = (temp2-32) * 5/9;
document.write(F + " C ")

// Shopping Cart

document.write("<h1> Shopping Cart </h1>")
document.write(" <br> <h1> First Product Details </h1> <br>")
var ship = 500;
var Item1 = +prompt("Enter Price Of Item 1");
var Quantity1 = +prompt("Enter Quantity Of Item 1");
var total1 = Item1 * Quantity1 + ship;
document.write(" <br>  Price of Item 1 is " + Item1 + " <br> Quantity Of Item 1 is " + Quantity1 + " <br> Shipment Charges are " + ship + " <br> Total Amount Is " + total1)

document.write(" <br> <h1> Second Product Details </h1> <br>")
var ship = 500;
var Item2 = +prompt("Enter Price Of Item 2");
var Quantity2 = +prompt("Enter Quantity Of Item 2");
var total2 = Item1 * Quantity2 + ship;
document.write(" <br>  Price of Item 1 is " + Item2 + " <br> Quantity Of Item 2 is " + Quantity2 + " <br> Shipment Charges are " + ship + " <br> Total Amount Is " + total2)


// Mark Sheet

document.write("<h1> Marks Sheet </h1>")
var total_marks = 800;
var obtained = +prompt("Enter Marks Obtained")
var result = obtained / total_marks * 100;
document.write("<br> Marks Otained by Student is " + obtained + "<br> Total Marks Are " + total_marks + "<br> So The Percentage Obtained is " + result)

// currency converter


document.write("<h1> Currency Converter </h1>")
document.write("<br> <h2> Dollar to Pkr </h1>")
var dollar = 280;
var quantity_dollar = +prompt("How Much Dollar You Want")
var pkr = dollar * quantity_dollar;
document.write("<br> Price Of One Dollar is " + dollar + "<br> How Much Dollar Take By Customer " + quantity_dollar + "<br> So The Total Price In Pkr Is " + pkr )

document.write("<br> <h2> Riyal to Pkr </h1>")
var riyal = 74;
var quantity_riyal = +prompt("How Much Riyal You Want")
var pkr2 = riyal * quantity_riyal;
document.write("<br> Price Of One Riyal is " + riyal + "<br> How Much Riyal Take By Customer " + quantity_riyal + "<br> So The Total Price In Pkr Is " + pkr2 )




// Question 10

document.write("<br> <h1> Question 10 </h1>")
var num= 5;
var calc = (num + 5) * 10 / 2;
document.write("<br> Calculation of " + num + " + 5 * 10 / 2 is " + calc )

// age calculator
document.write("<br> <h1> Age Calculator </h1>")
var birth_year = +prompt("Enter D.O.B")
var current_year = +prompt("Enter current year")
var age = current_year - birth_year;
document.write("<br> Birth Year is " + birth_year + "<br> Current Year is " + current_year + "<br> Age is " + age)


// circle radius

document.write("<br> <h1> circumference of circle </h1>")

var circleRadius = 20
var circumference = 2*3.142*circleRadius
var circleArea = 3.142*(circleRadius ** 2)

document.write("<br> Radius of a circle: " + circleRadius + "<br> The circumference is: " + circumference + "<br> The area is: " + circleArea + "<br>")

// life time supply calculator


document.write("<br> <h2> life time supply calculator </h2>")

var favSnack = "chocolate chip"
var currentAge = 18
var maxAge = 63
var amountPerDay = 3

document.write("<br> You will need " + amountPerDay*(maxAge-currentAge) + " " + favSnack + " to last you until the rip old age of " + maxAge + "<br>")







































































































































