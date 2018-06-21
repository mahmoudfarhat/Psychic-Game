    
    var alphabet = ["a","b","c","d","e","f","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    var wins = 0;
    var losses = 0;
    var guessesLeft = 0;
    var guessesSoFar = [];
    var userGuess = null;
    
    console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " computer choiced: " + letterBeGuessed);

    var letterBeGuessed = alphabet[Math.floor(Math.random() * alphabet.length)];

    document.onkeyup = function(event) {
       var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

        if  (letterBeGuessed =! userGuess){
            guessesSoFar[guessesSoFar.length]=userGuess;
            guessesLeft--;
        }

        if (letterBeGuessed == userGuess){

          wins++;
         console.log("you win.");
         
          guessesLeft = 9;
          guessesSoFar = [];
          letterBeGuessed = alphabet[Math.floor(Math.randome() * alphabet.length)];
         
         console.log("wins: " + wins + "losses: " + losses + "guessesLeft: " + guessesLeft + "guesses so far: " + guessesSoFar + "computer choiced: " + letterBeGuessed);

        }

        if (guessesLeft == 0){
            losses++;
         console.log("you lost");
        
          guessesLeft = 9;
          guessesSoFar = [];
          letterBeGuessed = alphabet[Math.floor(Math.random() * alphabet.length)];
        
         console.log("wins: " + wins + "losses: " + losses + "guessesLeft: " + guessesLeft + "guesses so far: " + guessesSoFar + "computer choiced: " + letterBeGuessed);
    
        }
        
    }