// VARIABLES
// ==============================================================================

// Empty array for guessed letters.

var lettersGuessed = [];

// Create blank onDeckLetters object.

var onDeckLetters = {};

// Create blank letters array.

var letters = [];

// Create blank blanks array.

var blanks = [];


// Create wordBank array of villager names.

var wordBank = ["Agent S", "Agnes", "Al", "Alfonso", "Alice", "Alli", "Amelia", "Anabelle", "Anchovy", "Angus", "Anicotti", "Ankha", "Annalisa", "Annalise", "Antonio", "Apollo", "Apple", "Astrid", "Aurora", "Ava", "Avery", "Axel", "Baabara", "Bam", "Bangle", "Barold", "Beardo", "Beau", "Becky", "Bella", "Benedict", "Benjamin", "Bertha", "Bettina", "Bianca", "Biff", "Big Top", "Bill", "Biskit", "Blaire", "Blanche", "Bluebear", "Bob", "Bonbon", "Bones", "Boomer", "Boone", "Bree", "Broccolo", "Broffina", "Bruce", "Bubbles", "Buck", "Bud", "Bunnie", "Butch", "Cally", "Camofrog", "Canberra", "Carmen", "Caroline", "Celia", "Cesar", "Chadder", "Charlise", "Cheri", "Cherry", "Chester", "Chevre", "Chief", "Chops", "Chow", "Chrissy", "Claudia", "Clay", "Clyde", "Coach", "Cobb", "Coco", "Cole", "Colton", "Cookie", "Cousteau", "Cranston", "Croque", "Cube", "Curlos", "Curly", "Curt", "Cyrano", "Daisy", "Deena", "Deirdre", "Del", "Deli", "Derwin", "Diana", "Diva", "Dizzy", "Doc", "Dora", "Dotty", "Drago", "Drake", "Drift", "Ed", "Egbert", "Elise", "Elmer", "Eloise", "Elvis", "Erik", "Eugene", "Eunice", "Fang", "Fauna", "Felicity", "Filbert", "Flip", "Flo", "Flora", "Flurry", "Francine", "Frank", "Freckles", "Freya", "Friga", "Frita", "Frobert", "Fuchsia", "Gabi", "Gala", "Gaston", "Gayle", "Genji", "Gigi", "Gladys", "Gloria", "Goldie", "Goose", "Graham", "Greta", "Grizzly", "Groucho", "Gruff", "Gwen", "Hamlet", "Hamphrey", "Hans", "Harry", "Hazel", "Henry", "Hippeux", "Hopper", "Hugh", "Iggly", "Jacques", "Jambette", "Jay", "Jeremiah", "Jitters", "Joey", "Julian", "Kabuki", "Katt", "Keaton", "Ken", "Kevin", "Kid Cat", "Kidd", "Kiki", "Kitt", "Kitty", "Klaus", "Knox", "Kody", "Kyle", "Leonardo", "Lily", "Limberg", "Lionel", "Lobo", "Lolly", "Lopez", "Lucha", "Lucky", "Lucy", "Lyman", "Mac", "Maelle", "Mallary", "Maple", "Marcel", "Marcie", "Margie", "Marina", "Marshal", "Mathilda", "Melba", "Merengue", "Merry", "Midge", "Mint", "Mira", "Miranda", "Mitzi", "Moe", "Molly", "Monique", "Monty", "Moose", "Mott", "Muffy", "Nan", "Nana", "Naomi", "Nate", "Nibbles", "O'Hare", "Octavian", "Olaf", "Olivia", "Opal", "Ozzie", "Pancetti", "Pango", "Papi", "Pashmina", "Pate", "Patty", "Paula", "Peaches", "Peanut", "Pecan", "Peck", "Peewee", "Peggy", "Pekoe", "Penelope", "Phil", "Phoebe", "Pierce", "Pietro", "Pinky", "Pippy", "Pompom", "Poncho", "Poppy", "Portia", "Prince", "Puck", "Puddles", "Pudge", "Punchy", "Purrl", "Queenie", "Quillson", "Rasher", "Renée", "Rhonda", "Ribbot", "Ricky", "Rizzo", "Roald", "Robin", "Rocco", "Rocket", "Rod", "Rodeo", "Rodney", "Rolf", "Rooney", "Rory", "Roscoe", "Rosie", "Rowan", "Ruby", "Rudy", "Sally", "Samson", "Savannah", "Scoot", "Shari", "Sheldon", "Shep", "Simon", "Skye", "Sly", "Snake", "Soleil", "Sparro", "Spork", "Sprinkle", "Static", "Sterling", "Stinky", "Stitches", "Sydney", "Sylvia", "T-Bone", "Tabby", "Tammi", "Tammy", "Tangy", "Tank", "Teddy", "Tex", "Tia", "Tiffany", "Timbra", "Tipper", "Tom", "Truffles", "Tucker", "Tutu", "Twiggy", "Velma", "Vesta", "Vic", "Victoria", "Violet", "Vladimir", "Walker", "Walt", "Wart Jr.", "Wendy", "Whitney", "Willow", "Winnie", "Wolfgang", "Yuka", "Zell", "Zucker"];

