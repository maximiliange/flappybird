// Global vars
var game_width = 790;
var game_height = 400;
// the Game object used by the phaser.io library
var stateActions = { preload: preload, create: create, update: update };

// Phaser parameters:
// - game width
// - game height
// - renderer (go for Phaser.AUTO)
// - element where the game will be drawn ('game')
// - actions on the game state (or null for nothing)
var game = new Phaser.Game(game_width, game_height, Phaser.AUTO, 'gamey', stateActions);
//var playerImg =



/*
 * Loads all resources for the game and gives them names.
 */

function preload() {
    game.load.image("playerImg", "assets/flappy_batman.png");
}

/*
 * Initialises the game. This function is only called once.
 */

function create() {
    // set the background colour of the scene
    game.stage.setBackgroundColor("#A3D3D3");
    game.add.text(100,200,"Welcome to my super duper game",
        { font: "30px Arial",
            fill: "#ff0000"}
    );

    game.add.sprite(0, 0, "playerImg");
    game.add.sprite(game_width - 50, 0, "playerImg");
    game.add.sprite(0, game_height - 50, "playerImg");
    game.add.sprite(game_width - 50, game_height - 50, "playerImg");



    game.input.onDown.add(clickHandler);
}

/*
 * This function updates the scene. It is called for every new frame.
 */
function update() {
}

function clickHandler(event){
    var image = game.add.sprite(event.x, event.y, "playerImg");
    image.anchor.set(0.5);
}



