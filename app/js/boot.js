var bootState = {
	preload: function() {
		//Load the Image
		game.load.image('progressBar', 'assets/progressBar.png');
	},

	create: function() {
		//Set some game settings
		game.stage.backgroundColor = '#3498db';
		game.physics.startSystem(Phaser.Physics.ARCADE);

		//Start the load state
		game.state.start('load');
	}
};