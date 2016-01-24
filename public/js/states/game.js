// The Game state
// handles sprite creation and game logic
(function() {

  var INITIAL_POSITIONS = [
    // player 1
    { x : 100, y : 100 },
    // player 2
    { x : 800, y : 100 }
  ];

  // class constructor
  ToeFu_Clone.Game = function() {

    this.player_1;
    this.player_2;

  };

  ToeFu_Clone.Game.prototype.create = function() {

    this.player_1 = new ToeFu_Clone.Player( this.game, 0);
    this.player_2 = new ToeFu_Clone.Player( this.game, 1);
    this.game.add.existing(this.player_1);
    this.game.add.existing(this.player_2);

    // position players
    this.player_1.x = INITIAL_POSITIONS[0].x;
    this.player_1.y = INITIAL_POSITIONS[0].y;
    this.player_2.x = INITIAL_POSITIONS[1].x;
    this.player_2.y = INITIAL_POSITIONS[1].y;

    // initialize input handler
    this.input = new ToeFu_Clone.GameInput(this);

  };

  ToeFu_Clone.Game.prototype.update = function() {

    // set facing direction
    if ( this.player_1.x < this.player_2.x ){ // player 1 is on the left side
      this.player_1.facing = ToeFu_Clone.Player.FACING.RIGHT;
      this.player_2.facing = ToeFu_Clone.Player.FACING.LEFT;
    } else { // player 1 is on the right side
      this.player_1.facing = ToeFu_Clone.Player.FACING.LEFT;
      this.player_2.facing = ToeFu_Clone.Player.FACING.RIGHT;
    }

  };

  ToeFu_Clone.Game.prototype.shutdown = function() {

  };

  // Input actions
  ToeFu_Clone.Game.prototype.continue = function() {

  };

})();