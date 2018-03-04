;(function(){
  /* Defined Class Square */
  class Square {
    constructor(x, y) {
      this.x = x
      this.y = y
    }
    draw(){
      ctx.fillRect(this.x, this.y, 10, 10)
    }
  }
  /* Defined class Snake */
  class Snake {
    constructor() {
      this.head = new Square(100, 10)
      this.draw()
    }
    /* Defined method draw */
    draw(){
      this.head.draw()
    }
  }

  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')
  //ctx.fillRect(20, 20, 50, 50)
  /*fillRect(posX, posY, width, height)*/

  const snake = new Snake()

})()
