function Board(rows, columns) {
    var rows = rows;
    var columns = columns;
    var grid = rows * columns;
    this.getGridCount = function () {
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
function createBoard(rwCnt, colCnt) {
    var myBoard = new Board(rwCnt, colCnt);
    var theCount = myBoard.getGridCount();
    myBoard.buildBoard(theCount);
    console.log(theCount);
}
//function Game() {
//    game_id
//    status not_started, started, paused, complete
//    start_time
//    end_time
//    player
//    move_count
//}
function sharePointReady() {
    console.log("sharePointRead has fired");
    var value = SP.UserProfiles.PersonProperties.get_displayName();
    console.log(value);
    console.log("This isn't working");
}
function getUserInfo() {
    SP.SOD.executeFunc("SP.UserProfiles.js", "SP.Runtime.js", "SP.js", "SP.ClientContext");
    sharePointReady();
    console.log("getUserInfo has fired");
}
function init() {
    //create a sample board on app opening
    //show a board
    //show controls - new game or existing game
    createBoard(4, 4);
    getUserInfo();
    //create a new game when the user selects new game
}
