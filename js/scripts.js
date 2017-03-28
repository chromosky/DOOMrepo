
//This example uses the addEventListener() method to attach a click event to a button
document.getElementById("myBtn_1").addEventListener("click", displayDate);

function displayDate() {
    document.getElementById("demo_1").innerHTML = Date();
};
document.getElementById("myBtn_2").addEventListener("click", function(){
    alert("Hello World!");
});

//This example uses the addEventListener() method to add two click events to the same button.
var xa = document.getElementById("myBtn_3");
xa.addEventListener("click", myFunctionA);
xa.addEventListener("click", someOtherFunction);

function myFunctionA() {
    alert ("Hello World!!!");
}

function someOtherFunction() {
    alert ("This function was also executed!");
};

// This example uses the addEventListener() method to add many events on the same button
var xb = document.getElementById("myBtn_4");
xb.addEventListener("mouseover", myFirstFunction);
xb.addEventListener("click", mySecondFunction);
xb.addEventListener("mouseout", myThirdFunction);

function myFirstFunction() {
    document.getElementById("demo_4").innerHTML += "Moused over!<br>";
}

function mySecondFunction() {
    document.getElementById("demo_4").innerHTML += "Clicked!<br>";
}

function myThirdFunction() {
    document.getElementById("demo_4").innerHTML += "Moused out!<br>";
};

//This example uses the addEventListener() method on the window object.
window.addEventListener("resize", function(){
    document.getElementById("demo_5").innerHTML = Math.random();
});

//This example demonstrates how to pass parameter values when using the addEventListener() method.
var p1 = 5;
var p2 = 7;

document.getElementById("myBtn_6").addEventListener("click", function() {
    myFunction(p1, p2);
});

function myFunction(a, b) {
    var result = a * b;
    document.getElementById("demo_6").innerHTML = result;
};

//This example demonstrates the difference between bubbling and capturing when adding event listeners.
document.getElementById("myP").addEventListener("click", function() {
    alert("You clicked the P element!");
}, false);

document.getElementById("myDiv").addEventListener("click", function() {
    alert("You clicked the DIV element!");
}, false);

document.getElementById("myP2").addEventListener("click", function() {
    alert("You clicked the P element!");
}, true);

document.getElementById("myDiv2").addEventListener("click", function() {
    alert("You clicked the DIV element!");
}, true);

//This div element has an onmousemove event handler that displays a random number every time you move your mouse inside this orange field.
document.getElementById("myDIV_7").addEventListener("mousemove", myFunctionC);

function myFunctionC() {
    document.getElementById("demo_7").innerHTML = Math.random();
}

function removeHandler() {
    document.getElementById("myDIV_7").removeEventListener("mousemove", myFunctionC);
}