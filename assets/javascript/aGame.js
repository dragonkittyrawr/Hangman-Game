// VARIABLES

// VILLAGER NAMES
const wordBank = ["Agent S", "Agnes", "Al", "Alfonso", "Alice", "Alli", "Amelia", "Anabelle", "Anchovy", "Angus", "Anicotti", "Ankha", "Annalisa", "Annalise", "Antonio", "Apollo", "Apple", "Astrid", "Aurora", "Ava", "Avery", "Axel", "Baabara", "Bam", "Bangle", "Barold", "Beardo", "Beau", "Becky", "Bella", "Benedict", "Benjamin", "Bertha", "Bettina", "Bianca", "Biff", "Big Top", "Bill", "Biskit", "Blaire", "Blanche", "Bluebear", "Bob", "Bonbon", "Bones", "Boomer", "Boone", "Bree", "Broccolo", "Broffina", "Bruce", "Bubbles", "Buck", "Bud", "Bunnie", "Butch", "Cally", "Camofrog", "Canberra", "Carmen", "Caroline", "Celia", "Cesar", "Chadder", "Charlise", "Cheri", "Cherry", "Chester", "Chevre", "Chief", "Chops", "Chow", "Chrissy", "Claudia", "Clay", "Clyde", "Coach", "Cobb", "Coco", "Cole", "Colton", "Cookie", "Cousteau", "Cranston", "Croque", "Cube", "Curlos", "Curly", "Curt", "Cyrano", "Daisy", "Deena", "Deirdre", "Del", "Deli", "Derwin", "Diana", "Diva", "Dizzy", "Doc", "Dora", "Dotty", "Drago", "Drake", "Drift", "Ed", "Egbert", "Elise", "Elmer", "Eloise", "Elvis", "Erik", "Eugene", "Eunice", "Fang", "Fauna", "Felicity", "Filbert", "Flip", "Flo", "Flora", "Flurry", "Francine", "Frank", "Freckles", "Freya", "Friga", "Frita", "Frobert", "Fuchsia", "Gabi", "Gala", "Gaston", "Gayle", "Genji", "Gigi", "Gladys", "Gloria", "Goldie", "Goose", "Graham", "Greta", "Grizzly", "Groucho", "Gruff", "Gwen", "Hamlet", "Hamphrey", "Hans", "Harry", "Hazel", "Henry", "Hippeux", "Hopper", "Hugh", "Iggly", "Jacques", "Jambette", "Jay", "Jeremiah", "Jitters", "Joey", "Julian", "Kabuki", "Katt", "Keaton", "Ken", "Kevin", "Kid Cat", "Kidd", "Kiki", "Kitt", "Kitty", "Klaus", "Knox", "Kody", "Kyle", "Leonardo", "Lily", "Limberg", "Lionel", "Lobo", "Lolly", "Lopez", "Lucha", "Lucky", "Lucy", "Lyman", "Mac", "Maelle", "Mallary", "Maple", "Marcel", "Marcie", "Margie", "Marina", "Marshal", "Mathilda", "Melba", "Merengue", "Merry", "Midge", "Mint", "Mira", "Miranda", "Mitzi", "Moe", "Molly", "Monique", "Monty", "Moose", "Mott", "Muffy", "Nan", "Nana", "Naomi", "Nate", "Nibbles", "O'Hare", "Octavian", "Olaf", "Olivia", "Opal", "Ozzie", "Pancetti", "Pango", "Papi", "Pashmina", "Pate", "Patty", "Paula", "Peaches", "Peanut", "Pecan", "Peck", "Peewee", "Peggy", "Pekoe", "Penelope", "Phil", "Phoebe", "Pierce", "Pietro", "Pinky", "Pippy", "Pompom", "Poncho", "Poppy", "Portia", "Prince", "Puck", "Puddles", "Pudge", "Punchy", "Purrl", "Queenie", "Quillson", "Rasher", "Renée", "Rhonda", "Ribbot", "Ricky", "Rizzo", "Roald", "Robin", "Rocco", "Rocket", "Rod", "Rodeo", "Rodney", "Rolf", "Rooney", "Rory", "Roscoe", "Rosie", "Rowan", "Ruby", "Rudy", "Sally", "Samson", "Savannah", "Scoot", "Shari", "Sheldon", "Shep", "Simon", "Skye", "Sly", "Snake", "Soleil", "Sparro", "Spork", "Sprinkle", "Static", "Sterling", "Stinky", "Stitches", "Sydney", "Sylvia", "T-Bone", "Tabby", "Tammi", "Tammy", "Tangy", "Tank", "Teddy", "Tex", "Tia", "Tiffany", "Timbra", "Tipper", "Tom", "Truffles", "Tucker", "Tutu", "Twiggy", "Velma", "Vesta", "Vic", "Victoria", "Violet", "Vladimir", "Walker", "Walt", "Wart Jr.", "Wendy", "Whitney", "Willow", "Winnie", "Wolfgang", "Yuka", "Zell", "Zucker"];