// Randomly select word from wordBank.

var number = Math.floor((Math.random() * wordBank.length));

var onDeck = (wordBank[number]).toLowerCase();

// onDeck is the selected word.

var guesses = "waiting";

// FUNCTIONS
// ==============================================================================

function preGame() {

    // Loop based on selected word's length.

    for (var i = 0; i < onDeck.length; i++) {

        // Push the component letters of onDeck to letters array.

        letters.push(onDeck.charAt(i));

        // Push a _ for each component letter.

        blanks.push("_");

        // Use join to remove the default commas from blanks array.

        var theBlanks = blanks.join(" ");

        // FOR TESTING ONLY

        // console.log(letters);
        // console.log(blanks);

    };

    // Define content of onDeckLetters object {l: b,}.

    onDeckLetters.l = letters;
    onDeckLetters.b = blanks;

    // Assign above to empty onDeckLetters object.

    var marco = Object.assign({}, onDeckLetters);

    guesses = "preGame";

    // var polo = [theBlanks, onDeckLetters];

    // FOR TESTING ONLY
    console.log(onDeckLetters);

    return (onDeckLetters);
};


function gameStart() {

    onDeckLetters = preGame();

    var theBlanks = onDeckLetters.b.join(" ");
    var blanks = onDeckLetters.b;
    var letters = onDeckLetters.l;
    

    //  GAMESTART

    document.querySelector("#startBtn").style.visibility = "hidden";

    // Create html to display blanks.

    var htmlBlanks = theBlanks;

    guesses = parseInt((onDeck.length) + 3);

    // Display blanks on page.

    var startScreen = "<p>Game Loaded.</p>" + "<p>You have " + guesses + " guesses left.</p>" + "<p></p>" + "<p>Pick a letter.</p>";
    document.querySelector("#game").innerHTML = startScreen;
    document.querySelector("#wordSpace").innerHTML = htmlBlanks;

    // Number of guesses is based on length of word.

    return;

};


// GAMEPLAY

document.onkeyup = function gamePlay(event) {

    var userGuess = event.key;

    onDeckLetters = preGame();

    var theBlanks = onDeckLetters.b.join(" ");
    var blanks = onDeckLetters.b;
    var letters = onDeckLetters.l;

    // var marco = preGame();

    // var theBlanks = marco[1];
    // var marco = marco[2];
    // var onDeckLetters = marco[3];
    // var letters = marco[4];
    // var blanks = marco[5];

    guesses = parseInt((onDeck.length) + 3);

    // FOR TESTING ONLY
    console.log(userGuess);
    console.log(guesses);

    // Guesses left check.

    if (guesses > 0) {


        for (var w = 0; w < onDeckLetters.b.length; w++) {

            // Look for userGuess in onDeckLetters.
            if (onDeckLetters.l.indexOf(userGuess) === -1) {
                guesses--;
            }

            // Look for userGuess in lettersGuessed.
            if (lettersGuessed.indexOf(userGuess) === -1) {

                // If the letter has not been guessed, push to array.

                lettersGuessed.push(userGuess);
                // Create html to display blanks.

                var htmlGuess = lettersGuessed;

                // Display blanks on page.

                document.querySelector("#guessedLetters").innerHTML = htmlGuess;
            };
        };
    };
};



// #nobkgrd

// MAIN PROCESS
// ==============================================================================


preGame();

// document.querySelector("#startBtn").addEventListener("click", gameStart()); {

// document.onkeyup = function gamePlay(event) {
    
//     // Capture userGuess as lower case.
//     var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

// };

// };
