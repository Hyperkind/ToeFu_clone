(function () {

  // private static variables
  var ANIMATIONS = {
    IDLE : {
      name : 'idle',
      frames : [0,1,2,3],
      fps : 5
    }
  };

  // sprite class constructor
  ToeFu_Clone.Player = function (game, id, name) {
    this.game = game;
    this.id = id;
    this.name = name? name : 'Player ' + (id+1);

    // super constructor call
    Phaser.Sprite.call(this, game, 0, 0, ToeFu_Clone.ASSETS.SPRITESHEET.PLAYER.name);

    // set animations
    this.animations.add(ANIMATIONS.IDLE.name, ANIMATIONS.IDLE.frames);

    // play the initial animation
    this.animations.play(ANIMATIONS.IDLE.name, ANIMATIONS.IDLE.fps, true);
  };

  // extend Sprite prototype
  ToeFu_Clone.Player.prototype = Object.create(Phaser.Sprite.prototype, {
    constructor: {
      value: ToeFu_Clone.Player
    }
  });

})();

