// Задание 9
// создаём counts для переключения режима светофора из работающего в пешеходный
var counts = 0;
// создаём counti для переключения цвета светофора
var counti = 0;
// создаём функцию для переназначения counts в setTimeout
var countf = function () {
    counts = 0;
}

// создаём функцию для перекрашивания светофора
var goSvetofor = function() {
    if (counti == 0 && counti !== 4) {
        // Верхний светофор
        var imgLeftUp = document.getElementById("imgLeftUp");
        var imgRightUp = document.getElementById("imgRightUp");
        
        imgLeftUp.className = "greenLightUpLeft";
        imgLeftUp.src = "jpeg/greenlight.png";
        imgRightUp.className = "redLightUpRight";
        imgRightUp.src = "jpeg/redlightright.png";

        uplight.appendChild(imgLeftUp);
        uplight.appendChild(imgRightUp);

        // Левый светофор
        var imgLeftLeft = document.getElementById("imgLeftLeft");
        var imgRightLeft = document.getElementById("imgRightLeft");

        imgLeftLeft.className = "greenLightLeftLeft";
        imgLeftLeft.src = "jpeg/greenlight.png";
        imgRightLeft.className = "redLightLeftRight";
        imgRightLeft.src = "jpeg/redlightright.png";

        leftlight.appendChild(imgLeftLeft);
        leftlight.appendChild(imgRightLeft);
        

        // Нижний светофор
        var imgLeftDown = document.getElementById("imgLeftDown");
        var imgRightDown = document.getElementById("imgRightDown");

        imgLeftDown.className = "greenLightDownLeft";
        imgLeftDown.src = "jpeg/greenlight.png";
        imgRightDown.className = "redLightDownRight";
        imgRightDown.src = "jpeg/redlightright.png";

        downlight.appendChild(imgLeftDown);
        downlight.appendChild(imgRightDown);

        // Правый светофор
        var imgLeftRight = document.getElementById("imgLeftRight");
        var imgRightRight = document.getElementById("imgRightRight");
        
        
        imgLeftRight.className = "greenLightUpLeft";
        imgLeftRight.src = "jpeg/greenlight.png";
        imgRightRight.className = "redLightUpRight";
        imgRightRight.src = "jpeg/redlightright.png";
        
        rightlight.appendChild(imgLeftRight);
        rightlight.appendChild(imgRightRight);
        
        counti++;
        countc = 1;
    } else if (counti == 1 && counti !== 4) {
        // Верхний светофор
        var imgLeftUp = document.getElementById("imgLeftUp");
        var imgRightUp = document.getElementById("imgRightUp");
        
        imgLeftUp.className = "yellowLightUpLeft";
        imgLeftUp.src = "jpeg/yellowlight.png";
        imgRightUp.className = "yellowLightUpRight";
        imgRightUp.src = "jpeg/yellowlightright.png";

        uplight.appendChild(imgLeftUp);
        uplight.appendChild(imgRightUp);

        // Левый светофор
        var imgLeftLeft = document.getElementById("imgLeftLeft");
        var imgRightLeft = document.getElementById("imgRightLeft");

        imgLeftLeft.className = "yellowLightLeftLeft";
        imgLeftLeft.src = "jpeg/yellowlight.png";
        imgRightLeft.className = "yellowLightLeftRight";
        imgRightLeft.src = "jpeg/yellowlightright.png";

        leftlight.appendChild(imgLeftLeft);
        leftlight.appendChild(imgRightLeft);

        // Нижний светофор
        var imgLeftDown = document.getElementById("imgLeftDown");
        var imgRightDown = document.getElementById("imgRightDown");

        imgLeftDown.className = "yellowLightDownLeft";
        imgLeftDown.src = "jpeg/yellowlight.png";
        imgRightDown.className = "yellowLightDownRight";
        imgRightDown.src = "jpeg/yellowlightright.png";

        downlight.appendChild(imgLeftDown);
        downlight.appendChild(imgRightDown);

        // Правый светофор
        var imgLeftRight = document.getElementById("imgLeftRight");
        var imgRightRight = document.getElementById("imgRightRight");
        
        
        imgLeftRight.className = "yellowLightRightLeft";
        imgLeftRight.src = "jpeg/yellowlight.png";
        imgRightRight.className = "yellowLightRightRight";
        imgRightRight.src = "jpeg/yellowlightright.png";
        
        rightlight.appendChild(imgLeftRight);
        rightlight.appendChild(imgRightRight);
        
        counti++;

    } else if (counti == 2 && counti !== 4) {
        // Верхний светофор
        var imgLeftUp = document.getElementById("imgLeftUp");
        var imgRightUp = document.getElementById("imgRightUp");
        
        imgLeftUp.className = "redLightUpLeft";
        imgLeftUp.src = "jpeg/redlight.png";
        imgRightUp.className = "greenLightUpRight";
        imgRightUp.src = "jpeg/greenlightright.png";

        uplight.appendChild(imgLeftUp);
        uplight.appendChild(imgRightUp);

        // Левый светофор
        var imgLeftLeft = document.getElementById("imgLeftLeft");
        var imgRightLeft = document.getElementById("imgRightLeft");

        imgLeftLeft.className = "redLightLeftLeft";
        imgLeftLeft.src = "jpeg/redlight.png";
        imgRightLeft.className = "greenLightLeftRight";
        imgRightLeft.src = "jpeg/greenlightright.png";

        leftlight.appendChild(imgLeftLeft);
        leftlight.appendChild(imgRightLeft);

        // Нижний светофор
        var imgLeftDown = document.getElementById("imgLeftDown");
        var imgRightDown = document.getElementById("imgRightDown");

        imgLeftDown.className = "redLightDownLeft";
        imgLeftDown.src = "jpeg/redlight.png";
        imgRightDown.className = "greenLightDownRight";
        imgRightDown.src = "jpeg/greenlightright.png";

        downlight.appendChild(imgLeftDown);
        downlight.appendChild(imgRightDown);

        // Правый светофор
        var imgLeftRight = document.getElementById("imgLeftRight");
        var imgRightRight = document.getElementById("imgRightRight");
        
        
        imgLeftRight.className = "redLightUpLeft";
        imgLeftRight.src = "jpeg/redlight.png";
        imgRightRight.className = "greenLightUpRight";
        imgRightRight.src = "jpeg/greenlightright.png";
        
        rightlight.appendChild(imgLeftRight);
        rightlight.appendChild(imgRightRight);
        
        counti++;
    }   else if (counti == 3 && counti !== 4) {
        // Верхний светофор
        var imgLeftUp = document.getElementById("imgLeftUp");
        var imgRightUp = document.getElementById("imgRightUp");
        
        imgLeftUp.className = "yellowLightUpLeft";
        imgLeftUp.src = "jpeg/yellowlight.png";
        imgRightUp.className = "yellowLightUpRight";
        imgRightUp.src = "jpeg/yellowlightright.png";

        uplight.appendChild(imgLeftUp);
        uplight.appendChild(imgRightUp);

        // Левый светофор
        var imgLeftLeft = document.getElementById("imgLeftLeft");
        var imgRightLeft = document.getElementById("imgRightLeft");

        imgLeftLeft.className = "yellowLightLeftLeft";
        imgLeftLeft.src = "jpeg/yellowlight.png";
        imgRightLeft.className = "yellowLightLeftRight";
        imgRightLeft.src = "jpeg/yellowlightright.png";

        leftlight.appendChild(imgLeftLeft);
        leftlight.appendChild(imgRightLeft);

        // Нижний светофор
        var imgLeftDown = document.getElementById("imgLeftDown");
        var imgRightDown = document.getElementById("imgRightDown");

        imgLeftDown.className = "yellowLightDownLeft";
        imgLeftDown.src = "jpeg/yellowlight.png";
        imgRightDown.className = "yellowLightDownRight";
        imgRightDown.src = "jpeg/yellowlightright.png";

        downlight.appendChild(imgLeftDown);
        downlight.appendChild(imgRightDown);

        // Правый светофор
        var imgLeftRight = document.getElementById("imgLeftRight");
        var imgRightRight = document.getElementById("imgRightRight");
        
        
        imgLeftRight.className = "yellowLightRightLeft";
        imgLeftRight.src = "jpeg/yellowlight.png";
        imgRightRight.className = "yellowLightRightRight";
        imgRightRight.src = "jpeg/yellowlightright.png";
        
        rightlight.appendChild(imgLeftRight);
        rightlight.appendChild(imgRightRight);
        
        counti = 0;
    }   else if (counti == 5) {
        // Верхний светофор
        var imgLeftUp = document.getElementById("imgLeftUp");
        var imgRightUp = document.getElementById("imgRightUp");
        
        imgLeftUp.className = "redLightUpLeft";
        imgLeftUp.src = "jpeg/redlight.png";
        imgRightUp.className = "redLightUpRight";
        imgRightUp.src = "jpeg/redlightright.png";

        uplight.appendChild(imgLeftUp);
        uplight.appendChild(imgRightUp);

        // Левый светофор
        var imgLeftLeft = document.getElementById("imgLeftLeft");
        var imgRightLeft = document.getElementById("imgRightLeft");

        imgLeftLeft.className = "redLightLeftLeft";
        imgLeftLeft.src = "jpeg/redlight.png";
        imgRightLeft.className = "redLightLeftRight";
        imgRightLeft.src = "jpeg/redlightright.png";

        leftlight.appendChild(imgLeftLeft);
        leftlight.appendChild(imgRightLeft);

        // Нижний светофор
        var imgLeftDown = document.getElementById("imgLeftDown");
        var imgRightDown = document.getElementById("imgRightDown");

        imgLeftDown.className = "redLightDownLeft";
        imgLeftDown.src = "jpeg/redlight.png";
        imgRightDown.className = "redLightDownRight";
        imgRightDown.src = "jpeg/redlightright.png";

        downlight.appendChild(imgLeftDown);
        downlight.appendChild(imgRightDown);

        // Правый светофор
        var imgLeftRight = document.getElementById("imgLeftRight");
        var imgRightRight = document.getElementById("imgRightRight");
        
        
        imgLeftRight.className = "redLightRightLeft";
        imgLeftRight.src = "jpeg/redlight.png";
        imgRightRight.className = "redLightRightRight";
        imgRightRight.src = "jpeg/redlightright.png";
        
        rightlight.appendChild(imgLeftRight);
        rightlight.appendChild(imgRightRight);
        
        counti = 0;
    }   else if (counti == 6) {
        // Верхний светофор
        var imgLeftUp = document.getElementById("imgLeftUp");
        var imgRightUp = document.getElementById("imgRightUp");
        
        imgLeftUp.className = "yellowLightUpLeft";
        imgLeftUp.src = "jpeg/yellowlight.png";
        imgRightUp.className = "redLightUpRight";
        imgRightUp.src = "jpeg/redlightright.png";

        uplight.appendChild(imgLeftUp);
        uplight.appendChild(imgRightUp);

        // Левый светофор
        var imgLeftLeft = document.getElementById("imgLeftLeft");
        var imgRightLeft = document.getElementById("imgRightLeft");

        imgLeftLeft.className = "yellowLightLeftLeft";
        imgLeftLeft.src = "jpeg/yellowlight.png";
        imgRightLeft.className = "redLightLeftRight";
        imgRightLeft.src = "jpeg/redlightright.png";

        leftlight.appendChild(imgLeftLeft);
        leftlight.appendChild(imgRightLeft);

        // Нижний светофор
        var imgLeftDown = document.getElementById("imgLeftDown");
        var imgRightDown = document.getElementById("imgRightDown");

        imgLeftDown.className = "yellowLightDownLeft";
        imgLeftDown.src = "jpeg/yellowlight.png";
        imgRightDown.className = "redLightDownRight";
        imgRightDown.src = "jpeg/redlightright.png";

        downlight.appendChild(imgLeftDown);
        downlight.appendChild(imgRightDown);

        // Правый светофор
        var imgLeftRight = document.getElementById("imgLeftRight");
        var imgRightRight = document.getElementById("imgRightRight");
        
        
        imgLeftRight.className = "yellowLightRightLeft";
        imgLeftRight.src = "jpeg/yellowlight.png";
        imgRightRight.className = "redLightRightRight";
        imgRightRight.src = "jpeg/redlightright.png";
        
        rightlight.appendChild(imgLeftRight);
        rightlight.appendChild(imgRightRight);
        
        counti = 0;
    }
}
goSvetofor();
var carRideRed = function() {
    if (counti == 1 && redCarLeft.className !== "redCarLeft carRideLeft") {
        redCarLeft.classList.add("carRideLeft");
        redCarDown.classList.remove("carRideDown");
    } else if (counti == 3 && redCarDown.className !== "redCarDown carRideDown") {
        redCarDown.classList.add("carRideDown");
        redCarLeft.classList.remove("carRideLeft");
    }
}

