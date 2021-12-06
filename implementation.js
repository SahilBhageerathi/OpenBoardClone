// <!-- intialize the canvas board  -->


let canvasBoard = document.querySelector("canvas");
canvasBoard.height = window.innerHeight;
canvasBoard.width = window.innerWidth;
let tool = canvasBoard.getContext("2d");
let boardTop = canvasBoard.getBoundingClientRect().top;
let boardLeft = canvasBoard.getBoundingClientRect().left;
let body = document.querySelector("body");

let xi, xf, yi, yf;
let usePencil = false;
let useEraser = false;


let pencilsize = 3;

// <!-- menu open and close logic -->

let menubox = document.querySelector(".menu");
let menuFlag = false;
let iconPallet = document.querySelector(".icon-pallet");
// true->to show the icon pallet, false->hide tools
menubox.addEventListener("click", function (e) {
    menuFlag = !menuFlag;

    if (menuFlag) {
        let iconElement = menubox.children[0];
        iconElement.classList.add("fa-times");
        iconElement.classList.remove("fa-bars");
        iconPallet.style.display = "flex";

    }
    else {
        let iconElement = menubox.children[0];
        iconElement.classList.add("fa-bars");
        iconElement.classList.remove("fa-times");
        iconPallet.style.display = "none";
    }

});

// <!-- tool change logic -->

let rectTool = document.querySelector(".fa-shapes");
let lineTool = document.querySelector(".fa-grip-lines-vertical");
let pencilTool = document.querySelector(".fa-pencil-alt");
let eraserTool = document.querySelector(".fa-eraser");
let sizeboxes = document.querySelectorAll(".sizebox");
let currTool = "line";

rectTool.addEventListener("click", function () {

    if (currTool == "rect") {
        sizeboxes[2].style.display = "flex";
        //so this is the second click so we display the sizeboxes of the tool

    }
    else {

        for (let i = 0; i < sizeboxes.length; i++) {
            if (i != 2) {
                sizeboxes[i].style.display = "none";
            }
        }
        currTool = "rect";
        tool.strokeStyle="black";

    }
});
eraserTool.addEventListener("click", function () {
    if (currTool == "eraser") {
        sizeboxes[1].style.display = "flex";
        //so this is the second click

    }
    else {
        for (let i = 0; i < sizeboxes.length; i++) {
            if (i != 1) {
                sizeboxes[i].style.display = "none";
            }
        }
        currTool = "eraser";
        tool.strokeStyle = "white";
        //tool.linewidth="20";
    }

});
lineTool.addEventListener("click", function () {

    if (currTool == "line") {
        sizeboxes[3].style.display = "flex";
        //so this is the second click

    }
    else {
        for (let i = 0; i < sizeboxes.length; i++) {
            if (i != 3) {
                sizeboxes[i].style.display = "none";
            }
        }
        currTool = "line";
        tool.strokeStyle="black";

    }
});
pencilTool.addEventListener("click", function () {
    if (currTool == "pencil") {
        sizeboxes[0].style.display = "flex";
        //so this is the second click

    }
    else {
        for (let i = 0; i < sizeboxes.length; i++) {
            if (i != 0) {
                sizeboxes[i].style.display = "none";
            }
        }
        currTool = "pencil";
        tool.lineWidth = pencilsize;
        tool.strokeStyle="black";
    }
});

// <!-- drawing logic -->

body.addEventListener("mousedown", function (e) {

    // if anywhere else on body we click the sizeboxes should dissappear
    for (let i = 0; i < sizeboxes.length; i++) {

        sizeboxes[i].style.display = "none";

    }

    xi = e.clientX + boardLeft;
    yi = e.clientY - boardTop;

    if (currTool == "pencil" || currTool == "eraser") {
        usePencil = true;
        useEraser = true;
        tool.beginPath();
        tool.moveTo(xi, yi);
    }

});

body.addEventListener("mouseup", function (e) {
    xf = e.clientX - boardLeft;
    yf = e.clientY - boardTop;
    usePencil = false;
    useEraser = false;
    if (currTool == "rect") {

        let width = xf - xi;
        let height = yf - yi;
        tool.strokeRect(xi, yi, width, height);
    }
    else if (currTool == "line") {
        tool.beginPath();
        tool.moveTo(xi, yi);
        tool.lineTo(xf, yf);
        tool.stroke();
    }


});

body.addEventListener("mousemove", function (e) {
    if (usePencil == false || useEraser == false) {
        return;
    }
    
    xf = e.clientX + boardLeft;
    yf = e.clientY - boardTop;
    tool.lineTo(xf, yf);
    tool.stroke();
    xi = xf;
    yi = yf;

});






// <!-- color change logic -->

let redcol = document.querySelector(".red");
let greencol = document.querySelector(".green");
let bluecol = document.querySelector(".blue");




redcol.addEventListener("click", function () {
    if(currTool!="eraser")
    tool.strokeStyle = "red";
    else{
        tool.strokeStyle="white";
    }

});
bluecol.addEventListener("click", function () {
    if(currTool!="eraser")
    tool.strokeStyle = "blue";
    else{
        tool.strokeStyle="white";
    }

});
greencol.addEventListener("click", function () {
    if(currTool!="eraser")
    tool.strokeStyle = "green";
    else{
        tool.strokeStyle="white";
    }

});




// size change logic -->
/*for pencil*/
console.log(sizeboxes[0]);
let sizebox1=document.querySelector(".sizebox1");











sizeboxes[0].addEventListener("click", function (e) {
    console.log("hello from event listener");
    let elems = ["size1", "size2", "size3", "size4"];
    let allTheClasses = e.target.classList;
    let firstClass = allTheClasses[0];
    let test = elems.includes(firstClass);

    if (test) {
        //now it is clicked 
        console.log("hi");

        if (firstClass == "size1") {
            pencilsize = 3;

        }
        else if (firstClass == "size2") {
            pencilsize = 5;

        }
        else if (firstClass == "size3") {
            pencilsize = 10;

        }
        else if (firstClass == "size4") {
            pencilsize = 15;
        }

    }
    console.log("pencilsize=" + pencilsize);
    tool.lineWidth = pencilsize;

});


