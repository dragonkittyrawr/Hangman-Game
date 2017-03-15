
    //Word bank.

    var words = ["Lorem", "Ipsum", "Ergo", "Pickle", "Stoned", "Turkey", "Water"];

    //Pick a random word from word bank.

    var number = Math.floor((Math.random() * words.length));

    //onDeck is the selected word.

    var onDeck = (words[number]).toLowerCase();
    var onDeckLetters = [];

    //Get component letters for selected word.

    for (var i = 0; i < onDeck.length; i++) {
        onDeckLetters.push(onDeck.charAt(i));
        console.log(onDeckLetters);
    }



    // Capture user input.

    var lettersGuessed = [];


    document.onkeyup = function(event) {

        // Captures the key press, converts it to lowercase, and saves it to a variable.
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

        // Checks userGuess against previously guessed letters.

        if (lettersGuessed.indexOf(userGuess) === -1) {

            // If the letter has not been guessed, push to array.
            lettersGuessed.push(userGuess);
        } else {
            // Looks for userGuess in onDeckLetters.
            if (onDeckLetters.indexOf(userGuess) === -1) {
                alert("You already guessed " + userGuess + "!");
            } else {
                alert("That is in this word!");
            }
        }

        // Update text.

        var html = "<p>Letters Guessed: " + lettersGuessed + " </p>";

        document.querySelector("#game").innerHTML = html;

    }

    //Compare user input to letters.

    // function(playGame) {

    // }