var carRideYellow = function() {
    if (counti == 3 && yellowCarUp.className !== "yellowCarUp carRideUp") {
        yellowCarUp.classList.add("carRideUp");
        yellowCarRight.classList.remove("carRideRight");
    } else if (counti == 1 && yellowCarRight.className !== "yellowCarRight carRideRight") {
        yellowCarRight.classList.add("carRideRight");
        yellowCarUp.classList.remove("carRideUp");
    }
}

// создаём функцию для мигания светофора с интервалом
setInterval(function() {
    if (counts == 0) {
    goSvetofor();
    setTimeout(carRideRed, 1500);
    setTimeout(carRideYellow, 500);
}
}, 4000);

var countg1 = 0;
var countg2 = 0;

var girl1Crossing = function() {
    if (countg1 == 0) {
        girl1.classList.add("girl1CrossingLeft");
        girl1.classList.remove("girl1CrossingRight");
        countg1 = 1;
    } else if (countg1 == 1) {
        girl1.classList.add("girl1CrossingRight");
        girl1.classList.remove("girl1CrossingLeft");
        countg1 = 0;
    }

    if (countg1 == 0) {
        girl1.classList.add("girl1R");
        girl1.classList.remove("girl1L");
        girl1.src="jpeg/girl1Right.png"
    } else if (countg1 == 1) {
        girl1.classList.add("girl1L");
        girl1.classList.remove("girl1R");
        girl1.src="jpeg/girl1Left.png"
    }
}

var girl2Crossing = function() {
    if (countg2 == 0) {
        girl2.classList.add("girl2CrossingLeft");
        girl2.classList.remove("girl2CrossingRight");
        countg2 = 1;
    } else if (countg2 == 1) {
        girl2.classList.add("girl2CrossingRight");
        girl2.classList.remove("girl2CrossingLeft");
        countg2 = 0;
    }

    if (countg2 == 0) {
        girl2.classList.add("girl2R");
        girl2.classList.remove("girl2L");
        girl2.src="jpeg/girl2Right.png"
    } else if (countg2 == 1) {
        girl2.classList.add("girl2L");
        girl2.classList.remove("girl2R");
        girl2.src="jpeg/girl2Left.png";
    }
}
// создаём функцию при нажатии на кнопку включается режим пешехода на 5 секунд
btn.onclick = function () {
    counts = 1;
    counti = 5;
    goSvetofor();
    girl1Crossing();
    girl2Crossing();
    setTimeout(countf, 5000);
    // document.getElementById("myImage").src = "jpeg/red.png";
    counti = 6;
}
