//Square details
var squareSize;
var colorOfSquare;
var positionX;
var positionY;
var firstX;
var firstY;
let squaresX = [];
let squaresY = [];
let timer = 50;
let timeStart = false;

//Difficulity
var difficulity;
let finalStage = true;
let clicks = 0;
var newPiece;
var way;

//Circle
let x = 0;
let y = 0;
let r = 50;
var speed;
let points = 0;
var scoreboard;
let ranP = 12;
var ranS;
let selection = true;

//Preload
function preload()
{
  //Background
  bg = loadImage('Images/game1.jpg');
  paper = loadImage('Images/scroll.png');
  old = loadImage('Images/oldpaper.png');
  
  //Medals
  bronze = loadImage('Images/bronze.png');
  silver = loadImage('Images/silver.png');
  gold = loadImage('Images/gold.png');
  
  //Pieces
  whitePawn = loadImage('Images/WhitePawn.png');
  whiteKnight = loadImage('Images/WhiteKnight.png');
  whiteBishop = loadImage('Images/WhiteBishop.png');
  whiteRook = loadImage('Images/WhiteRook.png');
  whiteQueen = loadImage('Images/WhiteQueen.png');
  whiteKing = loadImage('Images/WhiteKing.png');
  blackPawn = loadImage('Images/BlackPawn.png');
  blackKnight = loadImage('Images/BlackKnight.png');
  blackBishop = loadImage('Images/BlackBishop.png');
  blackRook = loadImage('Images/BlackRook.png');
  blackQueen = loadImage('Images/BlackQueen.png');
  blackKing = loadImage('Images/BlackKing.png');
  
  //Font
  font = loadFont('Images/RINGM___.TTF');
  
  //Sounds
  sound1 = loadSound('Images/Sound1.mp3');
  sound2 = loadSound('Images/Sound2.mp3');
  sound3 = loadSound('Images/Sound3.mp3');
  button = loadSound('Images/Button.mp3');
  ding = loadSound('Images/Ding Sound Effect.mp3');
  promotion = loadSound('Images/super mario mushroom sound.mp3');
}

