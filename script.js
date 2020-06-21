function game() {
    const weapons = {
        rock: ['scissors', 'lizard'],
        paper: ['rock', 'spock'],
        scissors: ['paper', 'lizard']
        //lizard: ['spock', 'paper'],
        //pock: ['scissors', 'rock'],
        //nuke: ['rock', 'paper', 'scissors', 'lizard', 'spock']
    } // Here are the weapons the player and computer can choose from.
      
    function randomWeapon() {
        const weaponChoices = Object.keys(weapons);
        return weaponChoices[Math.floor(Math.random()*weaponChoices.length)];
    } // This function picks a weapon from the weapons list.
    
    function playerPrompt() {
        let prompt = window.prompt("Enter 'rock','paper' or 'scissors':");
        if (!Object.keys(weapons).includes(prompt)) {
            prompt = window.prompt("Please enter 'rock', 'paper' or 'scissors' only:");
        }
        return prompt;
    } // This function should prompt the player for a weapon choice and store it.

    let playerChoice = playerPrompt(); // Invokes the playerPrompt function for a player to choose a weapon.
    const aiChoice = randomWeapon(); // Invokes the randomWeapon function for computer to choose a weapon.
      
    function determineWinner (){
        console.log(`Player chooses: ${playerChoice}`);
        console.log(`Computer chooses: ${aiChoice}`);
        if (aiChoice === playerChoice) {
            return 'Draw!';
            } else {
            return weapons[aiChoice].includes(playerChoice) ? 'Computer wins!' : 'Player wins!';
        }
    } // This function figures out who won.

    return determineWinner();
}

console.log(game());