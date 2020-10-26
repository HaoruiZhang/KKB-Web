var board = new Array();
var score = 0;

document.addEventListener("DOMContentLoaded", function() {
    newGame();
});

// Handler when the DOM is fully loaded);

function newGame() {
    //初始化棋盘格；
    init();
    //随机生成两个数字：
    generateNewNumber();
    generateNewNumber();

}

function init() {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            var currentID = "gridCell-" + i + "-" + j;
            var currentBlock = document.getElementById(currentID);
            currentBlock.style.left = getPosLeft(i, j);
            currentBlock.style.top = getPosTop(i, j);
        }
    }

    for (var i = 0; i < 4; i++) {
        board[i] = new Array();
        for (var j = 0; j < 4; j++) {
            board[i][j] = 0;
            //document.getElementById("gridCell-" + i + "-" + j).style.backgroundColor = "black";
        }
    }
    //board[0][2] = 0;
    //board[1][2] = 512;
    //board[2][3] = 256;
    updateBoardView();
    score = 0;
}

function updateBoardView() {
    //var numberCells = document.getElementsByClassName(".numberCell");
    var numberCells = document.querySelectorAll(".numberCell");
    for (var i = 0; i < numberCells.length; i++) {
        //删除元素.parentNode.removeChild(元素);
        if (numberCells[i] != null) { numberCells[i].parentNode.removeChild(numberCells[i]); }

    }

    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            var currentNode = document.createElement("div");
            //currentNode.setAttribute("id", "numberCell" + i + "-" + j);
            currentNode.id = "numberCell-" + i + "-" + j;
            currentNode.className = "numberCell";
            //currentNode.setAttribute("class", "numberCell");
            var newText = document.createTextNode(board[i][j]);
            currentNode.appendChild(newText);
            document.getElementById("bigBlock").appendChild(currentNode);

            if (board[i][j] == 0) {
                currentNode.removeChild(newText);
                currentNode.style.width = 0;
                currentNode.style.height = 0;
                currentNode.style.left = getPosLeft(i, j) + 50;
                currentNode.style.top = getPosTop(i, j) + 50;

            } else {
                currentNode.style.width = "100px";
                currentNode.style.height = "100px";
                currentNode.style.left = getPosLeft(i, j);
                currentNode.style.top = getPosTop(i, j);
                currentNode.style.backgroundColor = getBackGroundColor(board[i][j]);
                currentNode.style.color = getFontColor(board[i][j]);
                //currentNode.innerText = board[i][j];
            }

        }
    }
}

function generateNewNumber() {
    //判断是否还有位置:
    if (noSpace()) { return false; }
    //随机生成两个位置：
    var randX = parseInt(Math.floor(Math.random() * 4));
    var randY = parseInt(Math.floor(Math.random() * 4));

    //判断位置是否可用：
    while (true) {
        if (board[randX][randY] == 0) {
            break;
        }
        var randX = parseInt(Math.floor(Math.random() * 4));
        var randY = parseInt(Math.floor(Math.random() * 4));
    }

    //随机生成2或4:
    var newNumber = Math.random() > 0.5 ? 2 : 4;

    //显示新生成的数：
    board[randX][randY] = newNumber;
    showNumberWithAnimation(randX, randY, board[randX][randY]);

}

document.onkeydown = function(e) { //对整个页面文档监听 
    var keyNum = window.event ? e.keyCode : e.which; //获取被按下的键值 
    //判断如果用户按下了回车键（keycody=13）

    if (keyNum == 35) {
        alert('您按下了回车');
    }

    //判断如果用户按下了空格键(keycode=32)， 
    if (keyNum == 32) {
        alert('您按下了空格');
    }


    /*$(function() {
        $('#entry').on('keyup', function(e) {
            if (e.which == 13) someotherFunction(this.value);
        });
    });
    */

    //$(document).ready(function() {
    //$(document).keydown(function(event) {
    //alert(event.keyCode);
    //var keyCode = event.keyCode;
    switch (keyNum) {
        case 37: //left
            //document.getElementById("hhh1").innerHTML = "black";
            if (moveLeft()) {
                generateNewNumber();
                isGameOver();
            }
            break;
        case 38: //up
            if (moveUp()) {
                generateNewNumber();
                isGameOver();
            }
            break;
        case 39:
            //right
            if (moveRight()) {
                generateNewNumber();
                isGameOver();
            }
            break;
        case 40:
            if (moveDown()) {
                generateNewNumber();
                isGameOver();
            }
            break;
        default:
            break;
    }
};


