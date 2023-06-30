
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //getting numbers from 1-6 

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice + 1(random number from 1-6) + .png - which is images.

var image1 = document.querySelectorAll("img")[0];// selecting the first img tag[0] from all img tags("img").

image1.setAttribute("src", randomDiceImage);//passing or replacing the random img output with src. 


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//Conditional statement
if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML =  "&#128525 Player1 Win!";
}else if(randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML =  "&#128517 it's Draw!"
}
else{
    document.querySelector("h1").innerHTML =  "PLayer2 Win! &#128525 "
}