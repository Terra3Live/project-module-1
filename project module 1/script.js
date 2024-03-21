let img;

let img2;

let player = {
  x: 600 / 2,
  y: 830,
  size: 35,
  health:150,
};

let enemies = {
  x: 300,
  y: 150,
  size: 45,
  xSpeed: 5,
  health: 100,
  lastShot:0,
  firerate:500,
};


let friendlyProjectiles = [];

let enemies2 = {
  x: 400,
  y: 100,
  size: 45,
  xSpeed: 5,
  health: 100,
  lastShot:0,
  firerate:250,
};

let bossP1 = {
x: 300,
y: 200,
size: 300,
xSpeed: 3,
health: 2000,
lastShot:0,
  firerate:150,
};

let bossP2 = {
  x: 300,
  y: 200,
  size: 150,
  xSpeed: 3,
  health: 2000,
  lastShot:0,
  firerate:1000,
  };


    let pillarSet1 = {
      x: 850,
      y: 900,
      size: 90,
      
    }

    let pillarset2 = {
      x: 50,
      y: 900,
      size: 80,
      lastShot:0,
  firerate:350,
    }

    let gunpewpew = [];
    let gunpewpew2 = [];
    let gunpewpew3 = [];
    let gunpewpew4 = [];
    let beam = [];
    let beam2 = [];

    
    
    function preload() {
      img = loadImage("pixil-frame-0.png");
      img2 = loadImage("Enemy.png");
      img3 = loadImage("Enemy2.png");
      p1 = loadImage("BossP1.png");
      imgBullet = loadImage("BULLET.png");
      p2 = loadImage("P2.png");
      imgFB = loadImage("FRIENDLYBULLET.png");
      Pillar = loadImage("Pillar.png");
      bomb = loadImage("Bomber.png");
      bg2 = loadImage("LoseBackground.png");
      bgW = loadImage("Win Background.png");
        }
    
    
    function setup() {
      bg = loadImage("Background.png");
      bg2 = loadImage("LoseBackground.png");
      createCanvas(600, 900);
    }
    
    
    
    function draw() {
      if (player.health > 0) {
      background(bg);

  

  if (keyIsDown(65)) {
    player.x -= 3;
  }

  if (keyIsDown(68)) {
    player.x += 3;
  }


  if (keyIsDown(87)) {
    player.y -= 3;
  }

  if (keyIsDown(83)) {
    player.y += 3;
  }




  if (player.x > 590) {
    player.x = 10;
  }

  if (player.x < 10) {
    player.x = 590;
  }

  for (i = 0; i < friendlyProjectiles.length; i++) {
    friendlyProjectiles[i].y += friendlyProjectiles[i].ySpeed;
    image( imgFB,
      friendlyProjectiles[i].x,
      friendlyProjectiles[i].y,
      );

      if(enemies.health>0){
        let xDiff=friendlyProjectiles[i].x-enemies.x;
        let yDiff=friendlyProjectiles[i].y-enemies.y;
        let bulletDistance=sqrt(xDiff*xDiff+yDiff*yDiff); 
        if(bulletDistance<friendlyProjectiles[i].size/2+enemies.size/2){
          enemies.health-=50; console.log("hit");
        } 
      } else if(enemies2.health>0 && enemies.health == 0){
        let xDiff=friendlyProjectiles[i].x-enemies2.x;
        let yDiff=friendlyProjectiles[i].y-enemies2.y;
        let bulletDistance=sqrt(xDiff*xDiff+yDiff*yDiff); 
        if(bulletDistance<friendlyProjectiles[i].size/2+enemies2.size/2){
          enemies2.health-=25; console.log("hit2");
      }

    } else if(bossP1.health>0 && enemies.health == 0 && enemies2.health == 0){
      let xDiff=friendlyProjectiles[i].x-bossP1.x;
        let yDiff=friendlyProjectiles[i].y-bossP1.y;
        let bulletDistance=sqrt(xDiff*xDiff+yDiff*yDiff); 
        if(bulletDistance<friendlyProjectiles[i].size/2+bossP1.size/2){
          bossP1.health-=10; console.log("hitB1");
    } 


  } else {
    let xDiff=friendlyProjectiles[i].x-bossP2.x;
        let yDiff=friendlyProjectiles[i].y-bossP2.y;
        let bulletDistance=sqrt(xDiff*xDiff+yDiff*yDiff); 
        if(bulletDistance<friendlyProjectiles[i].size/2+bossP2.size/2){
          bossP2.health-=10; console.log("hitB2");


  }
}
  }
  image(img, player.x - 23, player.y - 25);

  
  
  
  
  if(enemies.health>0){
    
    
      enemies.x += enemies.xSpeed;
    if (enemies.x > width - 50 || enemies.x < 50) {
      enemies.xSpeed = enemies.xSpeed * -1;
    
    }
  
    image(img2, enemies.x - 23, enemies.y - 25);

  } else if (enemies2.health > 0) {
    enemies2.x += enemies2.xSpeed;
    if (enemies2.x > width - 50 || enemies2.x < 50) {
      enemies2.xSpeed = enemies2.xSpeed * -1;
  
    }
   image(img3, enemies2.x, enemies2.y);

  } else if (bossP1.health > 0) {
    bossP1.x += bossP1.xSpeed;
    if (bossP1.x > width - 150 || bossP1.x < 150) {
      bossP1.xSpeed = bossP1.xSpeed * -1;
  
    }

image(p1, bossP1.x-150, bossP1.y-150);

  } else if(bossP2.health>0) {
    bossP2.x += bossP2.xSpeed;
    if (bossP2.x > width - 150 || bossP2.x < 150) {
      bossP2.xSpeed = bossP2.xSpeed * -1;
  
    }

image(p2, bossP2.x-150, bossP2.y-150);

  } else {
  image(bgW,0,0);
  }

  if(millis()>enemies.lastShot+enemies.firerate){
    enemyGun();
    enemies.lastShot=millis();
   
}

if(millis()>enemies.lastShot+enemies.firerate&&enemies.firerate>0){
    enemies.firerate+=10;
}


if(millis()>enemies2.lastShot+enemies2.firerate){
  enemyGun2();
  enemies2.lastShot=millis();
 
}

if(millis()>enemies2.lastShot+enemies2.firerate&&enemies2.firerate>0){
  enemies2.firerate+=10;
}



if(millis()>bossP1.lastShot+bossP1.firerate){
  enemyGun3();
  bossP1.lastShot=millis();
 
}

if(millis()>bossP1.lastShot+bossP1.firerate&&bossP1.firerate>0){
  bossP1.firerate+=10;
}

if(millis()>bossP2.lastShot+bossP2.firerate){
  enemyGun4();
  bossP2.lastShot=millis();
 
}

if(millis()>bossP2.lastShot+bossP2.firerate&&bossP2.firerate>0){
  bossP2.firerate+=10;
}

if(millis()>beam.lastShot+beam.firerate){
  pillar1();
  beam.lastShot=millis();
 
}

if(millis()>beam.lastShot+beam.firerate&&beam.firerate>0){
  beam.firerate+=10;
}




if(enemies.health >0){
for (i = 0; i < gunpewpew.length; i++) {
  gunpewpew[i].y += gunpewpew[i].ySpeed;
  image(imgBullet,
gunpewpew[i].x,
gunpewpew[i].y,
  );
  if(player.health>0){
      let xDiff5=player.x-gunpewpew[i].x;
      let yDiff5=player.y-gunpewpew[i].y;
      let playerDistance3=sqrt(xDiff5*xDiff5+yDiff5*yDiff5);
      if (playerDistance3<10/2+25/2&&player.health>0){
          player.health-=10;
      }
  }
}
    } else if (enemies2.health>0){
      for (i = 0; i < gunpewpew2.length; i++) {
   gunpewpew2[i].y += gunpewpew2[i].ySpeed;
   image(imgBullet,
 gunpewpew2[i].x,
 gunpewpew2[i].y,
   );
   if(player.health>0){
       let xDiff5=player.x-gunpewpew2[i].x;
       let yDiff5=player.y-gunpewpew2[i].y;
       let playerDistance3=sqrt(xDiff5*xDiff5+yDiff5*yDiff5);
       if (playerDistance3<10/2+25/2&&player.health>0){
           player.health-=14;
       }
      }
    }
    } else if (bossP1.health>0){
      for (i = 0; i < gunpewpew3.length; i++) {
        gunpewpew3[i].y += gunpewpew3[i].ySpeed;
        image(imgBullet,
      gunpewpew3[i].x,
      gunpewpew3[i].y,
        );
        if(player.health>0){
            let xDiff5=player.x-gunpewpew3[i].x;
            let yDiff5=player.y-gunpewpew3[i].y;
            let playerDistance3=sqrt(xDiff5*xDiff5+yDiff5*yDiff5);
            if (playerDistance3<10/2+25/2&&player.health>0){
                player.health-=20;
            }
           }
         }


         for (i = 0; i < beam.length; i++) {
          beam[i].y += beam[i].ySpeed;
          image(Pillar, 
        beam[i].x,
        beam[i].y,
          );
          if(player.health>0){
              let xDiff5=player.x-beam[i].x;
              let yDiff5=player.y-beam[i].y;
              let playerDistance3=sqrt(xDiff5*xDiff5+yDiff5*yDiff5);
              if (playerDistance3<10/2+25/2&&player.health>0){
                  player.health-=20;
              }
             }
           }

    } else if(bossP2.health >0){
      for (i = 0; i < gunpewpew4.length; i++) {
        gunpewpew4[i].y += gunpewpew4[i].ySpeed;
        image(bomb,
      gunpewpew4[i].x-40,
      gunpewpew4[i].y-40,
      
        );
        if(player.health>0){
            let xDiff5=player.x-gunpewpew4[i].x;
            let yDiff5=player.y-gunpewpew4[i].y;
            let playerDistance3=sqrt(xDiff5*xDiff5+yDiff5*yDiff5);
            if (playerDistance3<10/2+25/2&&player.health>0){
                player.health-=50;
            }
           }
         }
     
   


   for (i = 0; i < beam.length; i++) {
    beam2[i].y += beam2[i].ySpeed;
    image(Pillar, 
  beam2[i].x,
  beam2[i].y,
    );
    if(player.health>0){
        let xDiff5=player.x-beam2[i].x;
        let yDiff5=player.y-beam2[i].y;
        let playerDistance3=sqrt(xDiff5*xDiff5+yDiff5*yDiff5);
        if (playerDistance3<10/2+25/2&&player.health>0){
            player.health-=15;
        }
       }
     }
    }
    console.log(player.health);
  } else {
    background(bg2);

    if(keyIsDown(82)){
      player.health=100;
      enemies.health = 100;
      enemies2.health = 100;
      bossP1.health = 2000;
      bossP2.health = 2000;
    }
  }

rect(width/2-70,860,player.health,30);
fill("red");


if(enemies.health >0){
  rect(enemies.x-90/2,enemies.y-20,enemies.health,10);
} else if(enemies2.health >0){
  rect(enemies2.x-45/2,enemies2.y-20,enemies2.health,10);
} else if(bossP1.health >0){
  rect(width/4,30,bossP1.health/6,40);
} else {
rect(width/4,30,bossP2.health/6,40);
}
    }










function keyPressed() {
  if (keyCode == 32) {
    friendlyProjectiles.push({
      x: player.x,
      y: player.y,
      size: 10,
      ySpeed: -5,
      damage: 1,
    });
  } 

}

function enemyGun(){
  gunpewpew.push({
      x:enemies.x,
      y:enemies.y,
      ySpeed:10,
  })      
}

function enemyGun2(){
  gunpewpew2.push({
      x:enemies2.x,
      y:enemies2.y,
      ySpeed:10,
  })      
}

function enemyGun3(){
  gunpewpew3.push({
      x:bossP1.x,
      y:bossP1.y,
      ySpeed:10,
  })      
}

function enemyGun4(){
  gunpewpew4.push({
      x:bossP2.x,
      y:bossP2.y,
      ySpeed:10,
      size: 80,
  })      
}


function pillar1(){
   beam.push({
      x:pillarSet.x,
      y:pillarSet.y,
      ySpeed:-10,
      lastShot:0,
  firerate:350,
  size: 80
  })      
}

function pillar2(){
  beam2.push({
     x:pillar2.x,
     y:pillar2.y,
     ySpeed:-10,
     size: 80,
 })      
}
