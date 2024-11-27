let name = prompt ("What is your name?");
let age = prompt ("How old are you?");
let email = prompt ("What is your email?");

if (name && age && email) {
    alert(`Hi ${name}, you are ${age} years old and we will keep in touch via  your email: ${email} 👋👋`);
}

// Clear the input fieds after submission

else {
alert("Please fill out all the fields before submitting.");
}
