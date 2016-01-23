(function () {

  // private static variables
  var ANIMATIONS = {
    IDLE : {
      name : 'idle',
      frames : [0,1,2,3],
      fps : 5
    }
  };

  var FACING_FACTOR = {
    LEFT : -1,
    RIGHT : 1
  };

  // sprite class constructor
  ToeFu_Clone.Player = function (game, id, name) {
    this.game = game;
    this.id = id;
    this.name = name? name : 'Player ' + (id+1);
    this.facing; // direction that player is facing, state updates this

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

  // public static variable
  ToeFu_Clone.Player.FACING = {
    LEFT : 'LEFT',
    RIGHT : 'RIGHT'
  };

  // is invoked on every frame
  ToeFu_Clone.Player.prototype.update = function () {

    // update facing
    this.scale.x = FACING_FACTOR[ this.facing ];

  };

})();

