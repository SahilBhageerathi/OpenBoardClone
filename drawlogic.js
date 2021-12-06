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






