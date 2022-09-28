let btn = document.getElementById("btn");
btn.addEventListener("click",function(){
//bill made
let billAmount = document.getElementById("bill_amount").value;
//tip percentage
let tipPercentage = document.getElementById("tip_percentage").value;

// console.log(billAmount);
// tip amount calculated
let tipAmount = document.getElementById("tip_amount").value = billAmount * tipPercentage/100;

console.log(tipAmount);

// individual amount
let numPersons = document.querySelector("#person_number").value;
document.querySelector("#indivdual_amt").value = Math.ceil(tipAmount/numPersons);


document.getElementById("total_bill").value = parseFloat(billAmount) + parseFloat(tipAmount);
})