function setup() 
{
  //Border
  let borderX = windowWidth/32;
  let borderY = windowHeight/32;
  let borderWidth = windowWidth - windowWidth/16;
  let borderHeight = windowHeight - windowHeight/16;
  let centerX = windowWidth / 2;
  let centerY = windowHeight / 2
  createCanvas(windowWidth, windowHeight);
  background(200,160,160);
  fill(240,170,140);
  rect(borderX,borderY,borderWidth,borderHeight);
}
function draw() 
{
  //Border
  background(bg);
  let borderX = windowWidth/32;
  let borderY = windowHeight/32;
  let borderWidth = windowWidth - windowWidth/16;
  let borderHeight = windowHeight - windowHeight/16;
  let centerX = windowWidth / 2;
  let centerY = windowHeight / 2
    
  //Size of border
  if(windowWidth <= windowHeight)
  {
    squareSize = borderWidth / 8;
    firstX = borderX;
    firstY = centerY - (squareSize * 4);
  }
  else
  {
    squareSize = borderHeight / 8;
    firstY = borderY;
    firstX = centerX - (squareSize * 4);
  }
  
  //Draws the board
  for(let i = 0; i < 8; i++)
  {
    positionY = firstY + (i * squareSize);
    for(let j = 0; j < 8; j++)
    {
      positionX = firstX + (j * squareSize);
      colorOfSquare = lightOrDark(j,i);
      board(colorOfSquare, positionX, positionY, squareSize);
      squaresX[j] = positionX;
      squaresY[i] = positionY;
    }
  }  
  //Circle
  fill('green');
  r = squareSize / 2;
  circle(x,y,1);
  
  //Random pieces
  newPiece = ranP;
  
  //Pawns:
  //move up once touched(twice if on second rank)
  //will be promoted on last rank
  //can not spawn on first rank
  //if it is black, it will move down instead of up
  if(newPiece == 0) //White Pawn
  {
    image(whitePawn, x-43,y-43,85,85);
    
    if(y == squaresY[7] + squareSize/2)
    {
      y = squaresY[6] + squareSize/2;
    }
    if(y == squaresY[0] + squareSize/2)
    {
      promotion.play();
      ranP = int(random(1,5));
    }
    if(clicks < difficulity)
    {
      finalStage = false;
    }
    else
    {
      finalStage = true;
    }
  }
  if(newPiece == 6) //Black Pawn
  {
    image(blackPawn, x-43,y-43,85,85);
    
    if(y == squaresY[0] + squareSize/2)
    {
      y = squaresY[1] + squareSize/2;
    }
    if(y == squaresY[7] + squareSize/2)
    {
      promotion.play();
      ranP = int(random(7,11));
    }
    
    if(clicks < difficulity)
    {
      finalStage = false;
    }
    else
    {
      finalStage = true;
    }
  }
  //Knights:
  //move in an L-shape after being touched
  //teleport after some time in higher difficulities
  if(newPiece == 1) //White Knight
  {
    image(whiteKnight, x-43,y-43,85,85);
    
    if(clicks < difficulity)
    {
      finalStage = false;
    }
    else
    {
      finalStage = true;
    }
  }
  if(newPiece == 7) //Black Knight
  {
    image(blackKnight, x-43,y-43,85,85);
    
    if(clicks < difficulity)
    {
      finalStage = false;
    }
    else
    {
      finalStage = true;
    }
  }
  //Bishops: move diagonally
  if(newPiece == 2) //White Bishop
  {
    image(whiteBishop, x-43,y-43,85,85);
    
    if(clicks < difficulity)
    {
      finalStage = false;
    }
    else
    {
      finalStage = true;
    }
  }
  if(newPiece == 8) //Black Bishop
  {
    image(blackBishop, x-43,y-43,85,85);
    
    if(clicks < difficulity)
    {
      finalStage = false;
    }
    else
    {
      finalStage = true;
    }
  }
  //Rook: move vertically or horizontally
  if(newPiece == 3) //White Rook
  {
    image(whiteRook, x-43,y-43,85,85);
    
    if(clicks < difficulity)
    {
      finalStage = false
    }
    else
    {
      finalStage = true;
    }
  }
  if(newPiece == 9) //Black Rook
  {
    image(blackRook, x-43,y-43,85,85);
    
    if(clicks < difficulity)
    {
      finalStage = false
    }
    else
    {
      finalStage = true;
    }
  }
  //Queen: move in any direction
  if(newPiece == 4) //White Queen
  {
    image(whiteQueen, x-43,y-43,85,85);
    
    if(clicks < difficulity)
    {
      finalStage = false
    }
    else
    {
      finalStage = true;
    }
  }
  if(newPiece == 10) //Black Queen
  {
    image(blackQueen, x-43,y-43,85,85);
    
    if(clicks < difficulity)
    {
      finalStage = false
    }
    else
    {
      finalStage = true;
    }
  }
  //King: 
  //teleport to a spot around them when touched
  if(newPiece == 5) //White King
  {
    image(whiteKing, x-43,y-43,85,85);
    
    if(clicks < difficulity)
    {
      finalStage = false;
    }
    else
    {
      finalStage = true;
    }
  }
  if(newPiece == 11) //Black King
  {
    image(blackKing, x-43,y-43,85,85);
    
    if(clicks < difficulity)
    {
      finalStage = false;
    }
    else
    {
      finalStage = true;
    }
  }
  if(newPiece == 12) //Difficulity
  {
    //Text set up
    textFont(font);
    textAlign(CENTER,CENTER);
    textSize(15);
    fill('lightblue');
    circle(centerX, centerY - squareSize * 2, squareSize);
    fill('black');
    text("Warm-Up", centerX, centerY - squareSize * 2);
    fill('green');
    circle(centerX - squareSize * 2,centerY,squareSize);
    fill('black');
    text("Easy", centerX - squareSize * 2,centerY);
    fill('yellow');
    circle(centerX,centerY,squareSize);
    fill('black');
    text("Medium", centerX,centerY);
    fill('darkorange');
    circle(centerX + squareSize * 2,centerY,squareSize);
    fill('black')
    text("Hard", centerX + squareSize * 2,centerY);
    fill('darkred');
    circle(centerX, centerY + squareSize * 2, squareSize);
    fill('black');
    text("Expert", centerX, centerY + squareSize * 2)
  }
  
  //Text
  textFont(font);
  textAlign(CENTER,CENTER);
  fill('black');
  //Scoreboard
  textSize(40);
  text("Score", 75, 25);
  //Score value
  textSize(40);
  text(points, 75, 50);
  //Timer
  textSize(40);
  text("Timer", 75, 100);
  //Timer value
  textSize(40);
  text(timer, 75, 125 );
  
  //Timer calculation
  if(timeStart == true)
  {
    if (frameCount % 60 == 0 && timer > 0)
	  timer --;
    if (timer == 0)
    {
      if(points <= 10)
      {
        gameOverBronze();
      }
	  else if (points > 10 && points <= 14)
      {
        gameOverSilver();
      }
	  else if (points > 14)
      {
        gameOverGold();
      }
    }
  }

}

