function init() {

  // ! VARIABLES

  const grid = document.querySelector('.grid')
  
  const width = 10
  const cellCount = width * width
  const cells = []

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

  const logClass = 'log'
  let logPositionOne = 10
  let logPositionTwo = 11
  let logPositionThree = 29
  let logPositionFour = 28
  let logPositionFive = 27
  let logPositionSix = 26
  let logPositionSeven = 30
  let logPositionEight = 31
  let logPositionNine = 32


  const timerId = null

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

  function hasDorothyAndHome(element) {
    return element.classList.contains(dorothyClass)
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
      witchPositionTwo = 69
    } if (witchPositionTwo > 69) {
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

  // * Add Log to grid
  function addLog(position) {
    cells[position].classList.add(logClass)
  }

  // * Move Log across grid

  // function moveWitchOne() {
  //   cells[witchPositionOne].classList.remove(witchClass)
  //   witchPositionOne -= 1
  //   cells[witchPositionOne].classList.add(witchClass)
  //   if (witchPositionOne > 58) {
  //     cells[witchPositionOne].classList.remove(witchClass)
  //     witchPositionOne = 50
  //   } if (witchPositionOne < 50) {
  //     cells[witchPositionOne].classList.remove(witchClass)
  //     witchPositionOne += 1
  //     cells[witchPositionOne].classList.add(witchClass) 
  //   } else if (cells[dorothyPosition] === cells[witchPositionOne]) {
  //     gameOver()
  //   }
  // }

  // function moveWitchTwo() {
  //   cells[witchPositionTwo].classList.remove(witchClass)
  //   witchPositionTwo += 1
  //   cells[witchPositionTwo].classList.add(witchClass)
  //   if (witchPositionTwo < 61) {
  //     cells[witchPositionTwo].classList.remove(witchClass)
  //     witchPositionTwo = 69
  //   } if (witchPositionTwo > 69) {
  //     cells[witchPositionTwo].classList.remove(witchClass)
  //     witchPositionTwo -= 1
  //     cells[witchPositionTwo].classList.add(witchClass) 
  //   } else if (cells[dorothyPosition] === cells[witchPositionTwo]) {
  //     gameOver()
  //   }
  // }

  // function moveWitchThree() {
  //   cells[witchPositionThree].classList.remove(witchClass)
  //   witchPositionThree -= 1
  //   cells[witchPositionThree].classList.add(witchClass)
  //   if (witchPositionThree > 78) {
  //     cells[witchPositionThree].classList.remove(witchClass)
  //     witchPositionThree = 70
  //   } if (witchPositionThree < 70) {
  //     cells[witchPositionThree].classList.remove(witchClass)
  //     witchPositionThree += 1
  //     cells[witchPositionThree].classList.add(witchClass) 
  //   } else if (cells[dorothyPosition] === cells[witchPositionThree]) {
  //     gameOver()
  //   }
  // }

  // function moveWitchFour() {
  //   cells[witchPositionFour].classList.remove(witchClass)
  //   witchPositionFour += 1
  //   cells[witchPositionFour].classList.add(witchClass)
  //   if (witchPositionFour < 81) {
  //     cells[witchPositionFour].classList.remove(witchClass)
  //     witchPositionFour = 89
  //   } if (witchPositionFour > 89) {
  //     cells[witchPositionFour].classList.remove(witchClass)
  //     witchPositionFour -= 1
  //     cells[witchPositionFour].classList.add(witchClass) 
  //   } else if (cells[dorothyPosition] === cells[witchPositionFour]) {
  //     gameOver()
  //   }
  // }

  // ! Game Over

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
}

window.addEventListener('DOMContentLoaded', init)