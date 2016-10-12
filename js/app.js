
var enemyX1=Math.random(); var enemyY1=Math.random()+80;
var enemyX2=Math.random()*10; var enemyY2=enemyY1+100;
var enemyX3=Math.random()*20; var enemyY3=enemyY1+110;
var enemyX4=Math.random()*30; var enemyY4=enemyY1+130;
var enemyX5=Math.random()*40; var enemyY5=enemyY1+120;
var enemyX6=Math.random()*50; var enemyY6=enemyY1+140;

// Enemies our player must avoid
var Enemy = function(x,y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
	
	 this.x = x;
	 this.y = y;
	
	 this.speed=Math.random()*200+10;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
	
	//this.x = this.x + this.speed * dt;
	if (this.x < 505) {
        this.x += (this.speed * dt);
    }
    else {this.x = -90;}
	
	//this.y = this.y + this.speed * dt;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(){
	 this.sprite = 'images/char-boy.png';
	 this.x = Math.random()*200+38;
	 this.y = Math.random()*200+38;
	//location.reload();
};
Player.prototype.update = function(){
	
};
Player.prototype.render = function(){
	
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
	
};
Player.prototype.handleInput = function(direction){
	 if(direction == 'left' && this.x > 0) {
        this.x -= 50;
    }
    if(direction == 'right' && this.x < 400) {
        this.x += 50;
    }
    if(direction == 'up' && this.y > 0.5) {
        this.y -= 50;
    }
    if(direction == 'down' && this.y < 388) {
        this.y += 50;
    }
};
var player = new Player();

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

//var allEnemies = [new Enemy()];
/*var allEnemies = [];
var enemy = new Enemy();
for (var i = 0; i < Math.random(); i++) {
    allEnemies.push(enemy);
}*/

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
/*var enemyX1=-90; var enemyY1=60;
var enemyX2=-190; var enemyY2=140;
var enemyX3=-290; var enemyY3=230;
var enemyX4=-390; var enemyY4=140;
var enemyX5=-490; var enemyY5=60;
var enemyX6=-590;var enemyY6=230;*/



var enemy1 = new Enemy(enemyX1, enemyY1);
var enemy2 = new Enemy(enemyX2, enemyY2);
var enemy3 = new Enemy(enemyX3, enemyY3);
var enemy4 = new Enemy(enemyX4, enemyY4);
var enemy5 = new Enemy(enemyX5, enemyY5);
var enemy6 = new Enemy(enemyX6, enemyY6);






var allEnemies = [enemy1, enemy2, enemy3, enemy4, enemy5, enemy6];

