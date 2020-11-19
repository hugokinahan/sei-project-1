function init() {

  // ! VARIABLES
  // * Elements 
  const grid = document.querySelector('.grid')
  
  const width = 10
  const cellCount = width * width
  const cells = []


  // * Make a grid
  function createGrid() {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      cell.textContent = i
      grid.appendChild(cell)
      cells.push(cell)
    }
  }




























  // ! EVENT LISTENERS

  // document.addEventListener('keyup')

  createGrid()

}

window.addEventListener('DOMContentLoaded', init)