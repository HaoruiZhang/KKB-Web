function showNumberWithAnimation(X, Y, i) {

    var currentNode1 = document.getElementById("numberCell-" + X + "-" + Y);
    currentNode1.style.backgroundColor = getBackGroundColor(i);
    currentNode1.style.color = getFontColor(i);
    currentNode1.style.top = getPosTop(X, Y);
    currentNode1.style.left = getPosLeft(X, Y);
    currentNode1.innerText = i;

    var length = 0;
    var id = setInterval(frame, 2);

    function frame() {
        if (length == 100) {
            clearInterval(id);
        } else {
            length++;
            currentNode1.style.width = length + "px";
            currentNode1.style.height = length + "px";
            currentNode1.style.top = getPosTop(X, Y);
            currentNode1.style.left = getPosLeft(X, Y);
        }
    }
}
/*/ ////////////
function showNumberWithAnimationJQ(X, Y, i) {

    var currentNode1 = document.getElementById("numberCell-" + X + "-" + Y);
    currentNode1.style.backgroundColor = getBackGroundColor(i);
    currentNode1.style.color = getFontColor(i);
    currentNode1.style.top = getPosTop(X, Y);
    currentNode1.style.left = getPosLeft(X, Y);
    currentNode1.innerText = i;

    currentNode1.animate({
        width: 100,
        height: 100,
        top: getPosTop(X, Y) + 50,
        left: getPosLeft(X, Y) + 50

    }, 250);

}
//////////
*/



function showMoveAnimation(fromX, fromY, toX, toY) {
    var currentNode1 = document.getElementById("numberCell-" + fromX + "-" + fromY);
    currentNode1.animate({
        top: getPosTop(toX, toY),
        left: getPosLeft(toX, toY)
    }, 350);
}



function updateScore(score) {
    $('#score').text(score);
}
/*
function showMoveAnimation(fromX, fromY, toX, toY) {
    var currentNode1 = document.getElementById("numberCell-" + fromX + "-" + fromY);
    var nowTop = getPosTop(fromX, fromY);
    var nowLeft = getPosLeft(fromX, fromY);
    var toTop = getPosTop(toX, toY);
    var toLeft = getPosLeft(toX, toY);

    if (nowTop == toTop) {
        var horizontalLength = toLeft - nowLeft;
        var horizonStepLength = horizontalLength > 0 ? 1 : -1;
        var id1 = setInterval(frame1, 2);

        function frame1() {
            if (nowLeft == toLeft) {
                clearInterval(id1);
            } else {
                nowLeft += horizonStepLength;
                currentNode1.style.left = nowLeft;
            }
        }
    } else if (nowLeft == toLeft) {
        var tubeLength = toTop - nowTop;
        var tubeStepLength = tubeLength > 0 ? 1 : -1;
        var id2 = setInterval(frame2, 2);

        function frame2() {
            if (toTop == nowTop) {
                clearInterval(id2);
            } else {
                nowTop += tubeStepLength;
                currentNode1.style.top = nowTop;
            }
        }
    }
} */