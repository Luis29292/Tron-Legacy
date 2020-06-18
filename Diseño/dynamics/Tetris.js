let canvas = document.getElementById("Canvas");
let ctx = canvas.getContext("2d");
var cx = 10;
var cy = 0;
var sx = 120;
var sy = 0;
var six = 120;
var siy = 0;
var rx = 120;
var ry = 0;
var lx = 120;
var ly = 0;
var lix = 120;
var liy = 0;
var px = 120;
var py = 0;

document.addEventListener("keydown", izq);
document.addEventListener("keydown", der);
document.addEventListener("keydown", down);
document.addEventListener("keydown", rot);

function Cuadrado() {
  ctx.rect(cx, cy, 25, 25);
  ctx.fillStyle = "#E8FE02"; //Amarillo
  ctx.fill();
  ctx.strokeStyle = "#F2E902";
  ctx.lineWidth = 5;
  ctx.stroke();

  ctx.rect(cx+30, cy, 25, 25);
  ctx.fillStyle = "#E8FE02";
  ctx.fill();
  ctx.strokeStyle = "#F2E902";
  ctx.lineWidth = 5;
  ctx.stroke();

  ctx.rect(cx, cy+30, 25, 25);
  ctx.fillStyle = "#E8FE02";
  ctx.fill();
  ctx.strokeStyle = "#F2E902";
  ctx.lineWidth = 5;
  ctx.stroke();

  ctx.rect(cx+30, cy+30, 25, 25);
  ctx.fillStyle = "#E8FE02";
  ctx.fill();
  ctx.strokeStyle = "#F2E902";
  ctx.lineWidth = 5;
  ctx.stroke();

  requestAnitmationFrame(Cuadrado);
}

// Cuadrado(ctx);
requestAnitmationFrame(Cuadrado);

function S() {
  ctx.rect(sx, sy, 25, 25);
  ctx.fillStyle = "#4BFF0F"; //Verde
  ctx.fill();
  ctx.strokeStyle = "#02E875";
  // ctx.lineWidth = 5;
  ctx.stroke();

  ctx.rect(sx+30, sy, 25, 25);
  ctx.fillStyle = "#4BFF0F";
  ctx.fill();
  ctx.strokeStyle = "#02E875";
  // ctx.lineWidth = 2;
  ctx.stroke();

  ctx.rect(sx+30, sy+30, 25, 25);
  ctx.fillStyle = "#4BFF0F";
  ctx.fill();
  ctx.strokeStyle = "#02E875";
  ctx.lineWidth = 5;
  ctx.stroke();

  ctx.rect(sx+60, sy+30, 25, 25);
  ctx.fillStyle = "#4BFF0F";
  ctx.fill();
  ctx.strokeStyle = "#02E875";
  ctx.lineWidth = 5;
  ctx.stroke();

  requestAnitmationFrame(S);
}

// S(ctx);
requestAnitmationFrame(S);

function SInvert() {
  ctx.rect(six, siy+30, 30, 30);
  ctx.fillStyle = "#FF2303"; //Rojo
  ctx.fill();
  ctx.strokeStyle = "#C70C00";
  ctx.lineWidth = 5;
  ctx.stroke();

  ctx.rect(six+30, siy+30, 30, 30);
  ctx.fillStyle = "#FF2303";
  ctx.fill();
  ctx.strokeStyle = "#C70C00";
  ctx.lineWidth = 5;
  ctx.stroke();

  ctx.rect(six+30, siy, 30, 30);
  ctx.fillStyle = "#FF2303";
  ctx.fill();
  ctx.strokeStyle = "#C70C00";
  ctx.lineWidth = 5;
  ctx.stroke();

  ctx.rect(six+60, siy, 30, 30);
  ctx.fillStyle = "#FF2303";
  ctx.fill();
  ctx.strokeStyle = "#C70C00";
  ctx.lineWidth = 5;
  ctx.stroke();

  requestAnitmationFrame(SInvert);
}

// SInvert(ctx);
requestAnitmationFrame(SInvert);

