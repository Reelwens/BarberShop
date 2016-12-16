/* Display the text letter per letter in a element */
var TextToReplace = document.getElementById("text");
var AnimatedText = "Bonjour, je suis Teddy Abernathy. Depuis ma plus tendre enfance, je ne rêve que d’une chose : Devenir le plus grand barbier du monde. \n \n J'économise depuis des années pour lancer ma première boutique. Aujourd’hui est un grand jour car son ouverture est imminente. \n \n Prenez vos ciseaux et aidez-moi à prospérer dans le milieu de la barberie. Engagez des employés, améliorez leur productivité, et gagnez en prestige. À vous de jouer !";
var i = 0;

var addLetter = function addLetter() {
    if (i < AnimatedText.length) {
        setTimeout(function(){
            TextToReplace.innerHTML += AnimatedText.charAt(i).replace(/\n/g, "<br/>"); // Replace \n by a space
            i++;
            addLetter();
        }, 30); // Timing duration until the next letter
    }
    else {
        TextToReplace.innerHTML = AnimatedText.replace(/\n/g, "<br/>"); // Stop the loop and display the entire text
    };	
};
addLetter();

/* Listen the click on an element to do the else */
var elementToClick = document.querySelector(".main"); // Set the element to click

elementToClick.addEventListener('click', function(element){
    element.preventDefault();
    i = AnimatedText.length;
});

document.getElementById("pseudo")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        document.getElementById("button-pseudo").click();
    }
});