const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper' || userInput === 'bomb'){
    return userInput;
  } else if (userInput === 'spock' || userInput === 'lizard'){
    console.log('Sorry, Sheldon, we are not playing Rock, Paper, Scissors, Lizard, Spock.');
  } else {
    console.log('That is not a valid option. Please choose rock, paper, or scissors.');
  }
};

//getUserChoice('Lizard');

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber){
    case 0:
      return 'rock';
    case 1:
      return  'paper';
    case 2:
      return 'scissors';
  }
}
//console.log(getComputerChoice());


/*
const sum = (firstParam, secondParam)
*/

const determineWinner = (userChoice, computerChoice) => {
  //const userChoice = getUserChoice();
  //const computerChoice = getComputerChoice();
  if (userChoice === computerChoice){
    return 'Tie!';
  } else if (userChoice === 'rock') {
    if (computerChoice === 'paper'){
      return 'Computer Won!';
    } else {
      return 'User Won!';
    }
  } else if (userChoice === 'paper'){
    if (computerChoice === 'scissors'){
      return 'Computer Won!';
    } else {
      return 'User Won!';
    }
  } else if (userChoice === 'scissors'){
    if (computerChoice === 'rock'){
      return 'Computer Won!';
    } else {
      return 'User Won!';
    }
  } else if(userChoice === 'bomb'){
      return 'User Won!'
  }
}


/*
console.log(determineWinner('paper', 'scissors')); // prints something like 'The computer won!'
console.log(determineWinner('paper', 'paper')); // prints something like 'The game is a tie!'
console.log(determineWinner('paper', 'rock')); // prints something like 'The user won!'
*/


const playGame = () => {
  const userChoice = getUserChoice('fred');
  const computerChoice = getComputerChoice();

  console.log('User chose ' + userChoice + ' and computer chose ' + computerChoice + '.');

  console.log(determineWinner(userChoice, computerChoice));
}

playGame();

