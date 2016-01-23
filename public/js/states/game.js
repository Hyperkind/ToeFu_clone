// The Game state
//    handles sprite creation and game logic

// class constructor
ToeFu_Clone.Game = function() {

  this.player_1;

};

ToeFu_Clone.Game.prototype.create = function() {

  this.player_1 = new ToeFu_Clone.Player( this.game, 0);
  this.game.add.existing(this.player_1);

};

ToeFu_Clone.Game.prototype.update = function() {

};

ToeFu_Clone.Game.prototype.shutdown = function() {

};