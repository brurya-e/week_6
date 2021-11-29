// Create a webpage that has an input field for the user’s age and a button.
// If the user enters a number above 18, make the text “you can drink appear”.
// If the user enters a number below 18, make the text “you’re too young”
// appear.
const input = document.querySelector('input[type="text"]');
console.log(input);
const check =document.querySelector('input[type ="submit"]');
const msg =document.querySelector('p');

check.addEventListener('click', isOver18);
function isOver18 (e){
    const age = input.value;
    console.log(age)
    age >=18 ? 
        msg.innerText ="you can drink appear"
    :   msg.innerText ="you’re too young";

}
