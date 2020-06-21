const weapons = {
    rock: ['scissors', 'lizard'],
    paper: ['rock', 'spock'],
    scissors: ['paper', 'lizard'],
    lizard: ['spock', 'paper'],
    spock: ['scissors', 'rock'],
    nuke: ['rock', 'paper', 'scissors', 'lizard', 'spock']
  }
  
  function randomWeapon() {
    const weaponChoices = Object.keys(weapons);
    return weaponChoices[Math.floor(Math.random()*weaponChoices.length)];
  }
  
  const playerChoice = randomWeapon();
  const aiChoice = randomWeapon();
  
  console.log(`Player chooses: ${playerChoice}`);
  console.log(`Computer chooses: ${aiChoice}`);
  
  if (aiChoice === playerChoice) {
    console.log('Draw!');
  } else {
    console.log(weapons[aiChoice].includes(playerChoice) ? 'Computer wins!' : 'Player wins!');
  }