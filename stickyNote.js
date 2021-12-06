let stickyicon = document.querySelector(".fa-sticky-note");
let isMinimized = false;
stickyicon.addEventListener("click", function (e) {

    console.log("clicked on sticky icon");

    let stickyNote = document.createElement("div");
    stickyNote.setAttribute("class", "stickyNote");
    stickyNote.innerHTML = `
    <div class="navbar">      
          <div class="minimize"></div>
          <div class="close"></div>
    </div>
        <textarea class="textarea" spellcheck="false"></textarea>
        `;

    document.body.appendChild(stickyNote);

    //    remove and minimize logic

    let textarea = stickyNote.querySelector(".textarea");
    let minimize = stickyNote.querySelector(".minimize");
    minimize.addEventListener("click", function (e) {

        if (isMinimized == false) {
            textarea.style.display = "none";
        }
        else {
            textarea.style.display = "block";
        }

        isMinimized = !isMinimized;
    });

    let close = stickyNote.querySelector(".close");
    close.addEventListener("click", function (e) {
        stickyNote.style.display = "none";
    });





    // drag and drop logic.

    stickyNote.onmousedown = function (event) {
        
        currTool="nothing";
        dragAndDrop(stickyNote, event);
        

    };

    stickyNote.ondragstart = function () {
        return false;
    };

});


function dragAndDrop(element, event) {
    
    let shiftX = event.clientX - element.getBoundingClientRect().left;
    let shiftY = event.clientY - element.getBoundingClientRect().top;

    element.style.position = 'absolute';
    element.style.zIndex = 1000;


    moveAt(event.pageX, event.pageY);

    // moves the ball at (pageX, pageY) coordinates
    // taking initial shifts into account
    function moveAt(pageX, pageY) {
        element.style.left = pageX - shiftX + 'px';
        element.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }

    // move the ball on mousemove
    document.addEventListener('mousemove', onMouseMove);

    // drop the ball, remove unneeded handlers
    element.onmouseup = function () {
        document.removeEventListener('mousemove', onMouseMove);
        element.onmouseup = null;
    };

    
}







