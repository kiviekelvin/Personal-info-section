document.getElementById("button").addEventListener("click", changeDetails);


function changeDetails() {
    let userName = prompt("What is your Fullname?");
    let age = prompt("How old are you?");
    let eyeColor = prompt("What color are your eyes?");
    let hobby = prompt("What are your Hobbies?");
    let food = prompt("What is your favorite food?");
    let movie = prompt("What is your favourite movie?");

    if (userName) { 
        document.getElementById("name").innerHTML = userName;
    }

    if (age) {
        document.getElementById("age").innerHTML = `<strong> Age: </strong> ${age}`;
    }

    if (eyeColor) {
        document.getElementById("eye").innerHTML = `<strong> Eye Color: </strong> ${eyeColor}`
    }

    if (hobby) {
        document.getElementById("hobby").innerHTML = `<strong> Hobbies: </strong> ${hobby}`
    }

    if (food) {
        document.getElementById("food").innerHTML = `<strong> Favorite Food: </strong> ${food}`
    }

    if (movie) {
        document.getElementById("movie").innerHTML = `<strong> Favorite Movie: </strong> ${movie}`
    }
    
}

