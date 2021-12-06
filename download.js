let download=document.querySelector(".fa-file-download");

download.addEventListener("click",function(e){
    console.log("clicked on download icon");
    let url= canvasBoard.toDataURL();
let a=document.createElement("a");
a.href=url;
a.download="smartboard.jpg";
a.click();

});
