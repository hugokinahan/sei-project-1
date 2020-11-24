function init() {

  // ! VARIABLES
  // * DOM VARIABLES
  const grid = document.querySelector('.grid')
  const cells = []
  const scoreDisplay = document.querySelector('#score-display')
  
  const width = 10
  const cellCount = width * width

  const dorothyClass = 'dorothy'
  let dorothyPosition = 94

  const homeClass = 'home'
  const homePositionOne = 1
  const homePositionTwo = 3
  const homePositionThree = 6
  const homePositionFour = 8

  const witchClass = 'witch'
  let witchPositionOne = 59
  let witchPositionTwo = 60
  let witchPositionThree = 79
  let witchPositionFour = 80
  let witchPositionFive = 82

  const tinmanClass = 'tinman'
  const tinmanBonusPosition = Math.floor(Math.random() * cellCount)

  const lionClass = 'lion'
  const lionBonusPosition = Math.floor(Math.random() * cellCount)

  const scarecrowClass = 'scarecrow'
  const scarecrowBonusPosition = Math.floor(Math.random() * cellCount)

  let score = 0

  // * TIMER VARIABLES
  const obstacleTimerId = null
  const timerId = null





  // ! SOUNDS
  // * Background sound of yellow brick road and home sounds of theres no place like home. // * Maybe a witches cackle too if there is time

  // ! MAKE A GRID

  function createGrid(startingPosition) {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      cell.textContent = i
      grid.appendChild(cell)
      cells.push(cell)
    }
    addDorothy(startingPosition)
  }

  // ! DOROTHY
  // * Add Dorothy to grid
  function addDorothy(position) {
    cells[position].classList.add(dorothyClass)
  }

  // * Remove Dorothy from the grid
  function removeDorothy(position) {
    cells[position].classList.remove(dorothyClass)
  }

  // * Move Dorothy
  function handleKeyUp(event) {
    removeDorothy(dorothyPosition)
  
    const horizontalPosition = dorothyPosition % width
    const verticalPosition = Math.floor(dorothyPosition / width)

    switch (event.keyCode) {
      case 39: //arrow right
      case 68: //d key
        if (horizontalPosition < width - 1) dorothyPosition++
        break
      case 37: //arrow left
      case 65: //a key
        if (horizontalPosition > 0) dorothyPosition--
        break
      case 38: //arrow up
      case 87: //w key
        if (verticalPosition > 0) dorothyPosition -= width
        getDorothyHome()
        break
      case 40: //arrow down
      case 83: //s key
        if (verticalPosition < width - 1) dorothyPosition += width
        break
      default:
        console.log('INVALID KEY')
    }

    addDorothy(dorothyPosition)
  }

  // ! ADDING BONUS CHARACTERS

  // * Add Tinman to grid
  function addTinman(position) {
    cells[position].classList.add(tinmanClass)
  }
  
  // * Add Lion to grid
  function addLion(position) {
    cells[position].classList.add(lionClass)
  }
  
  // * Add Scarecrow to grid
  function addScarecrow(position) {
    cells[position].classList.add(scarecrowClass)
  }

  // ! FOREST AREA 

  const forestArea = cellCount 
  console.log('In the forest area', forestArea)


  // ! DOROTHY LIVES

  let lives = 3

  // * lives dortothy has 
  const dorothyLifeOne = document.querySelector('body > div.grid-wrapper > div.lives > div:nth-child(2)')
  const dorothyLifeTwo = document.querySelector('body > div.grid-wrapper > div.lives > div:nth-child(3)')
  const dorothyLifeThree = document.querySelector('body > div.grid-wrapper > div.lives > div:nth-child(4)')

  const dorothyLives = [dorothyLifeOne, dorothyLifeTwo, dorothyLifeThree]

  // How many Dorothy's are safe
  const safeDorothyOne = document.querySelector('body > div.grid-wrapper > div.lives > div.safe-dorothy > div:nth-child(2)')

  const safeDorothyTwo = document.querySelector('body > div.grid-wrapper > div.lives > div.safe-dorothy > div:nth-child(3)')
  const safeDorothyThree = document.querySelector('body > div.grid-wrapper > div.lives > div.safe-dorothy > div:nth-child(4)')
  const safeDorothyFour = document.querySelector('body > div.grid-wrapper > div.lives > div.safe-dorothy > div:nth-child(5)')
  
  const safeDorothy = [safeDorothyOne, safeDorothyTwo, safeDorothyThree, safeDorothyFour]
  console.log(safeDorothy)

  // ! DOROTHY'S HOME
  // * Add Home to grid
  function addHome(position) {
    cells[position].classList.add(homeClass)
  }

  // ! DOROTHY LANDING ON HOME 
  
  function getDorothyHome() {
    if (dorothyPosition === homePositionOne) {
      addDorothy(dorothyPosition = 94)
      return scoreDisplay.innerHTML = score += 100
    } if (dorothyPosition === homePositionTwo) {
      addDorothy(dorothyPosition = 94)
      return scoreDisplay.innerHTML = score += 100
    } if (dorothyPosition === homePositionThree) {
      addDorothy(dorothyPosition = 94)
      return scoreDisplay.innerHTML = score += 100
    } if (dorothyPosition === homePositionFour) {
      addDorothy(dorothyPosition = 94)
      return scoreDisplay.innerHTML = score += 100
    } 
  }


  // ! WITCHES CROSSING

  // * Add Witch to grid
  function addWitch(position) {
    cells[position].classList.add(witchClass)
  }

  // * Move Witch across grid

  function moveWitchOne() {
    cells[witchPositionOne].classList.remove(witchClass)
    witchPositionOne -= 1
    cells[witchPositionOne].classList.add(witchClass)
    if (witchPositionOne > 59) {
      cells[witchPositionOne].classList.remove(witchClass)
      witchPositionOne === 50
    } 
    if (witchPositionOne < 50) {
      cells[witchPositionOne].classList.remove(witchClass)
      witchPositionOne = 59
      cells[witchPositionOne].classList.add(witchClass) 
    } else if (cells[dorothyPosition] === cells[witchPositionOne]) {
      gameOver()
    }
  }


  function moveWitchTwo() {
    cells[witchPositionTwo].classList.remove(witchClass)
    witchPositionTwo += 1
    cells[witchPositionTwo].classList.add(witchClass)
    if (witchPositionTwo < 61) {
      cells[witchPositionTwo].classList.remove(witchClass)
      witchPositionTwo = 69
    } if (witchPositionTwo === 70) {
      cells[witchPositionTwo].classList.remove(witchClass)
      witchPositionTwo = 60
      cells[witchPositionTwo].classList.add(witchClass) 
    } else if (cells[dorothyPosition] === cells[witchPositionTwo]) {
      gameOver()
    }
  }

  function moveWitchThree() {
    cells[witchPositionThree].classList.remove(witchClass)
    witchPositionThree -= 1
    cells[witchPositionThree].classList.add(witchClass)
    if (witchPositionThree > 79) {
      cells[witchPositionThree].classList.remove(witchClass)
      witchPositionThree = 70
    } if (witchPositionThree < 70) {
      cells[witchPositionThree].classList.remove(witchClass)
      witchPositionThree = 79
      cells[witchPositionThree].classList.add(witchClass) 
    } else if (cells[dorothyPosition] === cells[witchPositionThree]) {
      gameOver()
    }
  }

  function moveWitchFour() {
    cells[witchPositionFour].classList.remove(witchClass)
    witchPositionFour += 1
    cells[witchPositionFour].classList.add(witchClass)
    if (witchPositionFour < 81) {
      cells[witchPositionFour].classList.remove(witchClass)
      witchPositionFour = 89
    } if (witchPositionFour === 90) {
      cells[witchPositionFour].classList.remove(witchClass)
      witchPositionFour = 80
      cells[witchPositionFour].classList.add(witchClass) 
    } else if (cells[dorothyPosition] === cells[witchPositionFour]) {
      gameOver()
    }
  }

  function moveWitchFive() {
    cells[witchPositionFive].classList.remove(witchClass)
    witchPositionFive += 1
    cells[witchPositionFive].classList.add(witchClass)
    if (witchPositionFive === 82) {
      cells[witchPositionFive].classList.remove(witchClass)
      witchPositionFive = 89
    } if (witchPositionFive === 90) {
      cells[witchPositionFive].classList.remove(witchClass)
      witchPositionFive = 80
      cells[witchPositionFive].classList.add(witchClass) 
    } else if (cells[dorothyPosition] === cells[witchPositionFive]) {
      gameOver()
    }
  }

  // ! LOSING A LIFE

  function loseLife() {
    removeDorothy()
    addDorothy()
    setTimeout(wait, 500)
    function wait() {
      removeDorothy()
      dorothyLives[lives - 1]
      lives--
      // dorothyPosition = 94
      // if (lives === -1) {
      //   reset()
      // }
    }
  }

  // ! LOGS CROSSING

  // * LOG VARIABLES 
  const logClass = 'log'
  let logPositionOne = 10
  let logPositionTwo = 12
  let logPositionThree = 29
  let logPositionFour = 27
  let logPositionFive = 25
  let logPositionSix = 23
  let logPositionSeven = 30
  let logPositionEight = 32
  let logPositionNine = 34

  // * Add Log to grid
  function addLog(position) {
    cells[position].classList.add(logClass)
  }

  // * Move Log across grid

  function moveLogOne() {
    cells[logPositionOne].classList.remove(logClass)
    logPositionOne += 1
    cells[logPositionOne].classList.add(logClass)
    if (logPositionOne < 11) {
      cells[logPositionOne].classList.remove(logClass)
      logPositionOne = 18
    } if (logPositionOne === 20) {
      cells[logPositionOne].classList.remove(logClass)
      logPositionOne = 10
      cells[logPositionOne].classList.add(logClass) 
    } else if (cells[dorothyPosition] === cells[logPositionOne]) {
      console.log('Dorothy on log')
    }
  }

  function moveLogTwo() {
    cells[logPositionTwo].classList.remove(logClass)
    logPositionTwo += 1
    cells[logPositionTwo].classList.add(logClass)
    // if (logPositionTwo < 12) {
    //   cells[logPositionTwo].classList.remove(logClass)
    //   logPositionTwo = 19
    if (logPositionTwo === 20) {
      cells[logPositionTwo].classList.remove(logClass)
      logPositionTwo = 10
      cells[logPositionTwo].classList.add(logClass) 
    } else if (cells[dorothyPosition] === cells[logPositionTwo]) {
      console.log('Dorothy on log')
    }
  }

  function moveLogThree() {
    cells[logPositionThree].classList.remove(logClass)
    logPositionThree -= 1
    cells[logPositionThree].classList.add(logClass)
    if (logPositionThree > 29) {
      cells[logPositionThree].classList.remove(logClass)
      logPositionThree = 20
    } if (logPositionThree < 20) {
      cells[logPositionThree].classList.remove(logClass)
      logPositionThree = 29
      cells[logPositionThree].classList.add(logClass) 
    } else if (cells[dorothyPosition] === cells[logPositionThree]) {
      console.log('Dorothy on log')
    }
  }


  function moveLogFour() {
    cells[logPositionFour].classList.remove(logClass)
    logPositionFour -= 1
    cells[logPositionFour].classList.add(logClass)
    if (logPositionFour > 29) {
      cells[logPositionFour].classList.remove(logClass)
      logPositionFour = 20
    } if (logPositionFour === 20) {
      cells[logPositionFour].classList.remove(logClass)
      logPositionFour = 29
      cells[logPositionFour].classList.add(logClass) 
    } else if (cells[dorothyPosition] === cells[logPositionFour]) {
      console.log('Dorothy on log')
    }
  }

  function moveLogFive() {
    cells[logPositionFive].classList.remove(logClass)
    logPositionFive -= 1
    cells[logPositionFive].classList.add(logClass)
    if (logPositionFive > 29) {
      cells[logPositionFive].classList.remove(logClass)
      logPositionFive = 20
    } if (logPositionFive === 20) {
      cells[logPositionFive].classList.remove(logClass)
      logPositionFive = 29
      cells[logPositionFive].classList.add(logClass) 
    } else if (cells[dorothyPosition] === cells[logPositionFive]) {
      console.log('Dorothy on log')
    }
  }

  function moveLogSix() {
    cells[logPositionSix].classList.remove(logClass)
    logPositionSix -= 1
    cells[logPositionSix].classList.add(logClass)
    if (logPositionSix > 29) {
      cells[logPositionSix].classList.remove(logClass)
      logPositionSix = 20
    } if (logPositionSix === 20) {
      cells[logPositionSix].classList.remove(logClass)
      logPositionSix = 29
      cells[logPositionSix].classList.add(logClass) 
    } else if (cells[dorothyPosition] === cells[logPositionSix]) {
      console.log('Dorothy on log')
    }
  }

  function moveLogSeven() {
    cells[logPositionSeven].classList.remove(logClass)
    logPositionSeven += 1
    cells[logPositionSeven].classList.add(logClass)
    if (logPositionSeven < 31) {
      cells[logPositionSeven].classList.remove(logClass)
      logPositionSeven = 37
    } if (logPositionSeven === 40) {
      cells[logPositionSeven].classList.remove(logClass)
      logPositionSeven = 30
      cells[logPositionSeven].classList.add(logClass) 
    } else if (cells[dorothyPosition] === cells[logPositionSeven]) {
      console.log('Dorothy on log')
    }
  }

  function moveLogEight() {
    cells[logPositionEight].classList.remove(logClass)
    logPositionEight += 1
    cells[logPositionEight].classList.add(logClass)
    if (logPositionEight < 31) {
      cells[logPositionEight].classList.remove(logClass)
      logPositionEight = 38
    } if (logPositionEight === 40) {
      cells[logPositionEight].classList.remove(logClass)
      logPositionEight = 30
      cells[logPositionEight].classList.add(logClass) 
    } else if (cells[dorothyPosition] === cells[logPositionEight]) {
      console.log('Dorothy on log')
    }
  }

  function moveLogNine() {
    cells[logPositionNine].classList.remove(logClass)
    logPositionNine += 1
    cells[logPositionNine].classList.add(logClass)
    if (logPositionNine < 31) {
      cells[logPositionNine].classList.remove(logClass)
      logPositionNine = 39
    } if (logPositionNine === 40) {
      cells[logPositionNine].classList.remove(logClass)
      logPositionNine = 30
      cells[logPositionNine].classList.add(logClass) 
    } else if (cells[dorothyPosition] === cells[logPositionNine]) {
      console.log('Dorothy on log')
    }
  }

  // ! SCORING

  function handleDorothyScore() {
    if (dorothyPosition === homePositionOne) {
      score = score += 100
      scoreDisplay.innerHTML = score
      removeDorothy(dorothyPosition = 94)
    }
  }
  

  // ! GAME OVER

  function gameOver() {
    clearInterval(timerId)
    removeDorothy(dorothyPosition)
    addDorothy(dorothyPosition = 94)
    alert('You scored ' + score + ' points!')
  }

  // ! EVENT LISTENERS

  document.addEventListener('keyup', handleKeyUp)

  createGrid(dorothyPosition)


  handleDorothyScore()

  addHome(homePositionOne)
  addHome(homePositionTwo)
  addHome(homePositionThree)
  addHome(homePositionFour)

  addTinman(tinmanBonusPosition)
  addLion(lionBonusPosition)
  addScarecrow(scarecrowBonusPosition)

  addWitch(witchPositionOne)
  addWitch(witchPositionTwo)
  addWitch(witchPositionThree)
  addWitch(witchPositionFour)
  addWitch(witchPositionFive)

  addLog(logPositionOne)
  addLog(logPositionTwo)
  addLog(logPositionThree)
  addLog(logPositionFour)
  addLog(logPositionFive)
  addLog(logPositionSix)
  addLog(logPositionSeven)
  addLog(logPositionEight)
  addLog(logPositionNine)

  setInterval(function() {
    moveWitchOne(witchPositionOne) 
    moveWitchTwo(witchPositionTwo)
    moveWitchThree(witchPositionThree)
    moveWitchFour(witchPositionFour)
    moveWitchFive
  }, 1000)

  setInterval(function() {
    moveLogOne(logPositionOne) 
    moveLogTwo(logPositionTwo)
    moveLogThree(logPositionThree)
    moveLogFour(logPositionFour)
    moveLogFive(logPositionFive)
    moveLogSix(logPositionSix)
    moveLogSeven(logPositionSeven)
    moveLogEight(logPositionEight)
    moveLogNine(logPositionNine)
  }, 1000)  

  // cells.forEach(cell => cell.addEventListener('keyUp', handleDorothyScore))

  window.addEventListener('keydown', function(event) {
    // space and arrow keys
    if ([32, 37, 38, 39, 40].indexOf(event.keyCode) > -1) {
      event.preventDefault()
    }
  }, false)
}

window.addEventListener('DOMContentLoaded', init)