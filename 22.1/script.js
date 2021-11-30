// Create a webpage that has a form (asks the user for its name, age and email
//     address) and when the user clicks submit, open a text window that writes all
//     the information and ask for his confirmation. If he clicks on the confirm
//     button, tell him “congratulations you successfully sent this form” if he clicks on
//     change information, give him the possibility to change the information and ask
//     again for his confirmation.npu

const form = document.querySelector('form');
const clickSubmit = document.querySelector('input[type="button"]');
const infromation = document.querySelector('.infromation');
console.log(form);
console.log(clickSubmit);
console.log(infromation);


clickSubmit.addEventListener('click', ()=>{
    console.log('click');
    form.classList.add("hidenForm");
    infromation.classList.remove("removeInfo");
    infromation.classList.add("showInfo")
    fullName= document.createElement('div');
    fullName.innerText =  "name: " + form.querySelector('#name').value;
    age= document.createElement('div');
    age.innerText = "age: " + form.querySelector('#age').value;
    email=document.createElement('div');
    email.innerText= "email: " + form.querySelector('#email').value;
    infromation.innerText = 'your infromation, plese confrim';
    infromation.appendChild(fullName);
    infromation.append(age);
    infromation.append(email); 
    confrim = document.createElement('input');
    confrim.type="button";
    confrim.value="confrim";
    infromation.appendChild(confrim);
    change = document.createElement('input');
    change.type="button";
    change.value="change";
    infromation.appendChild(change);

    const confrimBtn = document.querySelector('input[value = "confrim"]'); 
    confrimBtn.addEventListener('click', ()=>{
        p = document.createElement('p');
        p.innerText = "congratulations you successfully sent this form";
        document.body.appendChild(p);
        infromation.classList.add("removeInfo");
    
    });
    const changeBtn = document.querySelector('input[value = "change"]'); 
    changeBtn.addEventListener('click', ()=>{
        form.classList.remove("hidenForm");
        infromation.classList.remove("showInfo");
        infromation.classList.add("removeInfo");
    })    


})
//TODO: styling