// Function to get the user's choice.
const getUserChoice = userInput => {
  // Convert input to lowercase.
  userInput = userInput.toLowerCase();
  if (userInput === ('rock') || userInput ==='paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput; 
    }
  else {
    return 'Invalid input. Please select Rock, Paper, or Scissors.';
  }
}

// Function to get the computer's choice.
const getComputerChoice = () => {
  // Generate a random number between 0 and 2.
  randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return 'rock';
        break;
      case 1:
        return 'paper';
        break;
      case 2:
        return 'scissors';
        break;
    }
}

// Function to determine the winner based on user and computers choices.
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'It\'s a draw!';
  }

  else if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Oh no! You lose!';
    }
    else {
      return 'Congratulations! You win!';
    }
  }

  else if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Oh no! You lose!';
    }
    else {
      return 'Congratulations! You win!';
       }
    }

    else if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Oh no! You lose!';
    }
    else {
      return 'Congratulations! You win!';
       }
    }
    // Cheat code for user typing 'bomb'.
    else if (userChoice === 'bomb') {
      return 'Congratulations! You win!';
    }
}

// Main function to play the game.
const playGame = () => {
  // User selects 'bomb'
  const userChoice = getUserChoice('rock');
  // Computer makes a random choice.
  const computerChoice = getComputerChoice();
  console.log(`You chose ${userChoice}.`);
  console.log(`The computer has chose ${computerChoice}.`);
  // Determine who is the winner then log.
  console.log(determineWinner(userChoice, computerChoice));
}

// Run the game.
playGame();

