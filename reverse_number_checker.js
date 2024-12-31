//Receive a positive number and output "yes" if it's equal to its reverse. Otherwise, output "no"

function checkPalindrome() {
    var input = document.getElementById("numberInput").value;
    var number = parseInt(input)
    var temp = number;
    var reverse = 0;
    var result;

    if (isNaN(number)) {
        alert("Please enter a valid number");
        return; //exit function if input is not a number
    }

    while (temp > 0) {
        var digit = temp % 10;
        reverse = reverse * 10 + digit;
        temp = Math.floor(temp / 10);
    }

    if (number == reverse) {
        result = document.getElementById("result").innerHTML = "Yes"
    } else {
        result = document.getElementById("result").innerHTML = "No"
    }
}

// function to check palindrome when the button is clicked
function myButtonHandler() {
    checkPalindrome(); 
}
// assign the button handler function to the onclick event of the button
document.getElementById("myButton").onclick = myButtonHandler;