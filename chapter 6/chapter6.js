
// Question 1

let a = 10 ;
document.write("<h1> Question 1 </h1>")
document.write("<br> Value of a is: " + a + "<br>");
document.write(" <br> ...................................... <br>");
++a;
document.write("<br> Now the value of a after increment is: " + a + "<br>");
++a;
document.write("<br> Again increment in the value of is:" + a + "<br>");
--a;
document.write("<br> The value of a after decrement is: " + a + "<br>");
--a;
document.write("<br> The value of after another decrement is :" + a + "<br>");

// Question 3


document.write("<br> <h1> Question 2 </h1>");
var c = 2 ;
var d = 1 ;
document.write("<br> c = : 2 <br><br> d = : 1" + "<br>")
document.write("<br> --c : " + --c + "<br>");
document.write("<br> --d : " + --d + "<br>");
document.write("<br> --c - --d : " + (--c - --d) + "<br>");
document.write("<br> --c - --d + ++d : " + (--c - --d + ++d) + "<br>");
document.write("<br> --c - --d + ++d + d-- : " + (--c - --d + ++d + d--));



// Question 3


let name =  +prompt("Enter Your Name :");
alert("Welcome Ahsan!");


// Question 5


document.write("<br> <h1> Question 5 </h1> ");
let s1 = prompt("Enter Subject 1 Name : ");
let omarks = +prompt("Enter Marks Obtained for Subject 1 : ");
let total_marks = 200;
let result = (omarks/total_marks)*100;
document.write("<br" + s1 + "<br> Obtained Marks : " + omarks + "<br> Total Marks : " + total_marks + "<br> Result Is : " + result + "%");
let s2 = prompt("Enter Subject 2 Name : ");
let omarks2 = +prompt("Enter Marks Obtained In Sumject 2 : ");
let result2 = (omarks2/total_marks)*100;
document.write(s2 + "<br> Obtained Marks : " + omarks2 + "<br> Total Marks : " + total_marks + "<br> Result is : " + result + "%");






































