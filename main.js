
var background;
var player;

var config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 100 }
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload() {

    this.load.image('sky', 'backgroundsoil.svg');
    this.load.image('player', 'download.png');
    this.load.image('crosshair','crosshair.png')
    

}

function create() {
     background = this.add.image(0, 0, 'sky').setOrigin(0, 0);
     if (window.innerHeight > window.innerWidth) {
        background.displayHeight = window.innerHeight;
        background.displayWidth = window.innerHeight;
        console.log("mobile");
    }
    else {
        background.displayHeight = window.innerWidth;
        background.displayWidth = window.innerWidth;
        console.log("pc");
    }
   //cro
     
     let canvas = this.sys.canvas;
     canvas.style.cursor = 'none';
    crosshair = this.add.image(-50,-50, 'crosshair');
    crosshair.setScale(0.3);
    player = this.physics.add.sprite(200,200,'player').setScale(0.3);
    
    player.setBounce(1);
    player.setCollideWorldBounds(true);

    movementKeys = this.input.keyboard.createCursorKeys();

    input = this.input;

}
function update() {
    //movement
    if(movementKeys.left.isDown){
        player.setX(player.x-3);
    }

    if(movementKeys.right.isDown){
        player.setX(player.x+3);
    }

    if(movementKeys.up.isDown){
        player.setY(player.y-3);
    }

    if(movementKeys.down.isDown){
        player.setY(player.y+3);
    }

    crosshair.x = input.x;
    crosshair.y = input.y;
}

