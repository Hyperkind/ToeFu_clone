// Responsible for
//  preloading assets
//  and switching to the game state

//class constructor
ToeFu_Clone.Boot = function() {

};

ToeFu_Clone.Boot.prototype.preload = function() {
  // will preload all assets
};

ToeFu_Clone.Boot.prototype.create = function() {

  // switch to game state
  this.state.start( ToeFu_Clone.STATES.GAME);

};