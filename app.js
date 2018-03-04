;(function(){
  /* Defined Class Square */
  class Square {
    constructor(x, y) {
      this.x = x
      this.y = y
      this.back = null
    }
    draw(){
      ctx.fillRect(this.x, this.y, 10, 10)
      if (this.hasBack()) {
        this.back.draw()
      }
    }
    add(){
      if (this.hasBack()) return this.back.add();
      this.back = new Square(this.x, this.y)
    }
    hasBack(){
      return this.back !== null
    }
    copy(){
      if (this.hasBack()) {
        this.back.copy()
        this.back.x = this.x
        this.back.y = this.y
      }
    }
    right(){
      this.copy()
      this.x += 10
    }
    left(){
      this.copy()
      this.x -= 10
    }
    up(){
      this.copy()
      this.y -= 10
    }
    down(){
      this.copy()
      this.y += 10
    }
  }
  /* Defined class Snake */
  class Snake {
    constructor() {
      this.head = new Square(100, 10)
      this.draw()
      this.direction = "right"
      this.head.add()
      this.head.add()
      this.head.add()
    }
    /* Defined method draw */
    draw(){
      this.head.draw()
    }
    /* Defined method draw */
    right(){
      this.direction = "right"
    }
    /* Defined method left */
    left(){
      this.direction = "left"
    }
    /* Defined method up */
    up(){
      this.direction = "up"
    }
    /* Defined method down */
    down(){
      this.direction = "down"
    }
    move(){
      if(this.direction === "up") return this.head.up()
      if(this.direction === "down") return this.head.down()
      if(this.direction === "right") return this.head.right()
      if(this.direction === "left") return this.head.left()
    }
  }

  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')
  //ctx.fillRect(20, 20, 50, 50)
  /*fillRect(posX, posY, width, height)*/
  const snake = new Snake()
  // Global object window  left=37, up=38, right=39, down=40
  window.addEventListener("keydown", function(event){
    console.log(event.keyCode)
    event.preventDefault()
    if (event.keyCode === 37) return snake.left();
    if (event.keyCode === 38) return snake.up();
    if (event.keyCode === 39) return snake.right();
    if (event.keyCode === 40) return snake.down();
    return false
  })

  setInterval(function(){
    //snake.right() // move right
    snake.move()
    ctx.clearRect(0, 0, canvas.width, canvas.height) // clear canvas
    snake.draw() // draw again
  }, 1000 / 5) //  each 5 frame per secound

})()
