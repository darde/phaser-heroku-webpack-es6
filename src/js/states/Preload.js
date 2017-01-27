var Preload = function(){};

Preload.prototype = {

  preload: function() {

    // Preload assets here...
    this.game.load.image('logo', '../../assets/sprites/phaser.png');
  },

  create: function() {

  	// call level one here...
    this.state.start('Level1');
  }
}

module.exports = Preload;