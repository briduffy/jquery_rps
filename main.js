$(document).ready(function() {

  var userChoice = $('#userChoice')
  var computerChoice = $('#computerChoice')
  var gameResult = $('#gameResult')
  var options = ['rock', 'paper', 'scissors']
  var userScore = 0;
  var computerScore = 0;
  var tieScore = 0;

  function userChoice (e) {
    userChoice = e.target.id
    userChoice.src = userChoice + '.jpg'
    userChoice.className = 'selected'
    computerChoice = computerChoice()
    computerChoice.src = computerChoice + '.jpg'
    computerChoice.className = 'selected'
    gameResult = compare()
    score[result]++
    render()
  }


  function computerChoice(){
    computerChoice = Math.floor(Math.random() * 3)
    if (computerChoice === 0){
      computerChoice = 'rock'
    }
    else if (computerChoice === 1){
      computerChoice = 'paper'
    }
    else {
      computerChoice = 'scissors'
    }
  }

  function compare(){
    var gameResult
    
    if (userChoice === computerChoice) {
      return 'tie'
    
    switch(userChoice) {
      case 'rock':
        return computerChoice === 'paper' ? 'lose' : 'win'
      case 'paper':
        return computerChoice === 'scissors' ? 'lose' : 'win'
      case 'scissors':
        return computerChoice === 'rock' ? 'lose' : 'win'
      default:
        return
    }
  }

  function render() {
    userScore.innerHTML = 'Wins: ' + score.userScore
    computerScore.innerHTML = 'Losses: ' + score.computerScore
    tieScore.innerHTML = 'Ties: ' + score.tie
  }

  for (var i = 0; i < computerChoice; i++) {
    options[i].addEventListener('click', userChoice)
  };
};
});