var Boot = function() {}

Boot.prototype = {

  preload: function() {
    
    // load assets here...
  },

  create: function() {

    this.game.stage.backgroundColor = '#787878';

    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    // call preload state here...
    this.state.start('Preload');
  }
}


module.exports = Boot;