//MousPressed
function mousePressed()
{
  //Border
  let borderX = windowWidth/32;
  let borderY = windowHeight/32;
  let borderWidth = windowWidth - windowWidth/16;
  let borderHeight = windowHeight - windowHeight/16;
  let centerX = windowWidth / 2;
  let centerY = windowHeight / 2
  let d = dist(mouseX, mouseY, x, y);
  
  //Variables for buttons
  let warmUpD = dist(mouseX,mouseY,centerX, centerY - squareSize * 2);
  let easyD = dist(mouseX, mouseY, centerX - squareSize * 2, centerY);
  let mediumD = dist(mouseX, mouseY, centerX, centerY);
  let hardD = dist(mouseX, mouseY, centerX + squareSize * 2, centerY);
  let expertD = dist(mouseX, mouseY, centerX, centerY + squareSize * 2);
  
  //This will check if one of the difficulity buttons have been               clicked
  if(selection == true)
  {
    if(warmUpD <= squareSize)
    {
      difficulity = 0;
      ranP = int(random(0,12))
      x = random(squaresX) + squareSize/2;
      y = random(squaresY) + squareSize/2;
      selection = false;
      timeStart = true;
      finalStage = true;
      button.play();
    }
    if(easyD <= squareSize)
    {
      difficulity = 1; 
      ranP = int(random(0,12))
      x = random(squaresX) + squareSize/2;
      y = random(squaresY) + squareSize/2;
      selection = false;
      timeStart = true;
      button.play();
    }
    if(mediumD <= squareSize)
    {
      difficulity = 2;
      ranP = int(random(0,12))
      x = random(squaresX) + squareSize/2;
      y = random(squaresY) + squareSize/2;
      selection = false;
      timeStart = true;
      button.play();
    }
    if(hardD <= squareSize)
    {
      difficulity = 3;
      ranP = int(random(0,12))
      x = random(squaresX) + squareSize/2;
      y = random(squaresY) + squareSize/2;
      selection = false;
      timeStart = true;
      button.play();
    }
    if(expertD <= squareSize)
    {
      difficulity = 4;
      ranP = int(random(0,12))
      x = random(squaresX) + squareSize/2;
      y = random(squaresY) + squareSize/2;
      selection = false;
      timeStart = true;
      button.play();
    }
  }
  
  //Code for checking if pieces are being clicked
  //  -Also changes the random piece value
  if(d < r)
  {
    clicks++;
    if(finalStage == true)
    {
      ranP = int(random(0,12));
      ding.play();
      x = random(squaresX) + squareSize/2;
      y = random(squaresY) + squareSize/2;
      points++;
      clicks = 0;
    }
    else if(finalStage == false)
    {
      move(newPiece,difficulity);
      ranS = int(random(0,3));
      if(ranS == 0)
      {
        sound1.play();
      }
      else if(ranS == 1)
      {
        sound2.play();
      }
      else
      {
        sound3.play();
      }
    }
  }
}

//Creates squares
function board(isLight,x,y,size)
{
  if(isLight == true)
  {
    fill(220,200,180);
    square(x,y,size);
  }
  else
  {
    fill(190,100,75);
    square(x,y,size);
  }
}
//Returns true if the square is light
function lightOrDark(x,y)
{
  let result = true;
  if(x % 2 == 0)
  {
    if(y % 2 == 0)
    {
      result = true;
    }
    
    else if(y % 2 != 0)
    {
      result = false;
    }
  }
  
  else if(x % 2 != 0)
  {
    if(y % 2 == 0)
    {
      result = false;
    }
    
    else if(y % 2 != 0)
    {
      result = true;
    }
  }
  
  return result;
}

