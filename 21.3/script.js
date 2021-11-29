// Create a webpage that has part of an application process for a job.
// This page should have a text area field and a button. Your user must enter at
// least 100 characters before clicking the button. If he didn’t, please give him
// the appropriate message. (using alert is forbidden)

const input = document.querySelector('input[type="text"]');
const clickSubmit = document.querySelector('input[type="submit"]');
const alertText = document.querySelector('p');
console.log(input);
console.log(clickSubmit);
console.log(alertText);

clickSubmit.addEventListener('click',()=>{
    console.log("click");
    size = input.value.length;
    if (size < 100 )
        alertText.innerText = "You must enter at least 100 characters before clicking the button"
    else{
        alertText.innerText ="tanks for your anser";
        input.value ='';
    }
});
TODO:styling