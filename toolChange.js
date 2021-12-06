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
        tool.strokeStyle="black";
        tool.lineWidth = pencilsize;
        
    }
});