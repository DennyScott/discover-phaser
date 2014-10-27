//We create our only state
var mainState = {

	// Here we add all the functions we need for our state
	// For this project we will just have 3 functions

	preload: function() {
		// This function will be executed at the beginning 
		// That's where we load the game's assets

		game.load.image('player', 'assets/player.png');

	},
	create: function() {
		// This function is called after the preload function
		//  Here we set up the game, display sprites, etc.

		game.physics.startSystem(Phaser.Physics.ARCADE);
		game.stage.backgroundColor = '#3498db';

		//Create a local variable
		this.player = game.add.sprite(game.world.centerX, game.world.centerY, 'player');
		this.player.anchor.setTo(0.5, 0.5);

		//Tell Phaser that the player will use the Arcade physics engine
		game.physics.arcade.enable(this.player);

		//Add vertical gravity to the player
		this.player.body.gravity.y = 500;

		this.cursor = game.input.keyboard.createCursorKeys();
	},

	update: function() {
		// This function is called 60 times per second 
		// It contains the game's logic

		this.movePlayer();
	},

	movePlayer: function() {
		//If the left arrow key is pressed
		if (this.cursor.left.isDown) {
			//Move the player to the left
			this.player.body.velocity.x = -200;
		}

		//If the right arrow key is pressed
		else if (this.cursor.right.isDown) {
			//Move the player to the right
			this.player.body.velocity.x = 200;
		}

		//If neither the right or left arrow key is pressed
		else {
			//Stop the player
			this.player.body.velocity.x = 0;
		}

		//If the up arrow key is pressed and the player is touching the ground
		if (this.cursor.up.isDown && this.player.body.touching.down) {
			//Move the player upward (jump)
			this.player.body.velocity.y = -320;
		}
	},

};



// We initialising Phaser
var game = new Phaser.Game(500, 340, Phaser.AUTO, 'gameDiv');


// And finally we tell Phaser to add and start our 'main' state
game.state.add('main', mainState);
game.state.start('main');