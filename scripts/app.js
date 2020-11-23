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

  let score = 0

  // * Timer variables
  let obstacleTimerId = null
  const timerId = null

  // * SOUNDS
  // * Background sound of yellow brick road and home sounds of theres no place like home. // * Maybe a witches cackle too if there is time
  // const audio = document.getElementById('audio')

  // function playBackgroundAudio() {
  //   audio.src = 'assets/theres-no-place-like-home.wav'
  //   audio.play()
  // }

  // audio.addEventListener('keyUp', playBackgroundAudio)



  // * Make a grid

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
        getDorothyHome(dorothyIsHome)
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

  // ! DOROTHY LIVES

  // let lives = 3

  // //lives dorthothy has 
  // const dorothyLifeOne = document.querySelector('body > div > div.lives > div:nth-child(2)')
  // const dorothyLifeTwo = document.querySelector('body > div > div.lives > div:nth-child(3)')
  // const dorothyLifeThree = document.querySelector('body > div > div.lives > div:nth-child(4)')
  // const dorothyLives = [dorothyLifeOne, dorothyLifeTwo, dorothyLifeThree]

  // // How many Dorothy's are safe
  // const safeDorothyOne = document.querySelector('body > div > div.lives > div.safe-dorothy > div:nth-child(2)')
  // const safeDorothyTwo = document.querySelector('body > div > div.lives > div.safe-dorothy > div:nth-child(3)')
  // const safeDorothyThree = document.querySelector('body > div > div.lives > div.safe-dorothy > div:nth-child(4)')
  // const safeDorothyThree = document.querySelector('body > div > div.lives > div.safe-dorothy > div:nth-child(5)')
  

  // ! DOROTHY'S HOME
  // * Add Home to grid
  function addHome(position) {
    cells[position].classList.add(homeClass)
  }

  // ? When can this be implemented?
  // // * Remove Home from the grid
  // function removeHome(position) {
  //   cells[position].classList.remove(homeClass)
  // }

  // ! DOROTHY LANDING ON HOME 
  
  const dorothyIsHome = true
  
  function getDorothyHome() {
    if (dorothyPosition === homePositionOne) {
      console.log(dorothyIsHome)
      return dorothyIsHome
    } if (dorothyPosition === homePositionTwo) {
      console.log(dorothyIsHome)
      return dorothyIsHome
    } if (dorothyPosition === homePositionThree) {
      console.log(dorothyIsHome)
      return dorothyIsHome
    } if (dorothyPosition === homePositionFour) {
      console.log(dorothyIsHome)
      return dorothyIsHome
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
    if (witchPositionOne > 58) {
      cells[witchPositionOne].classList.remove(witchClass)
      witchPositionOne = 50
    } if (witchPositionOne < 50) {
      cells[witchPositionOne].classList.remove(witchClass)
      witchPositionOne += 1
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
      witchPositionTwo = 68
    } if (witchPositionTwo > 68) {
      cells[witchPositionTwo].classList.remove(witchClass)
      witchPositionTwo -= 1
      cells[witchPositionTwo].classList.add(witchClass) 
    } else if (cells[dorothyPosition] === cells[witchPositionTwo]) {
      gameOver()
    }
  }

  function moveWitchThree() {
    cells[witchPositionThree].classList.remove(witchClass)
    witchPositionThree -= 1
    cells[witchPositionThree].classList.add(witchClass)
    if (witchPositionThree > 78) {
      cells[witchPositionThree].classList.remove(witchClass)
      witchPositionThree = 70
    } if (witchPositionThree < 70) {
      cells[witchPositionThree].classList.remove(witchClass)
      witchPositionThree += 1
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
    } if (witchPositionFour > 89) {
      cells[witchPositionFour].classList.remove(witchClass)
      witchPositionFour -= 1
      cells[witchPositionFour].classList.add(witchClass) 
    } else if (cells[dorothyPosition] === cells[witchPositionFour]) {
      gameOver()
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
    } if (logPositionOne > 18) {
      cells[logPositionOne].classList.remove(logClass)
      logPositionOne -= 1
      cells[logPositionOne].classList.add(logClass) 
    } else if (cells[dorothyPosition] === cells[logPositionOne]) {
      console.log('Dorothy on log')
    }
  }

  function moveLogTwo() {
    cells[logPositionTwo].classList.remove(logClass)
    logPositionTwo += 1
    cells[logPositionTwo].classList.add(logClass)
    if (logPositionTwo < 12) {
      cells[logPositionTwo].classList.remove(logClass)
      logPositionTwo = 19
    } if (logPositionTwo > 19) {
      cells[logPositionTwo].classList.remove(logClass)
      logPositionTwo -= 1
      cells[logPositionTwo].classList.add(logClass) 
    } else if (cells[dorothyPosition] === cells[logPositionTwo]) {
      console.log('Dorothy on log')
    }
  }

  function moveLogThree() {
    cells[logPositionThree].classList.remove(logClass)
    logPositionThree -= 1
    cells[logPositionThree].classList.add(logClass)
    if (logPositionThree > 28) {
      cells[logPositionThree].classList.remove(logClass)
      logPositionThree = 23
    } if (logPositionThree < 23) {
      cells[logPositionThree].classList.remove(logClass)
      logPositionThree += 1
      cells[logPositionThree].classList.add(logClass) 
    } else if (cells[dorothyPosition] === cells[logPositionThree]) {
      console.log('Dorothy on log')
    }
  }

  function moveLogFour() {
    cells[logPositionFour].classList.remove(logClass)
    logPositionFour -= 1
    cells[logPositionFour].classList.add(logClass)
    if (logPositionFour > 27) {
      cells[logPositionFour].classList.remove(logClass)
      logPositionFour = 22
    } if (logPositionFour < 22) {
      cells[logPositionFour].classList.remove(logClass)
      logPositionFour += 1
      cells[logPositionFour].classList.add(logClass) 
    } else if (cells[dorothyPosition] === cells[logPositionFour]) {
      console.log('Dorothy on log')
    }
  }

  function moveLogFive() {
    cells[logPositionFive].classList.remove(logClass)
    logPositionFive -= 1
    cells[logPositionFive].classList.add(logClass)
    if (logPositionFive > 26) {
      cells[logPositionFive].classList.remove(logClass)
      logPositionFive = 21
    } if (logPositionFive < 21) {
      cells[logPositionFive].classList.remove(logClass)
      logPositionFive += 1
      cells[logPositionFive].classList.add(logClass) 
    } else if (cells[dorothyPosition] === cells[logPositionFive]) {
      console.log('Dorothy on log')
    }
  }

  function moveLogSix() {
    cells[logPositionSix].classList.remove(logClass)
    logPositionSix -= 1
    cells[logPositionSix].classList.add(logClass)
    if (logPositionSix > 25) {
      cells[logPositionSix].classList.remove(logClass)
      logPositionSix = 20
    } if (logPositionSix < 20) {
      cells[logPositionSix].classList.remove(logClass)
      logPositionSix += 1
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
    } if (logPositionSeven > 37) {
      cells[logPositionSeven].classList.remove(logClass)
      logPositionSeven -= 1
      cells[logPositionSeven].classList.add(logClass) 
    } else if (cells[dorothyPosition] === cells[logPositionSeven]) {
      console.log('Dorothy on log')
    }
  }

  function moveLogEight() {
    cells[logPositionEight].classList.remove(logClass)
    logPositionEight += 1
    cells[logPositionEight].classList.add(logClass)
    if (logPositionEight < 32) {
      cells[logPositionEight].classList.remove(logClass)
      logPositionEight = 38
    } if (logPositionEight > 38) {
      cells[logPositionEight].classList.remove(logClass)
      logPositionEight -= 1
      cells[logPositionEight].classList.add(logClass) 
    } else if (cells[dorothyPosition] === cells[logPositionEight]) {
      console.log('Dorothy on log')
    }
  }

  function moveLogNine() {
    cells[logPositionNine].classList.remove(logClass)
    logPositionNine += 1
    cells[logPositionNine].classList.add(logClass)
    if (logPositionNine < 33) {
      cells[logPositionNine].classList.remove(logClass)
      logPositionNine = 39
    } if (logPositionNine > 39) {
      cells[logPositionNine].classList.remove(logClass)
      logPositionNine -= 1
      cells[logPositionNine].classList.add(logClass) 
    } else if (cells[dorothyPosition] === cells[logPositionNine]) {
      console.log('Dorothy on log')
    }
  }

  // ! SCORING

  function handleDorothyScore() {
    if (getDorothyHome === true) {
      score += 100
      removeDorothy(event.target.dataset.index)
    }
    scoreDisplay.textContent = score
  }
  

  // ! GAME OVER

  function gameOver() {
    clearInterval(timerId)
    removeDorothy(dorothyPosition)
    alert('Game Over')
  }

  // ! EVENT LISTENERS

  document.addEventListener('keyup', handleKeyUp)

  createGrid(dorothyPosition)

  addHome(homePositionOne)
  addHome(homePositionTwo)
  addHome(homePositionThree)
  addHome(homePositionFour)

  addWitch(witchPositionOne)
  addWitch(witchPositionTwo)
  addWitch(witchPositionThree)
  addWitch(witchPositionFour)

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

  cells.forEach(cell => cell.addEventListener('keyUp', handleDorothyScore))
}

window.addEventListener('DOMContentLoaded', init)