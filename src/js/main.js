var ObjGame = ObjGame || {};

ObjGame.map = null;
ObjGame.layer = null;
ObjGame.backgroundlayer = null;
ObjGame.blockedLayer = null;
ObjGame.Boot = require('./states/Boot');
ObjGame.Preload = require('./states/Preload');
ObjGame.Level1 = require('./states/Level1');

ObjGame.game = new Phaser.Game(
  800,
  600,
  Phaser.CANVAS,
  'app',
  null,
  false,
  false
);

ObjGame.game.state.add('Boot', ObjGame.Boot);

ObjGame.game.state.add('Preload', ObjGame.Preload);

ObjGame.game.state.add('Level1', ObjGame.Level1);

ObjGame.game.state.start('Boot');