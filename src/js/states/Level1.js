// Level 1. You can add more levels to your games and start the levels whatever you want 
// by calling this.state.start('LevelX');

var Level1 = function() {};

Level1.prototype = {

  preload: function() {

    console.log('Level1');
  },

  create: function() {

  	var logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
    logo.anchor.setTo(0.5, 0.5);
  },

  update: function() {
 
  },

  render: function() {
    
  },

}

module.exports = Level1;
