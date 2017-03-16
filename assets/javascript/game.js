// Create wordBank array.

var wordBank = ["Lorem", "Ipsum", "Ergo", "Pickle", "Stoned", "Turkey", "Water"];

// Randomly select word from wordBank.

var number = Math.floor((Math.random() * wordBank.length));

// onDeck is the selected word.

var onDeck = (wordBank[number]).toLowerCase();

// Create an empty onDeckLetters array.

var onDeckLetters = [];

//Get component letters for selected word.

for (var i = 0; i < onDeck.length; i++) {
    // Push to onDeckLetters.
    onDeckLetters.push(onDeck.charAt(i));
    // FOR TESTING ONLY
    console.log(onDeckLetters);
};

//  GAME START

document.onkeyup = function(event) {

    // Captures the key press.
    var userGuess = event.keyCode;

    if (userGuess === "") {
        var guesses = parseInt((onDeckLetters.length) + 5);
        var startScreen = "<p>Game Loaded.  You have " + guesses + " guesses left.</p>" + "<p></p>" + "<p>Pick a letter.</p>";
        document.querySelector("#game").innerHTML = startScreen;
    




    // Capture userGuess as lower case.

  document.onkeyup = function(event) {
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

        // Create an empty lettersGuessed array.

        var lettersGuessed = [];


        // Look for userGuess in onDeckLetters.
        if (onDeckLetters.indexOf(userGuess) === -1) {
            guesses--;
        } else {
            alert("That is in this word!");
        }





        // Checks userGuess against previously guessed letters.

        if (lettersGuessed.indexOf(userGuess) === -1) {

            // If the letter has not been guessed, push to array.
            lettersGuessed.push(userGuess);
        } else {
            // Update text.

            var html = "You have " + guesses + " guesses left.</p>" + "<p></p>" + "<p>Pick a letter.</p>" + "<p>Letters Guessed: " + lettersGuessed + " </p>";
            document.querySelector("#game").innerHTML = html;

        }

    }

    }else {}
}
