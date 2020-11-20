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


  let timerId = null

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
    if (witchPositionOne > 49) {
      witchPositionOne += 1
    } else if (cells[dorothyPosition] === cells[witchPositionOne]) {
      console.log('game over')
    }
  }

  function moveWitchTwo() {
    cells[witchPositionTwo].classList.remove(witchClass)
    witchPositionTwo += 1
    cells[witchPositionTwo].classList.add(witchClass)
    if (witchPositionTwo < 61) {
      cells[witchPositionTwo].classList.remove(witchClass)
      witchPositionTwo = 69
    } else if (cells[dorothyPosition] === cells[witchPositionTwo]) {
      console.log('game over')
    }
  }

  function moveWitchThree() {
    cells[witchPositionThree].classList.remove(witchClass)
    witchPositionThree -= 1
    cells[witchPositionThree].classList.add(witchClass)
    if (witchPositionThree > 78) {
      cells[witchPositionThree].classList.remove(witchClass)
      witchPositionThree = 70
    } else if (cells[dorothyPosition] === cells[witchPositionThree]) {
      console.log('game over')
    }
  }

  function moveWitchFour() {
    cells[witchPositionFour].classList.remove(witchClass)
    witchPositionFour += 1
    cells[witchPositionFour].classList.add(witchClass)
    if (witchPositionFour < 81) {
      cells[witchPositionFour].classList.remove(witchClass)
      witchPositionFour = 89
    } else if (cells[dorothyPosition] === cells[witchPositionFour]) {
      console.log('game over')
    }
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

  setInterval(function() {
    moveWitchOne(witchPositionOne) 
    moveWitchTwo(witchPositionTwo)
    moveWitchThree(witchPositionThree)
    moveWitchFour(witchPositionFour)
  }, 1000)
}

window.addEventListener('DOMContentLoaded', init)