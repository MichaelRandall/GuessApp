function Board(rows, columns) {
    var rows = rows;
    var columns = columns;
    var grid = rows * columns;
    this.getGridCount = function(){
        return grid;
    };
    this.buildBoard = function (gridsCnt) {
        var theBoard = document.getElementById('game_board');
        var theGrids = "";
        for (var i = 1; i <= gridsCnt; i++) {
            var newDiv = document.createElement('div');
            newDiv.setAttribute('id', i);
            newDiv.setAttribute('class', 'tiles');
            var newText = document.createTextNode(i);
            newDiv.appendChild(newText);
            theBoard.appendChild(newDiv);
        }
    }
}

function createBoard(rwCnt, colCnt){
    var myBoard = new Board(rwCnt,colCnt);
    var theCount = myBoard.getGridCount();
    myBoard.buildBoard(theCount);
    console.log(theCount);
}
