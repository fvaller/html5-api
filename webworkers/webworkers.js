
var i = 0;

function timedCount() {
    i = i + 1000;
    postMessage(i);
    setTimeout("timedCount()",500);
}

timedCount(); 



