/* Display the text letter per letter in a element */
var TextToReplace = document.getElementById("text");
var AnimatedText = "Bonjour, je suis Teddy Abernathy. Depuis toujours, je ne rêve que d’une chose : Devenir le plus grand barbier du monde ! \n \n Aujourd’hui, je lance enfin ma première boutique. Les clients sont nombreux à attendre et j'ai hâte de débuter ma nouvelle vie. \n \n Prenez vos ciseaux et aidez-moi à prospérer dans le milieu de la barberie.";
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