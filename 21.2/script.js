// Create a webpage that has some text and two buttons with ‘+’ and ‘-‘
// Clicking the ‘+’ button should increase the text’s font-size and clicking the ‘-‘
// should decrease it.
// Limit the font size to be between 6px and 100px.
const inc = document.querySelector('.inc');
const dec = document.querySelector('.dec');
const text = document.querySelector('p');
// console.log(inc);
// console.log(dec);
// console.log(text.innerText);

inc.addEventListener('click',()=>{
    size = parseInt(text.style.fontSize);
    size < 100 ? size++ : size;
    text.style.fontSize = size+"px";
});

dec.addEventListener('click',()=>{
    size = parseInt(text.style.fontSize);
    size > 6 ? size-- : size;
    text.style.fontSize = size+"px";
});



