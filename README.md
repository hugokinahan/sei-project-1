# sei-project-1: Vanilla JavaScript Grid Based Game

# Brief

Design a grid-based game using HTML, CSS, and JavaScript learnt in the first three weeks of the course. The game should be playable for one player and the player must be able to win and lose. Timeframe: 1 week. 

# Deployment

# Motivation

This project was my first ever JavaScript project, so replicating a relatively staright-forward classic arcade game like 'frogger' would be a good place to start. I chose The Wizard Of Oz as a theme as I believe it reflected a similar story line to that of 'frogger' with Dorothy trying to make it home akin to the frog attempting to make it back to its lilypad. With Dorothy under threat from the Wicked Witch of the West, the aim of the game is to make it across the Wicked Witch's forest and cross the river to bring Dorothy home. 'There's no place like home...'. Along the way you can pick up trusty companions, the Scarecrow, Tinman and the Lion to help build your score. 

# Features

MVP took four days to reach, and after I was happy with the functionality of the game I decided to move on to some bous features. Most notably the player is able to collect an extra 50 bonus points by collecting other characters mentioned above. These reset everytime Dorothy accomplishes her mission of reaching the other side. I also added a timer and a scoreboard to put some pressure on the player and to make the game a little more difficult. The very last thing to add was some audio to boost  the overall experience of the game.

# Screenshots


# Frameworks used

- Languages
- JavaScript, CSS3, HTML5
- Typefaces
- Google Fonts
- Text Editor
- VS Code
- Browser
- Chrome
- Version control
- Git and GitHub

# Challenges

There were many challenging parts to my project. I had trouble with the movement of Witches and Logs as obstacles, especially in getting them to move continuosly accross the screen without stopping when they reached the side of the grid. I did manage to accomplish this, but in quite a long-winded fashion and in hindsight using an Class Object would have made things easier. 

However, the most challenging aspect of my project was formulating the logic for when Dorothy is safe on a log in the river, meaning she should not die when on a log and in the waterArea (the blue area on the grid). As I already had code implemented instructing that when Dorothy is in the waterArea she should lose a life. 

To get around this I put the log positions into an Array Object and used the checkWaterDanger function to instruct that when the waterArea array .includes Dorothy on a log she is safe and if she is not on a log but is in the waterArea, the player should lose a life.

```const logClass = 'log'
const logPositionOne = {
  position: 15
}
const logPositionTwo = {
  position: 17
}
const logPositionThree = {
  position: 29
}
const logPositionFour = {
  position: 27
}
const logPositionFive = {
  position: 25
}
const logPositionSix = {
  position: 23
}
const logPositionSeven = {
  position: 31
}
const logPositionEight = {
  position: 33
}
const logPositionNine = {
  position: 35
}
const logs = [logPositionOne, logPositionTwo, logPositionThree, logPositionFour, logPositionFive, logPositionSix, logPositionSeven, logPositionEight, logPositionNine]
```
```  function checkWaterDanger() {
if (waterArea.includes(cells[dorothyPosition] ) ) {
  if (logs.map(item => item.position).includes(dorothyPosition)) {
    console.log('I have arrived on a Log and I am happy and safe')
  } else {
    console.log('I should be dead')
    waterSound.play()
    return loseLife()
  }
}
}
```

# Wins



# Future Features




