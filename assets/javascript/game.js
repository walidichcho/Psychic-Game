
// need to create main varaible user guess and Computer Guess.
// each var has function or event.
// log the wins and losses.
//user has only 9 times to try, need to log the number of tries left.

let option = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let i;
let wins = 0;
let loses = 0;
let Guesssofar = 0;
let Guessleft = 9 - Guesssofar;
let computerGuess = option[Math.floor(Math.random() * option.length)].toLowerCase();
console.log(computerGuess);


document.onkeyup = function (event) {
    let userguess = String.fromCharCode(event.keyCode).
        toLowerCase();




    //-create empty array to store userGuesses. 
    // In array, store each guess by using nameOfArray.push().
    // when user loses or wins, we clear the array
    // display array in guesses so far



    var user = [];
    user = document.getElementsByName.userguess;
    function myfunction() {
        userguess.push();
        console.log(user);

    }


    Guesssofar++;
    Guessleft--;


    // user guesses correctly
    if (userguess === computerGuess) {
        wins++;
        alert("wins:" + wins);
        //reset game: reset guessesSoFar, display message on window, increment wins
        computerGuess = option[Math.floor(Math.random() * option.length)].toLowerCase();
    } else { // user guesses incorrectly

        loses++;

        if (Guesssofar === 10) { // user lost, out of guesses

            //if guessessofar ===10: user lost, start game again, everything back to 0
            //  reset guessessofar to 0
            // computer chooses new letter
            // increase losses 
            //return 
            Guesssofar = 0; //rest guesses
            loses++;
            alert("loses" + loses);
        }

    }

    // apply all result in html format.


    let html = "<h1>The Psychic Game</h1>" + "<p> Guess what letter I`m thinking of</p>" +
        "<p> wins: " + wins + "</p>" +
        "<p> loses: " + loses + "</p>" +
        "<p> Guess Left: " + (9 - Guesssofar) + "</p>" +
        "<p> Your Guesses so far:" + userguess + "</p>";

    document.querySelector('#game').innerHTML = html;



}


