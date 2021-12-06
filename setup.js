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
