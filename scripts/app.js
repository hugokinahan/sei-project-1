function init() {

  // ! VARIABLES
  // * Elements 

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

  // // ! DOROTHY LANDING ON HOME 
  
  // const dorothyIsHome = true
  
  // function getDorothyHome() {
  //   if (dorothyClass === homePositionOne) {
  //     return dorothyIsHome
  //   } if (dorothyClass === homePositionTwo) {
  //     return dorothyIsHome
  //   } if (dorothyClass === homePositionThree) {
  //     return dorothyIsHome
  //   } if (dorothyClass === homePositionFour) {
  //     return dorothyIsHome
  //   } 
  //   console.log(dorothyIsHome)
  // }

  // ! WITCHES CROSSING

  // * Add Witche to grid
  function addWitch(position) {
    cells[position].classList.add(witchClass)
  }
  
  // // * Remove Witch from the grid
  //   function removeDorothy(position) {
  //     cells[position].classList.remove(dorothyClass)
  //   }
  
  // // * Move Witch 
  //   function handleKeyUp(event) {
  //     removeDorothy(dorothyPosition)
    
  //     const horizontalPosition = dorothyPosition % width
  //     const verticalPosition = Math.floor(dorothyPosition / width)

  // ! EVENT LISTENERS

  document.addEventListener('keyup', handleKeyUp)

  createGrid(dorothyPosition)

  addHome(homePositionOne)
  addHome(homePositionTwo)
  addHome(homePositionThree)
  addHome(homePositionFour)

  addWitch(witchPositionOne)

  // getDorothyHome(dorothyIsHome)

}

window.addEventListener('DOMContentLoaded', init)