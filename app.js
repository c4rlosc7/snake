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
    /* Defined method draw */
    right(){
      this.head.x += 10;
    }
    /* Defined method left */
    left(){
      this.head.x -= 10;
    }
    /* Defined method up */
    up(){
      this.head.y -= 10;
    }
    /* Defined method down */
    down(){
      this.head.y += 10;
    }
  }

  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')
  //ctx.fillRect(20, 20, 50, 50)
  /*fillRect(posX, posY, width, height)*/
  const snake = new Snake()
  // Global object window
  window.addEventListener("keydown", function(event){
    console.log(event)
  })

  setInterval(function(){
    snake.right() // move right
    ctx.clearRect(0, 0, canvas.width, canvas.height) // clear canvas
    snake.draw() // draw again
  }, 1000 / 5) //  each 5 frame per secound

})()
