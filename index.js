var player1 = prompt("Enter player 1 name:");
var player2 = prompt("Enter player 2 name:");

//code for left dice
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //getting 1-6 values.
if (randomNumber1 === 1){
    document.querySelectorAll("img")[0].setAttribute("src", "images/dice1.png");
}
else if (randomNumber1 === 2){
    document.querySelectorAll("img")[0].setAttribute("src", "images/dice2.png");
}
else if (randomNumber1 === 3){
    document.querySelectorAll("img")[0].setAttribute("src", "images/dice3.png");
}
else if (randomNumber1 === 4){
    document.querySelectorAll("img")[0].setAttribute("src", "images/dice4.png");
}
else if (randomNumber1 === 5){
    document.querySelectorAll("img")[0].setAttribute("src", "images/dice5.png");
}
else{
    document.querySelectorAll("img")[0].setAttribute("src", "images/dice6.png");
}

//code for right dice
var randomNumber2 = Math.floor(Math.random() * 6) + 1; //getting 1-6 values.
if (randomNumber2 === 1){
    document.querySelectorAll("img")[1].setAttribute("src", "images/dice1.png");
}
else if (randomNumber2 === 2){
    document.querySelectorAll("img")[1].setAttribute("src", "images/dice2.png");
}
else if (randomNumber2 === 3){
    document.querySelectorAll("img")[1].setAttribute("src", "images/dice3.png");
}
else if (randomNumber2 === 4){
    document.querySelectorAll("img")[1].setAttribute("src", "images/dice4.png");
}
else if (randomNumber2 === 5){
    document.querySelectorAll("img")[1].setAttribute("src", "images/dice5.png");
}
else{
    document.querySelectorAll("img")[1].setAttribute("src", "images/dice6.png");
}


//changing text based on winner
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "✌️ " + player1 + " Wins!";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").textContent = player2 + " Wins! ✌️";
}
else{
    document.querySelector("h1").textContent = "It's a Tiee 👔";
}