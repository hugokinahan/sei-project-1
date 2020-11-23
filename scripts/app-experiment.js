function init() {
  //dom variables
  const grid = document.querySelector(' .grid')
  const cells = []
  const timer = document.querySelector('.timer')

  //lives and safe Dorothy
  const dorothyLifeOne = document.querySelector(
    'body > div.container > div.lives > div:nth-child(2)'
  )
  
  const dorothyLifeTwo = document.querySelector(
    'body > div.container > div.lives > div:nth-child(3)'
  )
  const dorothyLifeThree = document.querySelector(
    'body > div.container > div.lives > div:nth-child(4)'
  )

  const dorothyLives = [dorothyLifeOne, dorothyLifeTwo, dorothyLifeThree]

  //landing page
  const container2 = document.querySelector('.container2')
  const container = document.querySelector('.container')
  //end page
  const container4 = document.querySelector('.container4')
  const container5 = document.querySelector('.container5')

  //landing page
  const safeDorothyOne = document.querySelector(
    'body > div.container > div.lives > div.safe-dorothy > div:nth-child(2)'
  )
  const safeDorothyTwo = document.querySelector(
    'body > div.container > div.lives > div.safe-dorothy > div:nth-child(2)'
  )
  const safeDorothyThree = document.querySelector(
    'body > div.container > div.lives > div.safe-dorothy > div:nth-child(2)'
  )
  const safeDorothyFour = document.querySelector(
    'body > div.container > div.lives > div.safe-dorothy > div:nth-child(2)'
  )

  const safeDorothy = [
    safeDorothyOne,
    safeDorothyTwo,
    safeDorothyThree,
    safeDorothyFour
  ]

  //buttons
  const firstStart = document.querySelector('button.newStart')
  const startBtn = document.querySelector('button.start')
  const resetBtn = document.querySelector('button.reset')
  const playAgainbtn = document.querySelector('button.playAgain')
  const playAgainbtn2 = document.querySelector('button.playAgain2')

  //timers
  let obstacleTimerId = null
  let timerId = null
  let timeRemaining = 60

  //game variables
  const width = 10
  let dorothyPosition = 94 //NEED TO MIDDLE OF BOARD AT BOTTOM
  const dorothyHome = 2
  let gameRunning = false
  let lives = 3
  // const grass = 0
  // const grassImg = 'assets/grass.jpg'
  let dorothySaved = 4
  const cellCount = width * width

  //building the grid
  function createGrid() {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      cell.textContent = i
      grid.appendChild(cell)
      cells.push(cell)
    }
  }

  class Obstacle {
    constructor(line, current) {
      this.line = line
      this.current = current
    }
    moveRight() {
      if (this.current === this.line * width + (width - 1)) {
        this.current = this.current - 9
      } else {
        this.current++
      }
    }

    moveLeft() {
      if (this.current === this.line * width) {
        this.current = this.current + 9
      } else {
        this.current--
      }
    }
  }

  class Witch extends Obstacle {
    constructor(line, current) {
      super(line, current)
      this.image = 'wicked-witch.png'
    }
  }

  class Log extends Obstacle {
    constructor(line, current) {
      super(line, current)
      this.image = 'log.png'
    }
  }

  //functions

  //checks where the obstacles are and moves them

  function obstacleTimer() {
    if (gameRunning === true) {
      checkLog()
      witchOne.moveRight()
      witchTwo.moveLeft()
      witchThree.moveRight()
      WitchFour.moveLeft()
      WitchFive.moveRight()
      WitchSix.moveLeft()
      WitchSeven.moveRight()
      WitchEight.moveLeft()
      logOne.moveLeft()
      logTwo.moveLeft()
      logThree.moveLeft()
      logFour.moveRight()
      logFive.moveRight()
      logSix.moveRight()
      logSeven.moveLeft()
      logEight.moveLeft()
      logNine.moveLeft()
      checkWitch()
    }
  }

  //obstacles
  //Witches
  const witchOne = new Witch(6, 51)
  const witchTwo = new Witch(7, 70)
  const witchThree = new Witch(8, 71)
  const WitchFour = new Witch(9, 90)
  const WitchFive = new Witch(9, 81)
  const WitchSix = new Witch(8, 80)
  const WitchSeven = new Witch(7, 61)
  const WitchEight = new Witch(6, 60)
  // const WitchNine = new Witch(6, 74, 'wicked-witch.png')
  // const WitchTen = new Witch(7, 79, 'wicked-witch.png')
  // const WitchEleven = new Witch(8, 96, 'wicked-witch.png')
  // const WitchTwelve = new Witch(9, 101, 'wicked-witch.png')

  //water
  const waterDanger = cells.slice(11, 40)
  waterDanger.forEach((cell) => cell.classList.add('water'))

  //Logs
  const logOne = new Log(1, 11)
  const logTwo = new Log(1, 12, 'log')
  const logThree = new Log(1, 13)
  const logFour = new Log(2, 33)
  const logFive = new Log(2, 32, 'log')
  const logSix = new Log(2, 31)
  const logSeven = new Log(3, 34)
  const logEight = new Log(3, 35)
  const logNine = new Log(3, 36)

  //Forest Rows
  const forestTopRow = cells.slice(51, 60)
  forestTopRow.forEach((cell) => cell.classList.add('grass'))

  const forestSecondRow = cells.slice(61, 70)
  forestSecondRow.forEach((cell) => cell.classList.add('grass'))

  const forestThirdRow = cells.slice(71, 80)
  forestThirdRow.forEach((cell) => cell.classList.add('grass'))

  const forestBottomRow = cells.slice(81, 90)
  forestBottomRow.forEach((cell) => cell.classList.add('grass'))

  // safe grass by houses
  // cells[grass].classList.add('grass')
  // cells[grass + 1].classList.add('grass')
  // cells[grass + 3].classList.add('grass')
  // cells[grass + 5].classList.add('grass')
  // cells[grass + 6].classList.add('grass')
  // cells[grass + 8].classList.add('grass')
  // cells[grass + 10].classList.add('grass')

  // Yellow Brick Road Rows
  const yellowRoad = cells.slice(91, 100)
  const yellowMiddleRoad = cells.slice(41, 50)
  yellowRoad.forEach((cell) => cell.classList.add('yellow-brick-road'))
  yellowMiddleRoad.forEach((cell) => cell.classList.add('yellow-brick-road'))

  //place the player at the starting point when the grid has been built
  // ! DOROTHY
  // * Add Dorothy to grid
  function addDorothy(position) {
    cells[position].classList.add(dorothyPosition)
  }

  // * Remove Dorothy from the grid
  function removeDorothy(position) {
    cells[position].classList.remove(dorothyPosition)
  }

  // //places the houses on the grid
  // cells[dorothyHome].classList.add('dorothy-home')
  // cells[dorothyHome + 2].classList.add('dorothy-home')
  // cells[dorothyHome + 5].classList.add('dorothy-home')
  // cells[dorothyHome + 7].classList.add('dorothy-home')

  //THIS FUNCTION LETS THE PLAYER MOVE DOROTHY
  function handleKeyUp(event) {
    const horizontalPosition = dorothyPosition % width
    const verticalPosition = Math.floor(dorothyPosition / width)

    if (gameRunning === true) {
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
          break
        case 40: //arrow down
        case 83: //s key
          if (verticalPosition < width - 1) dorothyPosition += width
          break
        default:
          console.log('INVALID KEY')
      }
      addDorothy(dorothyPosition)
      cells.forEach((cell) => cell.classList.remove('dorothy'))
      cells[dorothyPosition].classList.add('dorothy')
      checkWitch()
      checkWaterDanger()
      checkHome()
      grassDanger()
    }
  }

  //timer function

  function startTimer() {
    if (timeRemaining < 0) {
      reset()
    } else {
      timer.innerHTML = timeRemaining
      timeRemaining--
    }
  }

  //checks if dorothy is in a square with a witch and if so she DIES
  function checkWitch() {
    const activeWitch = cells[dorothyPosition].classList.contains(
      'wicked-witch'
    )
    const activeWitchTwo = cells[dorothyPosition].classList.contains(
      'wicked-witch'
    )
    const activeWitchThree = cells[dorothyPosition].classList.contains(
      'wicked-witch'
    )
    const activeWitchFour = cells[dorothyPosition].classList.contains(
      'wicked-witch'
    )

    if (activeWitch || activeWitchTwo || activeWitchThree || activeWitchFour) {
      loseLife()
    }

    if (lives <= 0) {
      reset()
    }
  }

  //checks if the player is in a square with water, life lost
  function checkWaterDanger() {
    if (
      cells[dorothyPosition].classList.contains('grass') &&
      cells[dorothyPosition].classList.length < 4
    ) {
      loseLife()
    }
    if (lives <= 0) {
      reset()
    }
  }

  //checks if the player is in a square with a log and survives
  function checkLog() {
    const logOne = cells[dorothyPosition].classList.contains('log')
    const logTwo = cells[dorothyPosition].classList.contains('log')
    const logThree = cells[dorothyPosition].classList.contains('log')
    const logFour = cells[dorothyPosition].classList.contains('log')
    const logFive = cells[dorothyPosition].classList.contains('log')
    const logSix = cells[dorothyPosition].classList.contains('log')
    const logSeven = cells[dorothyPosition].classList.contains('log')
    const logEight = cells[dorothyPosition].classList.contains('log')
    const logNine = cells[dorothyPosition].classList.contains('log')

    //Log arrays
    const logsToLeft = [logOne, logTwo, logThree, logSeven, logEight, logNine]
    const logsToRight = [logFour, logFive, logSix]

    logsToRight.forEach((logStructure) => {
      if (logStructure) {
        cells[dorothyPosition].classList.remove('dorothy')
        dorothyPosition++
      }
      if (dorothyPosition % width > 0) {
        cells[dorothyPosition].classList.add('dorothy')
      } else {
        loseLife()
      }
    })

    logsToLeft.forEach((logStructure) => {
      if (logStructure) {
        cells[dorothyPosition].classList.remove('dorothy')
        dorothyPosition--
      }
      if (dorothyPosition % width < width - 1) {
        cells[dorothyPosition].classList.add('dorothy')
      } else {
        loseLife()
      }
    })
  }

  //keeps the safe dorothy's at home

  function checkHome() {
    const homeOne = cells[dorothyPosition].classList.contains('dorothy-home')

    const homeLand = [homeOne]

    homeLand.forEach((homeStructure) => {
      if (homeStructure) {
        cells[dorothyPosition].classList.add('dorothy')
        dorothyWin()
        if (dorothySaved === 0) {
          dorothyWinPage()
        }
      }
    })
  }

  //landing on grass and dying

  function grassDanger() {
    if (cells[dorothyPosition].classList.contains('grass')) {
      loseLife()
    }
    if (lives <= 0) {
      reset()
    }
  }

  //if the player gets four Dorothys across safely
  function dorothyWin() {
    cells[dorothyPosition].classList.remove('dorothy')
    safeDorothy[dorothySaved - 1].classList.remove('safe')
    dorothySaved--
    dorothyPosition = 94
    cells[dorothyPosition].classList.add('dorothy')
    if (dorothySaved === 0) {
      dorothyWinPage()
    }
  }

  //landing page for win
  function dorothyWinPage() {
    container.style.display = 'none'
    container4.style.display = 'block'
    container5.style.display = 'block'
  }

  // losing lives
  function loseLife() {
    gameRunning = false
    cells[dorothyPosition].classList.remove('dorothy')
    cells[dorothyPosition].classList.add('dorothy')
    setTimeout(wait, 500)
    function wait() {
      cells[dorothyPosition].classList.remove('dorothy')
      dorothyLives[lives - 1].classList.remove('dorothy')
      cells[dorothyPosition].classList.remove('dorothy')
      lives--
      dorothyPosition = 94
      cells[dorothyPosition].classList.add('dorothy')
      gameRunning = true
      if (lives === -1) {
        reset()
      }
    }
  }

  //player clicks on the option to play again after they win
  function playAgain() {
    container4.style.display = 'none'
    container5.style.display = 'none'
    container.style.display = 'flex'
    reset()
  }

  //makes the landing page disapeer and the game start
  function firstPlay() {
    firstStart.style.display = 'none'
    container.style.display = 'flex'
    container2.style.display = 'none'
    document.body.style.backgroundColor = '#d1f28f'
    play()
  }

  //starts the game
  function play() {
    if (gameRunning === false) {
      obstacleTimerId = setInterval(obstacleTimer, 500)
      gameRunning = true
      startTimer()
      timerId = setInterval(startTimer, 1000)
      startBtn.style.display = 'none'
      resetBtn.style.display = 'block'
    }
  }
  //resets the game
  function reset() {
    cells[dorothyHome].classList.remove('dorothy')
    cells[dorothyHome + 2].classList.remove('dorothy')
    cells[dorothyHome + 5].classList.remove('dorothy')
    cells[dorothyHome + 7].classList.remove('dorothy')
    dorothySaved = 4
    safeDorothy[0].classList.add('dorothy')
    safeDorothy[1].classList.add('dorothy')
    safeDorothy[2].classList.add('dorothy')
    safeDorothy[3].classList.add('dorothy')
    lives = 3
    dorothyLives[0].classList.add('dorothy')
    dorothyLives[1].classList.add('dorothy')
    dorothyLives[2].classList.add('dorothy')
    cells.forEach((cell) => cell.classList.remove('dorothy'))
    cells[dorothyPosition].classList.remove('dorothy')
    dorothyPosition = 94
    cells[dorothyPosition].classList.add('dorothy')
    finishGame()
    clearInterval(obstacleTimerId)
    gameRunning = false
    timerId = null
    timeRemaining = 60
    timer.innerHTML = timeRemaining
    startBtn.style.display = 'block'
    resetBtn.style.display = 'none'
  }

  function finishGame() {
    clearInterval(timerId)
  }

  //event handlers
  window.addEventListener('keyUp', handleKeyUp)

  createGrid(dorothyPosition)

  //start button and reset button
  startBtn.addEventListener('click', play)
  resetBtn.addEventListener('click', reset)
  firstStart.addEventListener('click', firstPlay)

  //end game and play again button

  playAgainbtn.addEventListener('click', playAgain)
  playAgainbtn2.addEventListener('click', playAgain)
}

window.addEventListener('DOMContentLoaded', init)
