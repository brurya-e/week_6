// Create a webpage that has an image of a lightbulb.
// When the user clicks the lightbulb, it should be turned on, clicking it again
// will turn it off.
const pic = document.querySelector('.pic');
console.log(pic);


pic.addEventListener('click', ()=>{
    console.log(pic);
    console.log("click");
    pic.classList.toggle('toggle');
    console.log(pic);
})
