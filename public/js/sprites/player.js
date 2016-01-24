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

  function select_sprite_row (player_id) {
    return function (frame_id) {
      return frame_id + player_id * ToeFu_Clone.ASSETS.SPRITESHEET.PLAYER.frames_per_row;
    };
  }

  // sprite class constructor
  // @id is 0 index based
  ToeFu_Clone.Player = function (game, id, name) {
    this.game = game;
    this.id = id;
    this.name = name? name : 'Player ' + (id+1);
    this.facing; // direction that player is facing, state updates this

    // super constructor call
    Phaser.Sprite.call(this, game, 0, 0, ToeFu_Clone.ASSETS.SPRITESHEET.PLAYER.name);

    // set center registration point
    this.anchor = { x : 0.5, y : 0.5};

    this.animations.add(ANIMATIONS.IDLE.name, ANIMATIONS.IDLE.frames.map(select_sprite_row(this.id)));

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

  // Input actions
  ToeFu_Clone.Player.prototype.jump = function ( ) {

  };

  ToeFu_Clone.Player.prototype.dive = function ( ) {

  };

  ToeFu_Clone.Player.prototype.dive_stop = function ( ) {

  };

  ToeFu_Clone.Player.prototype.step_left = function ( ) {

  };

  ToeFu_Clone.Player.prototype.step_right = function ( ) {

  };

  // stop stepping left or right
  ToeFu_Clone.Player.prototype.stop = function ( ) {

  };

})();

