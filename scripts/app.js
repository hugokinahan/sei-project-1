function init() {

  // ! VARIABLES
  
  const grid = document.querySelector('.grid')
  const cells = []
  const scoreDisplay = document.querySelector('#score-display')
  const timerDisplay = document.querySelector('#timer-display')
  const startButton = document.querySelector('button')
  
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
  let witchPositionTwelve = 57
  let witchPositionTwo = 60
  let witchPositionEight = 62
  let witchPositionNine = 64
  let witchPositionTen = 66
  let witchPositionThree = 79
  let witchPositionEleven = 77
  let witchPositionFour = 80
  let witchPositionFive = 82
  let witchPositionSix = 84
  let witchPositionSeven = 86

  let score = 0

  // ! TIMER 

  function startTimer() {
    let timerId = null
    let count = 60

    timerId = setInterval(() => {
      timerDisplay.innerHTML = count--
      if (count === -2) {
        playerWinsSound.play()
        reset()
        return alert('Time is up! You scored ' + score + ' points!')
      }
    }, 1000)
  }

  // ! START BUTTON 

  function startGame() {
    startTimer()
    playerWinsSound.play()
  }

  // ! SOUNDS

  const homeSound = new Audio('assets/theres-no-place-like-home.wav')
  const gameOverSound = new Audio('assets/cackle3.wav')
  const playerWinsSound = new Audio('assets/follow-the-yellow-brick-road-follow-the-yellow-brick-road-follow-follow-follow-follow-follow-the-yellow-brick-road.wav')
  const bonusSound = new Audio('assets/classic-bonus-points-02-sound-effect-18362427.mp3')

  // ! MAKE A GRID

  function createGrid(startingPosition) {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      // cell.textContent = i
      grid.appendChild(cell)
      cells.push(cell)
    }
    addDorothy(startingPosition)
  }
  createGrid(dorothyPosition)

  // ! FOREST AREA 

  const forestArea = cells.slice(50,90)

  const tinmanClass = 'tinman'
  const tinmanBonusPosition = Math.floor(Math.random() * forestArea.length + 50)

  const lionClass = 'lion'
  const lionBonusPosition = Math.floor(Math.random() * forestArea.length + 50)

  const scarecrowClass = 'scarecrow'
  const scarecrowBonusPosition = Math.floor(Math.random() * forestArea.length + 50)

  // ! WATER AREA

  const waterArea = cells.slice(10,40)

  // ! HOME AREA 

  const homeArea = cells.slice(0,10)

  function checkHomeAreaDanger() {
    if (homeArea.includes(cells[dorothyPosition])) {
      return loseLife()
    } 
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
    scoreDisplay.innerHTML = score += 10
  
    const horizontalPosition = dorothyPosition % width
    const verticalPosition = Math.floor(dorothyPosition / width)

    switch (event.keyCode) {
      case 39: //arrow right
      case 68: //d key
        if (horizontalPosition < width - 1) dorothyPosition++
        getBonusPoints()
        hitWitch()
        
        checkWaterDanger()
        checkHomeAreaDanger()
        break
      case 37: //arrow left
      case 65: //a key
        if (horizontalPosition > 0) dorothyPosition--
        getBonusPoints()
        hitWitch()
        
        checkWaterDanger()
        checkHomeAreaDanger()
        break
      case 38: //arrow up
      case 87: //w key
        if (verticalPosition > 0) dorothyPosition -= width
        getDorothyHome()
        getBonusPoints()
        hitWitch()
      
        checkWaterDanger()
        checkHomeAreaDanger()
        break
      case 40: //arrow down
      case 83: //s key
        if (verticalPosition < width - 1) dorothyPosition += width
        getBonusPoints()
        hitWitch()
        checkWaterDanger()
        checkHomeAreaDanger()
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

  // * Remove Tinman from grid
  function removeTinman(position) {
    cells[position].classList.remove(tinmanClass)
  }
  
  // * Add Lion to grid
  function addLion(position) {
    cells[position].classList.add(lionClass)
  }

  // * Remove Lion from grid
  function removeLion(position) {
    cells[position].classList.remove(lionClass)
  }
  
  // * Add Scarecrow to grid
  function addScarecrow(position) {
    cells[position].classList.add(scarecrowClass)
  }

  // * Remove Scarecrow from grid
  function removeScarecrow(position) {
    cells[position].classList.remove(scarecrowClass)
  }


  // ! DOROTHY LIVES

  let lives = 3

  // * lives dorothy has 
  const dorothyLifeOne = document.querySelector('body > div.grid-wrapper > div.lives > div:nth-child(2) > img')
  const dorothyLifeTwo = document.querySelector('body > div.grid-wrapper > div.lives > div:nth-child(3) > img')
  const dorothyLifeThree = document.querySelector('body > div.grid-wrapper > div.lives > div:nth-child(4) > img')

  const dorothyLives = [dorothyLifeOne, dorothyLifeTwo, dorothyLifeThree]

  // How many Dorothy's are safe
  const safeDorothyOne = document.querySelector('body > div.grid-wrapper > div.lives > div.safe-dorothy > div:nth-child(2)')
  const safeDorothyTwo = document.querySelector('body > div.grid-wrapper > div.lives > div.safe-dorothy > div:nth-child(3)')
  const safeDorothyThree = document.querySelector('body > div.grid-wrapper > div.lives > div.safe-dorothy > div:nth-child(4)')
  const safeDorothyFour = document.querySelector('body > div.grid-wrapper > div.lives > div.safe-dorothy > div:nth-child(5)')
  

  // ! DOROTHY'S HOME
  // * Add Home to grid
  function addHome(position) {
    cells[position].classList.add(homeClass)
  }

  // * Remove Home
  function removeHome(position) {
    cells[position].classList.remove(homeClass)
  }


  // ! DOROTHY LANDING ON HOME 
  
  function getDorothyHome() {
    if (dorothyPosition === homePositionOne) {
      removeHome(homePositionOne)
      addDorothy(dorothyPosition = 1)
      addDorothy(dorothyPosition = 94)
      addTinman(tinmanBonusPosition)
      addLion(lionBonusPosition)
      addScarecrow(scarecrowBonusPosition)
      scoreDisplay.innerHTML = score += 100
      homeSound.play()
      return safeDorothyOne.innerHTML = 'You have returned Dorothy to Home One'
    } if (dorothyPosition === homePositionTwo) {
      addDorothy(dorothyPosition = 3)
      removeHome(homePositionTwo)
      addDorothy(dorothyPosition = 94)
      addTinman(tinmanBonusPosition)
      addLion(lionBonusPosition)
      addScarecrow(scarecrowBonusPosition)
      scoreDisplay.innerHTML = score += 100
      homeSound.play()
      return safeDorothyTwo.innerHTML = 'You have returned Dorothy to Home Two'
    } if (dorothyPosition === homePositionThree) {
      addDorothy(dorothyPosition = 6)
      removeHome(homePositionThree)
      addDorothy(dorothyPosition = 94)
      addTinman(tinmanBonusPosition)
      addLion(lionBonusPosition)
      addScarecrow(scarecrowBonusPosition)
      scoreDisplay.innerHTML = score += 100
      homeSound.play()
      return safeDorothyThree.innerHTML = 'You have returned Dorothy to Home Three'
    } if (dorothyPosition === homePositionFour) {
      addDorothy(dorothyPosition = 8)
      removeHome(homePositionFour)
      addDorothy(dorothyPosition = 94)
      addTinman(tinmanBonusPosition)
      addLion(lionBonusPosition)
      addScarecrow(scarecrowBonusPosition)
      scoreDisplay.innerHTML = score += 100
      homeSound.play()
      return safeDorothyFour.innerHTML = 'You have returned Dorothy to Home Four'
    } 
  }

  // ! DOROTHY LANDING ON BONUS CHARACTERS
  
  function getBonusPoints() {
    if (dorothyPosition === tinmanBonusPosition) {
      bonusSound.play()
      removeTinman(tinmanBonusPosition)
      return scoreDisplay.innerHTML = score += 50
    } if (dorothyPosition === lionBonusPosition) {
      bonusSound.play()
      removeLion(lionBonusPosition)
      return scoreDisplay.innerHTML = score += 50
    } if (dorothyPosition === scarecrowBonusPosition) {
      bonusSound.play()
      removeScarecrow(scarecrowBonusPosition)
      return scoreDisplay.innerHTML = score += 50
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
      witchPositionOne === 49
    } 
    if (witchPositionOne < 50) {
      cells[witchPositionOne].classList.remove(witchClass)
      witchPositionOne = 59
      cells[witchPositionOne].classList.add(witchClass) 
    } else if (cells[dorothyPosition] === cells[witchPositionOne]) {
      loseLife()
    }
  }

  function moveWitchTwelve() {
    cells[witchPositionTwelve].classList.remove(witchClass)
    witchPositionTwelve -= 1
    cells[witchPositionTwelve].classList.add(witchClass)
    if (witchPositionTwelve > 59) {
      cells[witchPositionTwelve].classList.remove(witchClass)
      witchPositionTwelve === 50
    } 
    if (witchPositionTwelve < 50) {
      cells[witchPositionTwelve].classList.remove(witchClass)
      witchPositionTwelve = 59
      cells[witchPositionTwelve].classList.add(witchClass) 
    } else if (cells[dorothyPosition] === cells[witchPositionTwelve]) {
      loseLife()
    }
  }


  function moveWitchTwo() {
    cells[witchPositionTwo].classList.remove(witchClass)
    witchPositionTwo += 1
    cells[witchPositionTwo].classList.add(witchClass)
    if (witchPositionTwo < 61) {
      cells[witchPositionTwo].classList.remove(witchClass)
      witchPositionTwo = 66
    } if (witchPositionTwo === 70) {
      cells[witchPositionTwo].classList.remove(witchClass)
      witchPositionTwo = 60
      cells[witchPositionTwo].classList.add(witchClass) 
    } else if (cells[dorothyPosition] === cells[witchPositionTwo]) {
      loseLife()
    }
  }

  function moveWitchEight() {
    cells[witchPositionEight].classList.remove(witchClass)
    witchPositionEight += 1
    cells[witchPositionEight].classList.add(witchClass)
    if (witchPositionEight < 61) {
      cells[witchPositionEight].classList.remove(witchClass)
      witchPositionEight = 67
    } if (witchPositionEight === 70) {
      cells[witchPositionEight].classList.remove(witchClass)
      witchPositionEight = 60
      cells[witchPositionEight].classList.add(witchClass) 
    } else if (cells[dorothyPosition] === cells[witchPositionEight]) {
      loseLife()
    }
  }

  function moveWitchNine() {
    cells[witchPositionNine].classList.remove(witchClass)
    witchPositionNine += 1
    cells[witchPositionNine].classList.add(witchClass)
    if (witchPositionNine < 61) {
      cells[witchPositionNine].classList.remove(witchClass)
      witchPositionNine = 68
    } if (witchPositionNine === 70) {
      cells[witchPositionNine].classList.remove(witchClass)
      witchPositionNine = 60
      cells[witchPositionNine].classList.add(witchClass) 
    } else if (cells[dorothyPosition] === cells[witchPositionNine]) {
      loseLife()
    }
  }

  function moveWitchTen() {
    cells[witchPositionTen].classList.remove(witchClass)
    witchPositionTen += 1
    cells[witchPositionTen].classList.add(witchClass)
    if (witchPositionTen < 61) {
      cells[witchPositionTen].classList.remove(witchClass)
      witchPositionTen = 69
    } if (witchPositionTen === 70) {
      cells[witchPositionTen].classList.remove(witchClass)
      witchPositionTen = 60
      cells[witchPositionTen].classList.add(witchClass) 
    } else if (cells[dorothyPosition] === cells[witchPositionTen]) {
      loseLife()
    }
  }

  function moveWitchThree() {
    cells[witchPositionThree].classList.remove(witchClass)
    witchPositionThree -= 1
    cells[witchPositionThree].classList.add(witchClass)
    if (witchPositionThree > 79) {
      cells[witchPositionThree].classList.remove(witchClass)
      witchPositionThree = 69
    } if (witchPositionThree < 70) {
      cells[witchPositionThree].classList.remove(witchClass)
      witchPositionThree = 79
      cells[witchPositionThree].classList.add(witchClass) 
    } else if (cells[dorothyPosition] === cells[witchPositionThree]) {
      loseLife()
    }
  }

  function moveWitchEleven() {
    cells[witchPositionEleven].classList.remove(witchClass)
    witchPositionEleven -= 1
    cells[witchPositionEleven].classList.add(witchClass)
    if (witchPositionEleven > 79) {
      cells[witchPositionEleven].classList.remove(witchClass)
      witchPositionEleven = 70
    } if (witchPositionEleven < 70) {
      cells[witchPositionEleven].classList.remove(witchClass)
      witchPositionEleven = 79
      cells[witchPositionEleven].classList.add(witchClass) 
    } else if (cells[dorothyPosition] === cells[witchPositionEleven]) {
      loseLife()
    }
  }


  function moveWitchFour() {
    cells[witchPositionFour].classList.remove(witchClass)
    witchPositionFour += 1
    cells[witchPositionFour].classList.add(witchClass)
    if (witchPositionFour < 81) {
      cells[witchPositionFour].classList.remove(witchClass)
      witchPositionFour = 86
    } if (witchPositionFour === 90) {
      cells[witchPositionFour].classList.remove(witchClass)
      witchPositionFour = 80
      cells[witchPositionFour].classList.add(witchClass) 
    } else if (cells[dorothyPosition] === cells[witchPositionFour]) {
      loseLife()
    }
  }

  function moveWitchFive() {
    cells[witchPositionFive].classList.remove(witchClass)
    witchPositionFive += 1
    cells[witchPositionFive].classList.add(witchClass)
    if (witchPositionFive < 81) {
      cells[witchPositionFive].classList.remove(witchClass)
      witchPositionFive = 87
    } if (witchPositionFive === 90) {
      cells[witchPositionFive].classList.remove(witchClass)
      witchPositionFive = 80
      cells[witchPositionFive].classList.add(witchClass) 
    } else if (cells[dorothyPosition] === cells[witchPositionFive]) {
      loseLife()
    }
  }

  function moveWitchSix() {
    cells[witchPositionSix].classList.remove(witchClass)
    witchPositionSix += 1
    cells[witchPositionSix].classList.add(witchClass)
    if (witchPositionSix < 81) {
      cells[witchPositionSix].classList.remove(witchClass)
      witchPositionSix = 88
    } if (witchPositionSix === 90) {
      cells[witchPositionSix].classList.remove(witchClass)
      witchPositionSix = 80
      cells[witchPositionSix].classList.add(witchClass) 
    } else if (cells[dorothyPosition] === cells[witchPositionSix]) {
      loseLife()
    }
  }

  function moveWitchSeven() {
    cells[witchPositionSeven].classList.remove(witchClass)
    witchPositionSeven += 1
    cells[witchPositionSeven].classList.add(witchClass)
    if (witchPositionSeven < 81) {
      cells[witchPositionSeven].classList.remove(witchClass)
      witchPositionSeven = 89
    } if (witchPositionSeven === 90) {
      cells[witchPositionSeven].classList.remove(witchClass)
      witchPositionSeven = 80
      cells[witchPositionSeven].classList.add(witchClass) 
    } else if (cells[dorothyPosition] === cells[witchPositionSeven]) {
      loseLife()
    }
  }

  // ! HIT WITCH 

  function hitWitch() {
    if (cells[dorothyPosition] === cells[witchPositionOne]) {
      return loseLife()
    } if (cells[dorothyPosition] === cells[witchPositionTwo]) {
      return loseLife() 
    } if (cells[dorothyPosition] === cells[witchPositionThree]) {
      return loseLife() 
    } if (cells[dorothyPosition] === cells[witchPositionFour]) {
      return loseLife() 
    } if (cells[dorothyPosition] === cells[witchPositionFive]) {
      return loseLife()
    } if (cells[dorothyPosition] === cells[witchPositionSix]) {
      return loseLife()
    } if (cells[dorothyPosition] === cells[witchPositionSeven]) {
      return loseLife() 
    } if (cells[dorothyPosition] === cells[witchPositionEight]) {
      return loseLife()
    } if (cells[dorothyPosition] === cells[witchPositionNine]) {
      return loseLife()
    } if (cells[dorothyPosition] === cells[witchPositionTen]) {
      return loseLife()
    } if (cells[dorothyPosition] === cells[witchPositionEleven]) {
      return loseLife()
    } if (cells[dorothyPosition] === cells[witchPositionTwelve]) {
      return loseLife()
    }
  }

  hitWitch()

  // ! LOSING A LIFE

  function loseLife() {
    removeDorothy(dorothyPosition)
    addDorothy(dorothyPosition = 94)
    setTimeout(wait, 500)
    function wait() {
      dorothyLives[lives - 1]
      lives--
      if (lives === 0) {
        gameOver()
        reset()
      }
    }
  }

  function reset() {
    location.reload()
  }

  // ! LOGS CROSSING

  const logClass = 'log'
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


  // * Add Log to grid
  function addLog(position) {
    cells[position].classList.add(logClass)
  }

  // * Move Log across grid

  function moveLogOne() {
    cells[logPositionOne.position].classList.remove(logClass)
    logPositionOne.position += 1
    cells[logPositionOne.position].classList.add(logClass)
    if (logPositionOne.position < 11) {
      cells[logPositionOne.position].classList.remove(logClass)
      logPositionOne.position = 18
    } if (logPositionOne.position === 20) {
      cells[logPositionOne.position].classList.remove(logClass)
      logPositionOne.position = 10
      cells[logPositionOne.position].classList.add(logClass) 
    } 
    // removing from above logic
    if (cells[dorothyPosition + 1] === cells[logPositionOne.position]) {
      // checkWaterDanger(false)
      removeDorothy(dorothyPosition)
      dorothyPosition += 1
      return addDorothy(dorothyPosition)
    }
  }

  function moveLogTwo() {
    cells[logPositionTwo.position].classList.remove(logClass)
    logPositionTwo.position += 1
    cells[logPositionTwo.position].classList.add(logClass)
    if (logPositionTwo.position < 11) {
      cells[logPositionTwo.position].classList.remove(logClass)
      logPositionTwo.position = 19
    } if (logPositionTwo.position === 20) {
      cells[logPositionTwo.position].classList.remove(logClass)
      logPositionTwo.position = 10
      cells[logPositionTwo.position].classList.add(logClass) 
    } 
    if (cells[dorothyPosition + 1] === cells[logPositionTwo.position]) {
      removeDorothy(dorothyPosition)
      dorothyPosition += 1
      return addDorothy(dorothyPosition)
    }
  }

  function moveLogThree() {
    cells[logPositionThree.position].classList.remove(logClass)
    logPositionThree.position -= 1
    cells[logPositionThree.position].classList.add(logClass)
    if (logPositionThree.position > 29) {
      cells[logPositionThree.position].classList.remove(logClass)
      logPositionThree.position = 16
    } if (logPositionThree.position < 20) {
      cells[logPositionThree.position].classList.remove(logClass)
      logPositionThree.position = 29
      cells[logPositionThree.position].classList.add(logClass) 
    } 
    if (cells[dorothyPosition - 1] === cells[logPositionThree.position]) {
      removeDorothy(dorothyPosition)
      dorothyPosition -= 1
      return addDorothy(dorothyPosition)
    }
  }


  function moveLogFour() {
    cells[logPositionFour.position].classList.remove(logClass)
    logPositionFour.position -= 1
    cells[logPositionFour.position].classList.add(logClass)
    if (logPositionFour.position > 29) {
      cells[logPositionFour.position].classList.remove(logClass)
      logPositionFour.position = 17
    } if (logPositionFour.position < 20) {
      cells[logPositionFour.position].classList.remove(logClass)
      logPositionFour.position = 29
      cells[logPositionFour.position].classList.add(logClass) 
    } 
    if (cells[dorothyPosition - 1] === cells[logPositionFour.position]) {
      removeDorothy(dorothyPosition)
      dorothyPosition -= 1
      return addDorothy(dorothyPosition)
    }
  }

  function moveLogFive() {
    cells[logPositionFive.position].classList.remove(logClass)
    logPositionFive.position -= 1
    cells[logPositionFive.position].classList.add(logClass)
    if (logPositionFive.position > 29) {
      cells[logPositionFive.position].classList.remove(logClass)
      logPositionFive.position = 18
    } if (logPositionFive.position < 20) {
      cells[logPositionFive.position].classList.remove(logClass)
      logPositionFive.position = 29
      cells[logPositionFive.position].classList.add(logClass) 
    } 
    if (cells[dorothyPosition - 1] === cells[logPositionFive.position]) {
      removeDorothy(dorothyPosition)
      dorothyPosition -= 1
      return addDorothy(dorothyPosition)
    }
  }

  function moveLogSix() {
    cells[logPositionSix.position].classList.remove(logClass)
    logPositionSix.position -= 1
    cells[logPositionSix.position].classList.add(logClass)
    if (logPositionSix.position > 29) {
      cells[logPositionSix.position].classList.remove(logClass)
      logPositionSix.position = 19
    } if (logPositionSix.position < 20) {
      cells[logPositionSix.position].classList.remove(logClass)
      logPositionSix.position = 29
      cells[logPositionSix.position].classList.add(logClass) 
    } 
    if (cells[dorothyPosition - 1] === cells[logPositionSix.position]) {
      removeDorothy(dorothyPosition)
      dorothyPosition -= 1
      return addDorothy(dorothyPosition)
    }
  }

  function moveLogSeven() {
    cells[logPositionSeven.position].classList.remove(logClass)
    logPositionSeven.position += 1
    cells[logPositionSeven.position].classList.add(logClass)
    if (logPositionSeven.position < 31) {
      cells[logPositionSeven.position].classList.remove(logClass)
      logPositionSeven.position = 37
    } if (logPositionSeven.position === 40) {
      cells[logPositionSeven.position].classList.remove(logClass)
      logPositionSeven.position = 30
      cells[logPositionSeven.position].classList.add(logClass) 
    } 
    if (cells[dorothyPosition + 1] === cells[logPositionSeven.position]) {
      removeDorothy(dorothyPosition)
      dorothyPosition += 1
      return addDorothy(dorothyPosition)
    }
  }

  function moveLogEight() {
    cells[logPositionEight.position].classList.remove(logClass)
    logPositionEight.position += 1
    cells[logPositionEight.position].classList.add(logClass)
    if (logPositionEight.position < 31) {
      cells[logPositionEight.position].classList.remove(logClass)
      logPositionEight.position = 38
    } if (logPositionEight.position === 40) {
      cells[logPositionEight.position].classList.remove(logClass)
      logPositionEight.position = 30
      cells[logPositionEight.position].classList.add(logClass) 
    }
    if (cells[dorothyPosition + 1] === cells[logPositionEight.position]) {
      removeDorothy(dorothyPosition)
      dorothyPosition += 1
      return addDorothy(dorothyPosition)
    }
  }

  function moveLogNine() {
    cells[logPositionNine.position].classList.remove(logClass)
    logPositionNine.position += 1
    cells[logPositionNine.position].classList.add(logClass)
    if (logPositionNine.position < 31) {
      cells[logPositionNine.position].classList.remove(logClass)
      logPositionNine.position = 39
    } if (logPositionNine.position === 40) {
      cells[logPositionNine.position].classList.remove(logClass)
      logPositionNine.position = 30
      cells[logPositionNine.position].classList.add(logClass) 
    } 
    if (cells[dorothyPosition + 1] === cells[logPositionNine.position]) {
      removeDorothy(dorothyPosition)
      dorothyPosition += 1
      return addDorothy(dorothyPosition)
    } 
  }

  // ! DOROTHY IN WATER

  function checkWaterDanger() {
    if (waterArea.includes(cells[dorothyPosition] ) ) {
      if (logs.map(item => item.position).includes(dorothyPosition)) {
        console.log('I have arrived on a Log and I am happy and safe')
      } else {
        console.log('I should be dead')
        return loseLife()
      }
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
    gameOverSound.play()
    clearInterval()
    removeDorothy(dorothyPosition)
    addDorothy(dorothyPosition = 94)
    return alert('You lost! :( You scored ' + score + ' points!')
  }

  // ! EVENT LISTENERS

  document.addEventListener('keyup', handleKeyUp)
  startButton.addEventListener('click', startGame)


  handleDorothyScore()


  removeHome(homePositionOne)
  removeHome(homePositionTwo)
  removeHome(homePositionThree)
  removeHome(homePositionFour)

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
  addWitch(witchPositionSix)
  addWitch(witchPositionSeven)
  addWitch(witchPositionEight)
  addWitch(witchPositionNine)
  addWitch(witchPositionTen)
  addWitch(witchPositionEleven)
  addWitch(witchPositionTwelve)

  addLog(logPositionOne.position)
  addLog(logPositionTwo.position)
  addLog(logPositionThree.position)
  addLog(logPositionFour.position)
  addLog(logPositionFive.position)
  addLog(logPositionSix.position)
  addLog(logPositionSeven.position)
  addLog(logPositionEight.position)
  addLog(logPositionNine.position)


  setInterval(function() {
    moveWitchOne(witchPositionOne) 
    moveWitchTwo(witchPositionTwo)
    moveWitchThree(witchPositionThree)
    moveWitchFour(witchPositionFour)
    moveWitchFive(witchPositionFive)
    moveWitchSix(witchPositionSix)
    moveWitchSeven(witchPositionSeven)
    moveWitchEight(witchPositionEight)
    moveWitchNine(witchPositionNine)
    moveWitchTen(witchPositionTen)
    moveWitchEleven(witchPositionEleven)
    moveWitchTwelve(witchPositionTwelve)
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

  window.addEventListener('keydown', function(event) {
    // space and arrow keys
    if ([32, 37, 38, 39, 40].indexOf(event.keyCode) > -1) {
      event.preventDefault()
    }
  }, false)
}

window.addEventListener('DOMContentLoaded', init)