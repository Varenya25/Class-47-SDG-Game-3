var background, backgroundImage;
var author, authorImage;
var hannah, hannahImage;
var magicalBooks, magicalBooksImage;
var magicalPens, magicalPensImage;
var magicalPages, magicalPagesImage;
var magicalBookGrp, magicalPenGrp, magicalPageGrp;
var keyGrp;

function preload(){
  //load backgroundImage here
  backgroundImage = loadImage("Images/BGImage.png");
  //load authorImage here
  authorImage = loadImage("Images/author.png");
  //load hannahImage here
  hannahImage = loadImage("Images/hannah.png");
  //load magicalBooksImage here
  magicalBooksImage = loadImage("Images/magicalBook.png");
  //load magicalPensImage here
  magicalPensImage = loadImage("Images/magicalPen.png");
  //load magicalPagesImage here
  magicalPagesImage = loadImage("Images/magicalPage.png");
}


function setup(){
  //create canvas
  createCanvas(windowWidth, windowHeight);
  console.log(windowWidth);
  console.log(windowHeight);

  //create background
  background = createSprite(windowWidth/2, windowHeight/2, windowWidth, windowHeight);
  background.shapeColor = "lightBlue";
  background.addImage(backgroundImage);
  background.scale = 1.5;
  //create author
  author = createSprite(windowWidth-920, windowHeight-185, 20, 60);
  author.shapeColor = "yellow";
  author.addImage(authorImage);
  author.scale = 0.6;
  //create hannah
  hannah = createSprite(windowWidth-1150, windowHeight-115, 20, 60);
  hannah.shapeColor = "red";
  hannah.addImage(hannahImage);
  hannah.scale = 0.8;
 
  //create Obstacle Groups
  magicalBookGrp = createGroup();
  magicalPenGrp = createGroup();
  magicalPageGrp = createGroup();
  keyGrp = createGroup();
}


function draw(){
 
  //calling the functions
   spawnMagicalBooks();
   spawnMagicalPens();
   spawnMagicalPages();


   handlePlayerControls();

    magicalBookGrp.overlap (keyGrp,lock);
    
   
   drawSprites();
}

function lock (book, lock) {
  book.destroy();
  lock.destroy();
}

function handlePlayerControls () {
  if (keyDown ("UP_ARROW")) {
      author.y = author.y - 10;
  }
  if (keyDown ("DOWN_ARROW")) {
      author.y = author.y + 10;
  }
  if (keyDown ("SPACE")) {
    var key = createSprite(windowWidth-920, author.y + 20, 30, 10 );
    key.shapeColor = "yellow";
    keyGrp.add(key);
    key.velocityX = 4;
  }
}

function spawnMagicalBooks(){
  if (frameCount%100 == 0){
    magicalBooks = createSprite(1200 ,random(50,600));
    magicalBooks.addImage(magicalBooksImage);
    magicalBooks.velocityX = -4;
    magicalBooks.scale = 0.3;
    
  //add each magicalBook to the group
    magicalBookGrp.add(magicalBooks);
  }

}

function spawnMagicalPens(){
  if (frameCount%200 == 0){
    magicalPens = createSprite(1200 ,random(50,600));
    magicalPens.addImage(magicalPensImage);
    magicalPens.velocityX = -4;
    magicalPens.scale = 0.1;
  
  //add each magicalPen to the group
   magicalPenGrp.add(magicalPens);
  }

}

function spawnMagicalPages(){
  if (frameCount%300 == 0){
    magicalPages = createSprite(1200 ,random(50,600));
    magicalPages.addImage(magicalPagesImage);
    magicalPages.velocityX = -4;
    magicalPages.scale = 0.1;
  
  //add each magicalPage to the group
   magicalPageGrp.add(magicalPages);
  }

}