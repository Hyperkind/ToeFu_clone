// create a single global variable
//When a variable name is in all caps, it is a constant
window.ToeFu_Clone = {

  ASSETS : {},

  STATGE : {
    WIDTH : 900,
    HEIGHT : 600
  },

  STAGE_ID : 'game', //the div in index.html to render the game

  STATES : {
    BOOT: 'Boot',
    GAME: 'Game'
  }

};

// Load Phaser on window load
window.onLoad = function() {
  ToeFu_Clone.game = new Phaser.Game( ToeFu_Clone.STAGE.WIDTH, ToeFu_Clone.STAGE.HEIGHT,
  Phaser.AUTO, ToeFu_Clone.STAGE_ID);

  ToeFu_Clone.game.state.add( ToeFu_Clone.STATES.BOOT, ToeFu_Clone.Boot);
  ToeFu_Clone.game.state.add( ToeFu_Clone.STATES.GAME, ToeFu_Clone.Game);
  ToeFu_Clone.game.state.start( ToeFu_Clone.STATES.BOOT);
};