var rando = Math.floor((Math.random() * wordBank.length));

var onDeck = (wordBank[rando]).toLowerCase();

// Empty array for guessed letters.
var lettersGuessed = [];
// Empty array for incorrect guesses.
var incorrectGuesses = [];

var letters = [];

var blanks = [];

var display;

var guesses;

var gameScreen = document.querySelector("#game");

var gameData = {};

var Puzzle = function(villagerName, letters, blanks, url) {
    this.villagerName = villagerName;
    this.letters = letters;
    this.blanks = blanks;
    this.display = display;
    this.guesses = guesses;
    this.url = url;
    this.htmlDisplay = function() {

        // Display blanks on page.
        this.display = this.blanks.join(" ");

        startScreen = "<h1>Can you guess the villager's name?</h1>" + "<br>" + "<br>" + "<h1>" + this.display + "</h1>" + "<br>" + "<br>" + "<br>" + "<br>" + "<h3>You have " + this.guesses + " guesses. Pick a letter.</h3>";
        gameScreen.innerHTML = startScreen;
    };
};

var villagerName = wordBank[rando];

var url = "assets/images" + onDeck + ".jpg";

function gameStart() {

    for (var i = 0; i < onDeck.length; i++) {
        // Push the component letters of onDeck to letters array.
        letters.push(onDeck.charAt(i));
        // Push a _ for each component letter.
        blanks.push("_");
    };

    document.querySelector("#startBtn").style.display = "none";
    guesses = parseInt((onDeck.length) + 3);
    gameData = new Puzzle(villagerName, letters, blanks, display, guesses, url);
    gamePlay();
};

var gamePlay = function() {
    console.log(gameData.villagerName);

    var guessedLetters = document.createElement("div");

    gameData.htmlDisplay();

    gameScreen.appendChild(guessedLetters);

    guessedLetters.innerHTML = "<br>" + "<br>" + "<br>" + "<br>" + "<h3>Letters Guessed: </h3>";

    document.onkeyup = function(event) {
        // Capture userGuess.
        userGuess = event.key;
        if (lettersGuessed.indexOf(userGuess) === -1 && gameData.letters.indexOf(userGuess) === -1) {
            // If userGuess is not in guessedLetters push to array,
            lettersGuessed.push(userGuess);

        } else if (lettersGuessed.indexOf(userGuess) !== -1) {
            alert("Letter already guessed!");
        };

        // If userGuess is not in villager name..
        if (gameData.letters.indexOf(userGuess) === -1) {
            // Look for userGuess in lettersGuessed.

            // and push to incorrectGuesses.
            incorrectGuesses.push(userGuess);
            var htmlGuess = incorrectGuesses.join(" ");
            guessedLetters.innerHTML = "<br>" + "<br>" + "<br>" + "<br>" + "<h3>Letters Guessed: " + htmlGuess + "</h3>";

        } else {

            function guessCheck(userGuess, onDeck) {

                var indexes = [];
                for (let i = 0; i < onDeck.length; i++) {
                    if (onDeck.charAt(i) === userGuess) {
                        indexes.push(i);
                    }
                }
                for (let i = 0; i < indexes.length; i++) {
                    gameData.blanks[i] = gameData.letters[i]
                }
                gameData.htmlDisplay();
            };
            guessCheck(userGuess, onDeck);
        };
    };
};
