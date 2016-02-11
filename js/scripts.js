function Player(mark) {
  this.mark = mark;
}

function Space(x,y) {
  this.x_coordinate = x;
  this.y_coordinate = y;
  this.player = " ";
}

Space.prototype.markedBy = function(player) {
  this.player = player;
  return this.player;
};

function Board() {
  this.tictac_array = [];
}

Board.prototype.new_game = function() {
  for (var i = 1; i < 4; i += 1) {
    $(".tictactoe-board").append('<div class="board-row' + ' ' + i + '">');
    for (var j = 1; j < 4; j += 1) {
      test = $(".board-row." + i).append('<div class="board-cell cell-' + i +'-' + j + '">' + "&nbsp" +'</div>');
      var new_space = new Space(i,j);
      this.tictac_array.push(new_space);
    }
  }
}

Board.prototype.clear = function() {
  var i = 1;
  $(".tictactoe-board").remove('<div class="board-row' + ' ' + i + '">');
}

$(document).ready(function() {
  $("form#new-game").submit(function(event) {
    event.preventDefault();
    new_board = new Board();
    new_board.new_game();
  });
});
