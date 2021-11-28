const users = [
    {
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
    email: "jimmya@gmail.com",
    },
    {
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
    email: "gold@hotmail.com",
    },
    {
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
    email: "timmy.hotmail.com",
    },
    ];

    const olUsers= document.createElement('ol');
    console.log(olUsers);

    
    users.forEach(user =>{
        temp = document.createElement('li');
        temp.setAttribute("data-id", `${user.id}`);
        temp.innerText = user.firstName + ' ' + user.lastName;
        console.log(temp);
        olUsers.appendChild(temp);
        console.log(olUsers);

    });
    document.body.append(olUsers)
    olUsers.style.listStyle ='none';

    // 1. Loop over the array with the forEach method and dynamically
    // create an ordered list of the first and last names from the objects.
    // 2. Remove the bullet points of the ordered list with javaScript.
    // 2. Create a custom data attribute called “data-id” and attach the id
    // value to each li.
    // Your markup should look like this: