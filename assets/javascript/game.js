// VARIABLES
// ==============================================================================

// Empty array for guessed letters.

var lettersGuessed = [];

// Create wordBank array.

var wordBank = ["Lorem", "Ipsum", "Ergo", "Pickle", "Stoned", "Turkey", "Water"];

// Randomly select word from wordBank.

var number = Math.floor((Math.random() * wordBank.length));

// onDeck is the selected word.

var onDeck = (wordBank[number]).toLowerCase();

var guesses = "preGame";



// FUNCTIONS
// ==============================================================================

// PRE-GAME

function letterbee() {

    // Create blank onDeckLetters object.
    var onDeckLetters = new Object();

    // Create blank letters array.

    var letters = new Array();

    // Create blank blanks array.

    var blanks = new Array();


    // Number of guesses is based on length of word.

    guesses = parseInt((onDeck.length) + 3);


    // Loop based on selected word's length.

    for (var i = 0; i < onDeck.length; i++) {

        // Push the component letters of onDeck to letters array.

        letters.push(onDeck.charAt(i));

        // Push a _ for each component letter.

        blanks.push("_");

        // Use join to remove the default commas from blanks array.

        var theBlanks = blanks.join(" ");

        // FOR TESTING ONLY

        console.log(letters);
        console.log(blanks);

    };

    // Define content of onDeckLetters object {l: b,}.

    onDeckLetters.l = letters;
    onDeckLetters.b = blanks;

    // Assign this.


    var polo = Object.assign({}, onDeckLetters);

    // Create html to display blanks.

    var htmlBlanks = "<p>" + theBlanks + "</p>";

    // Display blanks on page.



//  GAMESTART

function gameStart() {

    var startScreen = "<p>Game Loaded.  You have " + guesses + " guesses left.</p>" + "<p></p>" + "<p>Pick a letter.</p>";
    document.querySelector("#game").innerHTML = startScreen;
    document.querySelector("#wordSpace").innerHTML = htmlBlanks;

};

// GAMEPLAY

function gamePlay() {
    // Capture userGuess as lower case.
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    // FOR TESTING ONLY
    console.log(userGuess);

    // Create an empty lettersGuessed array.



    // Guesses left check.

    if (guesses > 0) {

        // Look for userGuess in onDeckLetters.
        if (onDeckLetters.indexOf(userGuess) === -1) {
            guesses--;
        }

        // Look for userGuess in lettersGuessed.
        if (lettersGuessed.indexOf(userGuess) === -1) {

            // If the letter has not been guessed, push to array.

            lettersGuessed.push(userGuess);
        }
        // Update text.

    } else {
        alert("Game Over!");
    };
};

};


// MAIN PROCESS
// ==============================================================================

// PREGAME

document.onkeyup = function hangman(event) {

    // Captures the key press.
    var go = event.keyCode;

    // FOR TESTING ONLY
    console.log(go);

    // GAMESTART

    // If the user presses the space key the game loads.
    if (go === 0 || go === 32) {

        letterbee();
        // gameStart();


        // GAMEPLAY

        if (guesses !== "preGame") {
            return;
        }

        letterbee();
        // gamePlay();
    };

};


// var guesses = "preGame";

// if (guesses === 0) {
//     alert("Game Over!");
// };