//Decides how pieces moves
function move(piece, difficulity)
{
  let borderX = windowWidth/32;
  let borderY = windowHeight/32;
  let borderWidth = windowWidth - windowWidth/16;
  let borderHeight = windowHeight - windowHeight/16;
  let centerX = windowWidth / 2;
  let centerY = windowHeight / 2
  var temp;
  var direction;
  let currentX = x;
  let currentY = y;
  
  if(piece == 4 || piece == 10)
  {
    piece = int(random(2,4));
  }
  
  if(piece == 0) //White pawn
  {
    if(y == squaresY[6] + squareSize/2)
    {
      y -= squareSize * 2;
    }
    else
    {
      y -= squareSize;
    } 
  }

  else if(piece == 6) //Black Pawn
  {
    if(y == squaresY[1] + squareSize/2)
    {
      y += squareSize * 2;
    }
    else
    {
      y += squareSize;
    }
  }
  
  else if(piece == 1 || piece == 7) //Knights
  {
    if(x < centerX && y < centerY)
    {
      temp = int(random(0,2));
      if(temp == 0)
      {
        x += squareSize * 2;
        y += squareSize;
      }
      else if(temp == 1)
      {
        x += squareSize;
        y += squareSize * 2;
      }
    }
    else if(x > centerX && y < centerY)
    {
      temp = int(random(0,2));
      if(temp == 0)
      {
        x -= squareSize * 2;
        y += squareSize;
      }
      else if(temp == 1)
      {
        x -= squareSize;
        y += squareSize * 2;
      }
    }
    else if(x < centerX && y > centerY)
    {
      temp = int(random(0,2));
      if(temp == 0)
      {
        x += squareSize * 2;
        y -= squareSize;
      }
      else if(temp == 1)
      {
        x += squareSize;
        y -= squareSize * 2;
      }
    }
    else
    {
      temp = int(random(0,2));
      if(temp == 0)
      {
        x -= squareSize * 2;
        y -= squareSize;
      }
      if(temp == 1)
      {
        x -= squareSize;
        y -= squareSize * 2;
      }
    }
  }
  else if(piece == 2 || piece == 8) //Bishops
  {
    if(difficulity >= 1)
    {
      if(x < centerX && y < centerY)
      {
        temp = int(random(1,5));
        x += squareSize * temp;
        y += squareSize * temp;
      }
      else if(x > centerX && y < centerY)
      {
        temp = int(random(1,5));
        x -= squareSize * temp;
        y += squareSize * temp;
      }
      else if(x < centerX && y > centerY)
      {
        temp = int(random(1,5));
        x += squareSize * temp;
        y -= squareSize * temp;
      }
      else if(x > centerX && y > centerY)
      {
        temp = int(random(1,5));
        x -= squareSize * temp;
        y -= squareSize * temp;
      }
    }
  }
  else if(piece == 3 || piece == 9) //Rooks
  {
    if(difficulity >= 1)
    {
      temp = int(random(0,2));
      
      if(temp == 0)
      {
        if(x < centerX)
        {
          x += squareSize * int(random(1,5));
        }
        else
        {
          x -= squareSize * int(random(1,5));
        }
      }
      else if(temp == 1)
      {
        if(y < centerY)
        {
          y += squareSize * int(random(1,5));
        }
        else
        {
          y -= squareSize * int(random(1,5));
        }
      }
    }
  }
  else if(piece == 5 || piece == 11) //Kings
  {
    temp = int(random(0,3));
    if(temp == 0)
    {
      direction = int(random(0,2))
      if(direction == 0 && currentX == squaresX[0] + squareSize/2)
      {
        x += squareSize;
      }
      else if(direction == 0 && currentX != squaresX[0] + squareSize/2)
      {
        x -= squareSize;
      }
      else if(direction == 1 && currentX == squaresX[7] + squareSize/2)
      {
        x -= squareSize;
      }
      else if(direction == 1 && currentX != squaresX[7] + squareSize/2)
      {
        x += squareSize;
      }
    }
    if(temp == 1)
    {
      if(direction == 0 && currentY == squaresY[0] + squareSize/2)
      {
        y -= squareSize;
      }
      else if(direction == 0 && currentY != squaresY[0] + squareSize/2)
      {
        y += squareSize;
      }
      else if(direction == 1 && currentY == squaresY[7] + squareSize/2)
      {
        y += squareSize;
      }
      else if(direction == 1 && currentY != squaresY[7] + squareSize/2)
      {
        y -= squareSize;
      }
    }
    if(temp == 2)
    {
      if(currentX == squaresX[0] + squareSize/2)
      {
        if(currentY == squaresY[0] + squareSize/2)
        {
          direction = 3;
        }
        else if(currentY == squaresY[7] + squareSize/2)
        {
          direction = 2;
        }
        else
        {
          direction = int(random(2,4));
        }
      }
      else if(currentX == squaresX[7] + squareSize/2)
      {
        if(currentY == squaresY[0] + squareSize/2)
        {
          direction = 4;
        }
        else if(currentY == squaresY[7] + squareSize/2)
        {
          direction = 1;
        }
        else
        {
          temp = int(random(0,2));
          if(temp == 0)
          {
            direction = 1;
          }
          else
          {
            direction = 4;
          }
        }
      }
      else if(currentY == squaresY[0] + squareSize/2)
      {
        if(currentX == squaresX[0] + squareSize/2)
        {
          direction = 3;
        }
        else if(currentX == squaresX[7] + squareSize/2)
        {
          direction = 4;
        }
        else
        {
          direction = int(random(3,5));
        }
      }
      else if(currentY == squaresY[7] + squareSize/2)
      {
        if(currentX == squaresX[0] + squareSize/2)
        {
          direction = 2;
        }
        else if(currentX == squaresX[7] + squareSize/2)
        {
          direction = 1;
        }
        else
        {
          direction = int(random(1,3));
        }
      }
      else
      {
        direction = int(random(1,5));
      }
      
      if(direction == 1)
      {
        x -= squareSize;
        y -= squareSize;
      }
      else if(direction == 2)
      {
        x += squareSize;
        y -= squareSize;
      }
      else if(direction == 3)
      {
        x += squareSize;
        y += squareSize;
      }
      else if(direction == 4)
      {
        x -= squareSize;
        y += squareSize;
      }
    }
  }
}


