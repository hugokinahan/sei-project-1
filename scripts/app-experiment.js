function init() {

  const grid = document.querySelector('.grid')
  const cells = []
  
  const width = 10
  const cellCount = width * width

  const dorothyClass = 'dorothy'
  let dorothyPosition = 94

  const homeClass = 'home'
  const homePositionOne = 1
  const homePositionTwo = 3
  const homePositionThree = 6
  const homePositionFour = 8

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

  // * MOVING OBSTACLES
  class movingObstacles {
    constructor (line, current, image) {
      this.line = line
      this.current = current
      this.image = image
      cells[this.current].classList.add(this.image)
    }
    moveRight() {
      cells[this.current].classList.remove(this.image)
      if (this.current === (this.line * width) + (width - 1)) {
        this.current = this.current - 9
      } else {
        this.current++
      }
      cells[this.current].classList.add(this.image)
    }
  
    moveLeft() {
      cells[this.current].classList.remove(this.image)
      if (this.current === (this.line * width)) {
        this.current = this.current + 10
      } else {
        this.current--
      }
      cells[this.current].classList.add(this.image)
    }
  
  }
  
  class Witch extends movingObstacles {
    constructor (line, current, image) {
      super(line, current, image)
    }
  }
  
  class Log extends movingObstacles {
    constructor (line, current, image) {
      super(line, current, image)
    }
  }

  const witch1 = new Witch(6, 66, 'assets/wicked-witch.png')
  // const witch2 = new Witch(7, 87, 'witch2')
  // const witch3 = new Witch(8, 88, 'witch3')
  // const witch4 = new Witch(9, 109, 'witch4')
  // const witch5 = new Witch(6, 70, 'witch')
  // const witch6 = new Witch(7,83, 'witch2')
  // const witch7 = new Witch(8, 92, 'witch3')
  // const witch8 = new Witch(9, 105, 'witch4')
  // const witch9 = new Witch(6, 74, 'witch')
  // const witch10 = new Witch(7, 79, 'witch2')
  // const witch11 = new Witch(8, 96, 'witch3')
  // const witch12 = new Witch(9, 101, 'witch4')

  witch1.moveLeft()












  // ! EVENT LISTENERS

  document.addEventListener('keyup', handleKeyUp)

  createGrid(dorothyPosition)

  addHome(homePositionOne)
  addHome(homePositionTwo)
  addHome(homePositionThree)
  addHome(homePositionFour)
}
window.addEventListener('DOMContentLoaded', init)