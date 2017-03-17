window.onload = function hangman() {

    var guesses = "preGame";

    if (guesses = 0) {
        alert("Game Over!");
    }

    //  GAME START

    document.onkeyup = function(gameStart) {

        // Create wordBank array.

        var wordBank = ["Lorem", "Ipsum", "Ergo", "Pickle", "Stoned", "Turkey", "Water"];

        // Randomly select word from wordBank.

        var number = Math.floor((Math.random() * wordBank.length));

        // onDeck is the selected word.

        var onDeck = (wordBank[number]).toLowerCase();

        // Number of guesses is based on length of word.

        var guesses = parseInt((onDeck.length) + 5);

        // Captures the key press.
        var go = gameStart.keyCode;
        // FOR TESTING ONLY
        console.log(go);

        // If the user presses space the game loads.

        if (go === 0 || go === 32) {

            var startScreen = "<p>Game Loaded.  You have " + guesses + " guesses left.</p>" + "<p></p>" + "<p>Pick a letter.</p>";
            document.querySelector("#game").innerHTML = startScreen;

        }



        // Create an onDeckLetters object.
        var onDeckLetters = new Object();
        var letters = new Array();
        var blanks = new Array();

        // var dashDiv = document.getElementById("wordSpace");
        // var newDashDiv = document.createElement("div");

        for (var i = 0; i < onDeck.length; i++) {

            

            letters.push(onDeck.charAt(i));
            blanks.push("_ ");

            console.log(letters);
            console.log(blanks);

            };

            onDeckLetters.l = letters;
            onDeckLetters.b = blanks;



            var polo = Object.assign({}, onDeckLetters);



            var htmlBlanks = "<p>" + onDeckLetters.b + "</p>";

            document.querySelector("#wordSpace").innerHTML = htmlBlanks;



            // // This placeholder will get overwritten with each iteration of the loop.
            

            // // We then assign the the value of this placeholder div to be the text in the array.
            //  var newDashDiv.innerHTML = onDeck;

            // // We then add the placeholder div to the our main div on the page ("#drink-options")
            // dashDiv.appendChild(newDashDiv);

            // console.log(onDeckLetters.blanks[i]);

            // console.log(htmlBlanks);
        

    

};

};

// var onDeckLetters = { l: b, };
// var l = onDeck.charAt(i);
// var b = "_ ";
// var marco = l + ": " + b + ",";
// var polo = Object.assign({ marco }, onDeckLetters);


// This line of JavaScript "grabs" the main div on the page ("#drink-options");


// We then use a for loop to iterate through all the drinks in drinkList.
// With each iteration, we perform a series of code operations each time.


// For each drink in the array, we create a new placeholder div.














// Object.assign(onDeckLetters, polo);







//Get component letters for selected word.

// var onDeckBlanks = onDeck.split("");
// // FOR TESTING ONLY
// console.log(onDeckBlanks);


// Display blanks for selected word.

// for (var i = 0; i < onDeckBlanks.length; i++) {
//     // FOR TESTING ONLY
//     console.log(onDeckBlanks);

// var htmlBlanks = ("<p>" + onDeckLetters.b[i] + "</p>");
// FOR TESTING ONLY

// document.getElementById("#wordSpace").innerHTML = htmlBlanks;








// // Display blanks for selected word.

// for (var i = 0; i < onDeck.length; i++) {
//     // FOR TESTING ONLY
//     console.log(onDeckBlanks);

//     var htmlBlanks = ("<p>" + onDeckLetters[i] + "</p>");
//     // FOR TESTING ONLY
//     console.log(htmlBlanks);

//     document.getElementById("#wordSpace").innerHTML = htmlBlanks;

// }








// Capture userGuess as lower case.

// document.onkeyup = function(gamePlay) {
//     userGuess = String.fromCharCode(gamePlay.keyCode).toLowerCase();

//     console.log(userGuess);

//     // Create an empty lettersGuessed array.

//     var lettersGuessed = [];

//     // Guesses left check.

//     if (guesses > 0) {

//         // Look for userGuess in onDeckLetters.
//         if (onDeckLetters.indexOf(userGuess) === -1) {
//             guesses--;
//         }

//         // Look for userGuess in lettersGuessed.
//         if (lettersGuessed.indexOf(userGuess) === -1) {

//             // If the letter has not been guessed, push to array.

//             lettersGuessed.push(userGuess);
//         }


//         // Update text.




//     } else {
//         alert("Game Over!")
//     }

// }
