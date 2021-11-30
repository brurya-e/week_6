// Create a webpage that has a checkbox. If the checkbox is checked, make a
// photo appear. If it is not, make it disappear.

const checked = document.querySelector('input[type="checkbox"]');
const img = document.querySelector('img');

img.style.display = 'none';

console.log(checked);
console.log(img)

checked.addEventListener('change', () => {
    if (checked.checked) {
        img.style.display = 'block';
    }
    else {
        img.style.display = 'none';
    }
})