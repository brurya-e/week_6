// Create a webpage with one field and one button.
// The user can choose the number of smileys, and you have
// to make them appear on the screen.
// If the user enters an input that is not a number show him
// an error message.
// TODO:styling


const input = document.querySelector('input[type="text"]');
const clickSubmit = document.querySelector('input[type="submit"]');
const smiles = document.querySelector('p');
console.log(input);
console.log(clickSubmit);
console.log(smiles);

clickSubmit.addEventListener('click',()=>{
    smiles.innerText ='';
    size = input.value;
    if(isNaN(size)){
        alert("Must input numbers");
        input.value ='';
        return false;
    }
    for(let i =0 ; i< size; i++)
    smiles.innerText += "😂";
});

// Ninja
// Remove all smilies when entering new ones
input.addEventListener('input',()=>{
    smiles.innerText ='';
})