function moveLeft() {
    if (!canMoveLeft(board)) {
        return false;
    }

    for (var i = 0; i < 4; i++) {
        for (var j = 1; j < 4; j++) {
            if (board[i][j] != 0) {
                for (var k = 0; k < j; k++) {
                    if (board[i][k] == 0 && noBlockHorizon(j, k, i, board)) {
                        //MoveLeft;
                        showMoveAnimation(i, j, i, k);
                        board[i][k] = board[i][j];
                        board[i][j] = 0;

                        continue;
                    } else if (board[i][k] == board[i][j] && noBlockHorizon(i, k, j, board)) {
                        //add
                        showMoveAnimation(i, j, i, k);
                        board[i][k] += board[i][j];
                        board[i][j] = 0;
                        score += board[i][k];
                        updateScore(score);
                        continue;
                    }
                }
            }
        }
    }
    setTimeout("updateBoardView()", 350);
    return true;
}

function moveUp() {
    if (!canMoveUp(board)) {
        return false;
    }

    for (var i = 1; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (board[i][j] != 0) {
                for (var k = 0; k < i; k++) {
                    if (board[k][j] == 0 && noBlockVertical(j, k, i, board)) {
                        //MoveLeft;
                        showMoveAnimation(i, j, k, j);
                        board[k][j] = board[i][j];
                        board[i][j] = 0;

                        continue;
                    } else if (board[k][j] == board[i][j] && noBlockVertical(j, k, i, board)) {
                        //add
                        showMoveAnimation(i, j, k, j);
                        board[k][j] += board[i][j];
                        board[i][j] = 0;
                        score += board[k][j];
                        updateScore(score);
                        continue;
                    }
                }
            }
        }
    }
    setTimeout("updateBoardView()", 350);
    return true;
}

function moveDown() {
    if (!canMoveDown(board)) {
        return false;
    }

    for (var i = 2; i > -1; i--) {
        for (var j = 0; j < 4; j++) {
            if (board[i][j] != 0) {
                for (var k = 3; k > i; k--) {
                    if (board[k][j] == 0 && noBlockVerticalToUp(j, i, k, board)) {
                        //MoveLeft;
                        showMoveAnimation(i, j, k, j);
                        board[k][j] = board[i][j];
                        board[i][j] = 0;

                        continue;
                    } else if (board[k][j] == board[i][j] && noBlockVerticalToUp(j, i, k, board)) {
                        //add
                        showMoveAnimation(i, j, k, j);
                        board[k][j] += board[i][j];
                        board[i][j] = 0;
                        score += board[k][j];
                        updateScore(score);
                        continue;
                    }
                }
            }
        }
    }
    setTimeout("updateBoardView()", 350);
    return true;
}


function moveRight() {
    if (!canMoveRight(board)) {
        return false;
    }

    for (var i = 0; i < 4; i++) {
        for (var j = 2; j > -1; j--) {
            if (board[i][j] != 0) {
                for (var k = 3; k > j; k--) {
                    if (board[i][k] == 0 && noBlockInRight(i, j, k, board)) {
                        //MoveLeft;
                        showMoveAnimation(i, j, i, k);
                        board[i][k] = board[i][j];
                        board[i][j] = 0;

                        continue;
                    } else if (board[i][k] == board[i][j] && noBlockInRight(i, j, k, board)) {
                        //add;
                        showMoveAnimation(i, j, i, k);
                        board[i][k] += board[i][j];
                        board[i][j] = 0;
                        score += board[i][k];
                        updateScore(score);
                        continue;
                    }
                }
            }
        }
    }
    setTimeout("updateBoardView()", 350);
    return true;
}

function isGameOver() {}