function Rect() {
  ctx.rect(rx-30, ry, 30, 30);
  ctx.fillStyle = "#0B3CDE"; //Azul
  ctx.fill();
  ctx.strokeStyle = "#0700C7";
  ctx.lineWidth = 5;
  ctx.stroke();

  ctx.rect(rx, ry, 30, 30);
  ctx.fillStyle = "#0B3CDE";
  ctx.fill();
  ctx.strokeStyle = "#0700C7";
  ctx.lineWidth = 5;
  ctx.stroke();

  ctx.rect(rx+30, ry, 30, 30);
  ctx.fillStyle = "#0B3CDE";
  ctx.fill();
  ctx.strokeStyle = "#0700C7";
  ctx.lineWidth = 5;
  ctx.stroke();

  ctx.rect(rx+60, ry, 30, 30);
  ctx.fillStyle = "#0B3CDE";
  ctx.fill();
  ctx.strokeStyle = "#0700C7";
  ctx.lineWidth = 5;
  ctx.stroke();

  requestAnitmationFrame(Rect);
}

// Rect(ctx);
requestAnitmationFrame(Rect);

function L() {
  ctx.rect(rx, ry, 30, 30);
  ctx.fillStyle = "#C900FF"; //Morado
  ctx.fill();
  ctx.strokeStyle = "#8C0CE8";
  ctx.lineWidth = 5;
  ctx.stroke();

  ctx.rect(rx+30, ry, 30, 30);
  ctx.fillStyle = "#C900FF";
  ctx.fill();
  ctx.strokeStyle = "#8C0CE8";
  ctx.lineWidth = 5;
  ctx.stroke();

  ctx.rect(rx+60, ry, 30, 30);
  ctx.fillStyle = "#C900FF";
  ctx.fill();
  ctx.strokeStyle = "#8C0CE8";
  ctx.lineWidth = 5;
  ctx.stroke();

  ctx.rect(rx+60, ry+30, 30, 30);
  ctx.fillStyle = "#C900FF";
  ctx.fill();
  ctx.strokeStyle = "#8C0CE8";
  ctx.lineWidth = 5;
  ctx.stroke();

  requestAnitmationFrame(L);
}

// L(ctx);
requestAnitmationFrame(L);

function LInvert() {
  ctx.rect(rx, ry+30, 30, 30);
  ctx.fillStyle = "#FF6200"; //Naranja
  ctx.fill();
  ctx.strokeStyle = "#FF390D";
  ctx.lineWidth = 5;
  ctx.stroke();

  ctx.rect(rx+30, ry+30, 30, 30);
  ctx.fillStyle = "#FF6200";
  ctx.fill();
  ctx.strokeStyle = "#FF390D";
  ctx.lineWidth = 5;
  ctx.stroke();

  ctx.rect(rx+60, ry+30, 30, 30);
  ctx.fillStyle = "#FF6200";
  ctx.fill();
  ctx.strokeStyle = "#FF390D";
  ctx.lineWidth = 5;
  ctx.stroke();

  ctx.rect(rx+60, ry, 30, 30);
  ctx.fillStyle = "#FF6200";
  ctx.fill();
  ctx.strokeStyle = "#FF390D";
  ctx.lineWidth = 5;
  ctx.stroke();

  requestAnitmationFrame(LInvert);
}

// LInvert(ctx);
requestAnitmationFrame(LInvert);

function Pyramid() {
  ctx.rect(rx, ry+30, 25, 25);
  ctx.fillStyle = "#00FCFF"; //Cielo
  ctx.fill();
  ctx.strokeStyle = "#00DBFF";
  ctx.lineWidth = 5;
  ctx.stroke();

  ctx.rect(rx+30, ry+30, 25, 25);
  ctx.fillStyle = "#00FCFF";
  ctx.fill();
  ctx.strokeStyle = "#00DBFF";
  ctx.lineWidth = 5;
  ctx.stroke();

  ctx.rect(rx+30, ry, 25, 25);
  ctx.fillStyle = "#00FCFF";
  ctx.fill();
  ctx.strokeStyle = "#00DBFF";
  ctx.lineWidth = 5;
  ctx.stroke();

  ctx.rect(rx+60, ry+30, 25, 25);
  ctx.fillStyle = "#00FCFF";
  ctx.fill();
  ctx.strokeStyle = "#00DBFF";
  ctx.lineWidth = 5;
  ctx.stroke();

  requestAnitmationFrame(Pyramid);
}

// Pyramid(ctx);
requestAnitmationFrame(Pyramid);

function izq(event) {
  let izquierda = event.keyCode;
  if (izquierda == 37) {

  }
}

function der(event) {
  let derecha = event.keyCode;
  if (derecha == 39) {

  }
}

function down(event) {
  let abajo = event.keyCode;
  if (abajo == 40) {

  }
}

function rot(event) {
  let rotar = event.keyCode;
  if (rotar == 32) {

  }
}
