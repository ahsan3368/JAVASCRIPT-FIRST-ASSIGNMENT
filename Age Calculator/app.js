


function age() {
    let birthYear = prompt("Please enter your birth year:");
    

    let currentYear = prompt("Please enter the current year:");
   

    let age = currentYear - birthYear;

    swal("Your Age", `You are approximately ${age} years old.`, "success");
  }