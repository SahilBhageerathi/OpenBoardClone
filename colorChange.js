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