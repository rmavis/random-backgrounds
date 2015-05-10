function BackgroundLoader() {

    this.callGrid = function() {
        new Grid();
    };

    this.callCircles = function() {
        new Circles();
    };

    this.callSquares = function() {
        new Squares();
    };



    if (randone()) {
        if (randone()) {this.callSquares();}
        else {this.callCircles();}
    }
    else {this.callGrid();}
}



// Clipped these from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random?redirectlocale=en-US&redirectslug=JavaScript%2FReference%2FGlobal_Objects%2FMath%2Frandom
function randInt(min, max) {
    return Math.floor(this.randNum(min, max));
}
function randNum(min, max) {
    return Math.random() * (max - min) + min;
}



function randVal(min, max, zeroOk) {
    zeroOk = (zeroOk) ? true : false;
    var val = 0;

    val = ((isInt(min)) && (isInt(max)))
        ? randInt(min, max)
        : randNum(min, max);

    if (val == 0) {
        if (zeroOk) {return val;}
        else {return randVal(min, max);}
    }
    else {
        if (randone()) {return -val;}
        else {return val;}
    }
}



// Clipped this from http://stackoverflow.com/questions/3885817/how-to-check-if-a-number-is-float-or-integer
function isInt(n) {
    return n % 1 === 0;
}



// This will be a random boolean.
function randone() {
    return (Math.round(Math.random()) == 1);
}
