function init() {

  // ! VARIABLES
  // * Elements 
  const grid = document.querySelector('.grid')
  
  const width = 10
  const cellCount = width * width
  const cells = []

  const dorothyClass = 'dorothy'
  let dorothyPosition = 94

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
        if (horizontalPosition < width - 1) dorothyPosition++
        break
      case 37: //arrow left
        if (horizontalPosition > 0) dorothyPosition--
        break
      case 38: //arrow up
        if (verticalPosition > 0) dorothyPosition -= width
        break
      case 40: //arrow down
        if (verticalPosition < width - 1) dorothyPosition += width
        break
      default:
        console.log('INVALID KEY')
    }

    addDorothy(dorothyPosition)
  }


  // ! EVENT LISTENERS

  document.addEventListener('keyup', handleKeyUp)

  createGrid(dorothyPosition)

}

window.addEventListener('DOMContentLoaded', init)