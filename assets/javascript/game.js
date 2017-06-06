//Set the list of words that will be used in the game
var listOfWords = [
  ["L", "E", "B", "R", "O", "N"],
  ["C","A","V","A","L","I","E","R","S"],
  ["K","Y","R","I","E"],
  ["C","H","A","M","P","I","O","N","S"],
  ["C","L","E","V","E","L","A","N","D"],
  ["O","H","I","O"],
  ["B","U","C","K","E","Y","E","S"]
]

//Select a random word from the list
var randomWord = Math.floor((Math.random()*(listOfWords.length-1))); 
var guessWord = listOfWords[randomWord]; // the word to guess will be chosen from the array above
console.log(guessWord);

//Create a new Array to store the value of dashes that match the length of the random word
var setDash = new Array(guessWord.length);

//Set the initial value of wrong guesses to zero
var wrongGuess = 0;

//Ensure every letter in the word is symbolized by an underscore in the dashed line guessfield
for (var i = 0; i < setDash.length; i++){
  setDash[i] = "_ ";
}

// print out the dashed line guessfield
function printsetDash(){
  for (var i = 0; i < setDash.length; i++){
  var dashLine = document.getElementById("dashLine");
  var dashNode = document.createTextNode(setDash[i]);
  dashLine.appendChild(dashNode);
  }
}


//Capture the letter that is guessed by the game player when a key is pressed
document.onkeyup = function(event) {
  var pressed = event.key;
  console.log(pressed);
  var theGuess = document.getElementById("yourGuess");
  theGuess.value = pressed;
  letterInWord();
};

//checks if the the letter provided by the user matches one or more of the letters in the word
var letterInWord = function(){
  var f = document.guessForm; 
  var b = f.elements["yourGuess"]; 
  var theLetter = b.value; // the letter provided by the user
  theLetter = theLetter.toUpperCase();
          for (var i = 0; i < guessWord.length; i++){
            if(guessWord[i] === theLetter){
              setDash[i] = theLetter + " ";
              var inWord = true;
            }
          b.value = "";
          }
      
  
  //deletes the guessfield and replaces it with the new one
  var dashLine = document.getElementById("dashLine");
  dashLine.innerHTML=""; 
  printsetDash();
  
  // if a guessed letter is not in the word, the letter will be put on the "wrong letters"-list and hangman grows
  if(!inWord){
    var notInWord = document.getElementById("notInWord");
    var dashNode = document.createTextNode(" " + theLetter);
    notInWord.appendChild(dashNode); 
    var wrongLetters = [theLetter];
    console.log("wrong letter" + wrongLetters);
    wrongGuess++;
    var hangman = document.getElementById("hangman");
    hangman.src = "http://www.writteninpencil.de/Projekte/Hangman/hangman" + wrongGuess + ".png";
  }
  
  var wins = 0;
  var winTotal = document.getElementById("winTotal");

  //checks if all letters have been found
  var correctGuess = true;
  for (var i = 0; i < setDash.length; i++){
    if(setDash[i] === "_ "){
      correctGuess = false;
    }
  }
  if(correctGuess){
    wins += 1   
    winTotal.value = wins;
    window.alert("You win!");
    var playAgain = confirm("Want to play again?");
    console.log(playAgain);
    if(playAgain == true){
     newGame();
    }
  }
  
  //once you got six wrong letters, you lose
  if(wrongGuess === 6){
    window.alert("Sorry you lost!");
    var playAgain = confirm("Want to play again?");
    if(playAgain == true){
      newGame();
    }
  }
}

function init(){
  printsetDash();
}


//start a new game 
function newGame() {
    
    
    var total = document.getElementById("winTotal").value;

    var listOfWords = [
      ["L", "E", "B", "R", "O", "N"],
      ["C","A","V","A","L","I","E","R","S"],
      ["K","Y","R","I","E"],
      ["C","H","A","M","P","I","O","N","S"],
      ["C","L","E","V","E","L","A","N","D"],
      ["O","H","I","O"],
      ["B","U","C","K","E","Y","E","S"]
    ]

    var randomWord = Math.floor((Math.random()*(listOfWords.length-1))); 

    var guessWord = listOfWords[randomWord]; // the word to guess will be chosen from the array above
    console.log(guessWord);
    var setDash = new Array(guessWord.length);
    var wrongGuess = 0;

    // every letter in the word is symbolized by an underscore in the dashed line guessfield
    for (var i = 0; i < setDash.length; i++){
      setDash[i] = "_ ";
    }

    // print out the dashed line guessfield
    function printsetDash(){
      for (var i = 0; i < setDash.length; i++){
      var dashLine = document.getElementById("dashLine");
      var dashNode = document.createTextNode(setDash[i]);
      dashLine.appendChild(dashNode);
      }
    }

    //var theGuess = document.getElementById("yourGuess").value;

    document.onkeyup = function(event) {
      var pressed = event.key;
      console.log(pressed);
      var theGuess = document.getElementById("yourGuess");
      theGuess.value = pressed;
      letterInWord();
    };

    //checks if the the letter provided by the user matches one or more of the letters in the word
    var letterInWord = function(){
      var f = document.guessForm; 
      var b = f.elements["yourGuess"]; 
      var theLetter = b.value; // the letter provided by the user
      theLetter = theLetter.toUpperCase();
          for (var i = 0; i < guessWord.length; i++){
            if(guessWord[i] === theLetter){
              setDash[i] = theLetter + " ";
              var inWord = true;
            }
          b.value = "";
          }
      //deletes the guessfield and replaces it with the new one
      var dashLine = document.getElementById("dashLine");
      dashLine.innerHTML=""; 
      printsetDash();
      
      // if a guessed letter is not in the word, the letter will be put on the "wrong letters"-list and hangman grows
      if(!inWord){
        var notInWord = document.getElementById("notInWord");
        var dashNode = document.createTextNode(" " + theLetter);
        var wrongLetters = theLetter;
        console.log("wrong letter" + wrongLetters);
        notInWord.appendChild(dashNode); 
        wrongGuess++;
        var hangman = document.getElementById("hangman");
        hangman.src = "http://www.writteninpencil.de/Projekte/Hangman/hangman" + wrongGuess + ".png";
      }
      

      
      var winTotal = document.getElementById("winTotal");
      var wins = parseInt(winTotal.value);
      //checks if all letters have been found
      var correctGuess = true;
      for (var i = 0; i < setDash.length; i++){
        if(setDash[i] === "_ "){
          correctGuess = false;
        }
      }
      if(correctGuess){
        wins += 1   
        winTotal.value = wins;
        window.alert("You win!");
        var playAgain = confirm("Want to play again?");
        console.log(playAgain);
        if(playAgain == true){
         newGame();
        }
        
      }
      
      //once you got six wrong letters, you lose
      if(wrongGuess === 6){
        window.alert("Sorry you lost!");
        var playAgain = confirm("Want to play again?");
        if(playAgain == true){
          newGame();
        }
      }
    }

    function init(){
      printsetDash();
    }
}
window.onload = init;