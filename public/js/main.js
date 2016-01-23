// create a single global variable

window.ToeFu_Clone = {

  ASSETS : {},

  STAGE : {
    WIDTH : 900,
    HEIGHT : 600
  },

  STAGE_ID : 'game', // the div in index.html to render this game

  STATES : {
    BOOT : 'Boot',
    GAME : 'Game'
  }

};

// load Phaser on window load
window.onload = function(){
  ToeFu_Clone.game = new Phaser.Game( ToeFu_Clone.STAGE.WIDTH, ToeFu_Clone.STAGE.HEIGHT, Phaser.AUTO, ToeFu_Clone.STAGE_ID );
  ToeFu_Clone.game.state.add( ToeFu_Clone.STATES.BOOT, ToeFu_Clone.Boot );
  ToeFu_Clone.game.state.add( ToeFu_Clone.STATES.GAME, ToeFu_Clone.Game );
  ToeFu_Clone.game.state.start(ToeFu_Clone.STATES.BOOT);
};