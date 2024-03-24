//Question 1

document.write("<h1> Question 1 </h1>");
let city = prompt("Enter Your City Name : ");
if (city === "karachi"){
    alert("Welcome! \n TO THE CITY OF LIGHTS");
    document.write("<br> Welcome To The City Of Lights ")
}
else if (city === "islamabad"){
    alert("Welcome! \n TO THE CITY OF CAPITAL");
    document.write("<br> Welcome To The City Of Capital ")

}
else if (city === "peshawar"){
    alert("Welcome! \n TO THE CITY OF PAKHTOONS");
    document.write("<br> Welcome To The City Of Pakhtoons ")

}
else if (city === "lahore"){
    alert("Welcome! \n TO THE CITY OF GARDENS");
    document.write("<br> Welcome To The City Of Gardens ")

}
else if (city === "multan"){
    alert("Welcome! \n TO THE CITY OF SAINTS");
    document.write("<br> Welcome To The City Of Saints ")

}
else {
   alert("Welcome To Pakistan");
   document.write("<br> Welcome To  Pakistan ")

}

//question 2 

document.write("<br> <h1> Question 2 </h1>");
let gender = prompt("Enter Your Gender : ");
if(gender === "male"){
    alert("Welcome Sir! \n We Are Learning JS");
    document.write("<br> Welcome Sir! " + "<br> We  are learning JS");
}
else{
    alert("Welcome Ma'am! \n We Are Learning JS");
    document.write("<br> Welcome Ma'am! " + "<br> We  are learning JS");
}


// question 3


let color = prompt("Enter Traffic Light Color : ");
if (color === "red") {
    alert("RED LIGHT \n MUST STOP! \n Thanks for Patientence");
}
else if ( color === "yellow"){
    alert("YELLOW LIGHT \n READY TO MOVE! \n Thanks for Patientence");


}
else if ( color === "green"){
    alert("GREEN LIGHT \n MOVE NOW! \n Thanks for Patientence");

}
else{
    alert("NOT A VALID \n Please Enter a Valid COlor!");
      
}

// Question 4

let fuel = prompt("Enter Your Ramining Fuel : ");
if (fuel<'0.25') {
    alert("PLEASE REFUEL YOUR VEHICLE!")
}
else{
    alert("NO NEED TO REFUEL! \n GO ON!")
}


//Question 5

var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
if (true){
    alert("True");
    }
    if (false){
    alert("False")
    }

    if("car" < "cat"){
        alert("car is smaller than cat");
    }

// Quuestion 6
document.write("<br> <h1> MARKSHEET </h1> <br>")
let marks_obtaied = +prompt("Enter Marks Obtaiend : ");
let total_marks = 300;
let percentage = (marks_obtaied/total_marks)*100;
document.write("<br>" + "Marks Obtained : " + marks_obtaied + "<br>" + "Total Marks : " + total_marks)
if(percentage >= 80){
    document.write("<br>" + "Percentage is : " + percentage + "<br>" + "Grade : B" + "<br>" + "Remarks : Excellent")

}
else if (percentage >= 70){
document.write("<br>" + "Percentage is : " + percentage + "<br>" + "Grade : B" + "<br>" + "Remarks : Good")

}
else if (percentage >= 60){
    document.write("<br>" + "Percentage is : " + percentage + "<br>" + "Grade : C" + "<br>" + "Remarks : Need To Improve")
    
    }
else{
        document.write("<br>" + "Percentage is : " + percentage + "<br>" + "Grade : D" + "<br>" + "Remarks : Fail")
        
}

// Question 7

document.write("<br> <h1> Number Guessing </h1>")
let number = +prompt("Guess A Number : ");
if(number >= 1 && number <= 10){

    document.write("<br>" + "Number is : " + number + "<br> BNGO! Correct Answer")
}
else{
      document.write("<br>" + "Number is : " + number + "<br> CLOSER to The Correct One!")

}


// Question 8
document.write("<br> <h1> Number To Check Divisible by 3 or not </h1>")
let divide = +prompt("Enter A Number To Check Divisible by 3 or not : ");
let answer = divide % 3;
if(answer === 0){
document.write("<br> Divisible by 3")
}
else{
document.write("<br> Not Divisible")
}

// Question 9

document.write("<br> <h1> Even Or Odd Number Checking </h1>")

let num = +prompt("Enter A Number To Check Ever Or Odd : ");
let num_result = num % 2;
if (num_result === 0) {
document.write("<br> EVEN NUMBER : " + num_result) 
} else {
document.write("<br> ODD NUMBER : " + num_result) 
}




// Question 10

document.write("<br> <h1> Checking Temperature </h1>")
let temp = +prompt("Enter Temperature : ");
if(temp > 40)
{
    document.write("<br> Today Is Too Much Hot Outside!");
}
else if(temp > 30)
{
    document.write("<br> The Weather Today Is Normal!");
}
else if (temp > 20){
    document.write("<br> Today Weather Is Cool!");
}
 else {
 document.write("OMG! Today Wheather Is Too Much cool");   
}

// Question 11

document.write("<br> <h1> Calculator </h1>")
let firstNumber = +prompt("Enter the first number:");
let secondNumber = +prompt("Enter the second number:");
let operation = prompt("Enter the operation (+, -, *, /, %):");

let result;

if (operation === '+') {
    result = firstNumber + secondNumber;
} else if (operation === '-') {
    result = firstNumber - secondNumber;
} else if (operation === '*') {
    result = firstNumber * secondNumber;
} else if (operation === '/') {
    if (secondNumber === 0) {
        result = 'Error: Cannot divide by zero';
    } else {
        result = firstNumber / secondNumber;
    }
} else if (operation === '%') {
    result = firstNumber % secondNumber;
} else {
    result = 'Error: Invalid operation';
}
document.write("<br> First Number is : " + firstNumber + "<br> Second Number is : " + secondNumber + "<br> Result : " + result);








































