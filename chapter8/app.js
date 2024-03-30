//Question 1

document.write("<br> <h1> Question 1 </h1> ")
let ch = prompt("Enter caracter to check it is lowercase, uppercase or number : ");
if (ch >= 'a' && ch <= 'z') {
    document.write("Inputed character is Lowercase Alphabet : " + ch);
}
else if(ch >= 'A' && ch <= 'Z' ){
    document.write("Inputed character is Uppercase Aplhabet : " + ch);
} 
else if(ch >= '0' && ch <= '9' ){
    document.write("Inputed character is Number : " + ch);
}
else{
    document.write("Inputed character is not a letter or number!");
} 


//Question 2

document.write("<br> <h1> Question 2 </h1>");
let integer1 = prompt("Enter Integer 1 : ");
let integer2 = prompt("Enter Integer 2 : ");
if(integer1 > integer2){
    document.write("<br> " + integer1 + " > " + integer2)
}
else if(integer1 < integer2){
    document.write("<br> " + integer1 + " < " + integer2)

}
else{
    document.write("<br> " + integer1 + " = " + integer2)

}

// Question 3
document.write("<br> <h1> Question 3 </h1>");

let num1 = prompt("Enter Number To Check Positive/Negative : ");
if(isNaN(num1)){
    document.write("NOT A NUMBER : " + num1)
}
else if (num1 > 0){
    document.write("Number is Positive : " + num1);
}
else if(num1 < 0){
    document.write("Number is Negative : " + num1);
}
else{
    document.write("Number is Equals to : " + num1);
}

//Question 4
document.write("<br> <h1> Question 4 </h1>");
let letter = prompt("Enter A Letter To Check It is a Vowel or Not : ");
if(letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u'){
    document.write("It is a Vowel : " + letter);
}
else{
    document.write("Not a Vowel : " + letter);
}


//Question 5


let correct_password = "ahsan123";
let user_password = prompt("Enter Password Please : ");
if (!user_password){
    alert("Please Enter Password : ");
}
else if(user_password === correct_password){
    alert("Password Matches!");
}
else{
    alert("Incorrect Password");
}




//Question 6
document.write("<br> <h1> Question 6 </h1>");

var greeting;
var hour = prompt("Enter Hour : ");
if (hour < 18) {
greeting = " Good Day ";
document.write(greeting)
}
else{
greeting = " Good evening ";
document.write(greeting)
}

// Question 7

document.write("<br> <h1> Question 7 </h1>");

let time_input = prompt("Enter Time in 24/hr Format : ");
if (time_input >= '0' && time_input < '1200') {
    document.write("<br> Good Morning!");
}
else if(time_input >= '1200' && time_input < '1700'){
document.write("<br> Good AfterNoon !")
}
else if(time_input >= '1700' && time_input < '2000'){
    document.write("<br> Good Evening!");
}
else if(time_input >= '2000' && time_input <= '2359'){
    document.write("<br> Good Night!");
}
else{
    document.write("<br> Wromg Time Inputted !");
    alert("Wromg Time Inputted !");
}