//gold
function gameOverGold()
{
  noLoop();
  clearAll();
  background(bg); 
  image(paper, width/2-250, height/2-325, 500,700);
  textAlign(CENTER, CENTER);
  textFont(font);
  textSize(60);                   
  text('GAME OVER', width/2, height/2-150);      
  textSize(40);                   
  text('Score: ' + points, width/2, height/2-50);      
  image(gold, width/2-100, height/2-30, 200,200);
  retry();
  exit();  
}

//bronze
function gameOverBronze()
{
  noLoop();
  clearAll();
  background(bg); 
  image(paper, width/2-250, height/2-325, 500,700);
  textAlign(CENTER, CENTER);
  textFont(font);
  textSize(60);                   
  text('GAME OVER', width/2, height/2-150);     
  textSize(40);                   
  text('Score: ' + points, width/2, height/2-50);      
  image(bronze, width/2-100, height/2-30, 200,200);
  retry();
  exit();  
}

//silver
function gameOverSilver()
{
  noLoop();
  clearAll();
  background(bg); 
  image(paper, width/2-250, height/2-325, 500,700);
  textAlign(CENTER, CENTER);
  textFont(font);
  textSize(60);                   
  text('GAME OVER', width/2, height/2-150);      
  textSize(40);                   
  text('Score: ' + points, width/2, height/2-50);      
  image(silver, width/2-100, height/2-30, 200,200);
  retry();
  exit();  
}

// resets the game and page
function retry()
{
  image(old, width/2-70, height/2+200, 140, 50);
  let btnColor = color(255,255,255);
  noStroke();
  //noFill();
  btnColor.setAlpha(0);                  //transparent color
  textAlign(CENTER, CENTER);
  retryBtn = createButton("");
  retryBtn.style('background-color', btnColor);
  retryBtn.position(width/2-70, height/2+200);
  retryBtn.size(140, 50);
  stroke('black');
  strokeWeight(4);
  fill('#f7eee1');
  rect(width/2-70, height/2+200, 140, 50);
  image(old, width/2-70, height/2+200, 140, 50);
  fill('black');
  noStroke();
  textFont(font);
  textSize(35); 
  text('Retry?', width/2, height/2+220);
  retryBtn.mouseClicked(game2);
}

//exit to main menu
function exit()
{
  textAlign(CENTER, CENTER);
  exitBtn = createButton("X");
  exitBtn.position(width-42, 0);
  exitBtn.size(25, 25);
  exitBtn.style('background-color', 'red');
  exitBtn.mouseClicked(mainMenu);
}

// opens main menu window
function mainMenu()
{  
   window.open('https://editor.p5js.org/EzraLee/full/GQ4TIZms7');
}

//Clears
function clearAll()
{
  clear();
  removeElements();
  background(bg);
}

function game2()
{
  window.open("https://editor.p5js.org/ChocolateKing/full/ZIhSg4w26");
}