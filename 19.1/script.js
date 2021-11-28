// Please make the following changes to the html file while navigating the DOM.
// Create a variable that holds the <li> element with the class “start-here”.
// Use traverse methods to complete these tasks:

const liInStartHere = document.querySelector('li.start-here');
// console.log(liInStartHere)

// 1. Change the text from “title 2” to “main title”
liInStartHere.innerText = "main title"

// 2. Add another sub title with the text “sub title 4”
const sub4 = document.createElement('li');
sub4.innerText = "sub title 4";
// console.log(sub4);
const ul = liInStartHere.nextElementSibling.lastElementChild;
// console.log(ul);
ul.appendChild(sub4);

// 3. Delete the last <li> element from the list.

console.log(liInStartHere.parentElement.lastElementChild);
const remove = liInStartHere.parentElement.lastElementChild;
const parent = liInStartHere.parentElement;
// parent.removeChild(remove);
remove.remove();


// 4. Change the <title> element text to “Master Of The Dom”.
document.title = "Master Of The Dom";

// 5. Change the text of the <p> element ot something else of your
// console.log(document.querySelector('p').innerText);
document.querySelector('p').innerText = "bla bla bla";





