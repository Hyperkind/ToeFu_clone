// Responsible for
//  preloading assets
//  and switching to the game state

//class constructor
ToeFu_Clone.Boot = function() {

};

ToeFu_Clone.Boot.prototype.preload = function() {
//autoload each asset by type
  Object.keys(ToeFu_Clone.ASSETS).forEach(function(type) {
    for(var asset in ToeFu_Clone.ASSETS[type]) {
      ToeFu_Clone.game.load[ type.toLowerCase() ](
        ToeFu_Clone.ASSETS[type][ asset ].name,
        ToeFu_Clone.ASSETS[type][ asset ].path,
        ToeFu_Clone.ASSETS[type][ asset ].width,
        ToeFu_Clone.ASSETS[type][ asset ].height,
        ToeFu_Clone.ASSETS[type][ asset ].frames
      );
    }
  });

};

ToeFu_Clone.Boot.prototype.create = function() {

  // switch to game state
  this.state.start( ToeFu_Clone.STATES.GAME);

};