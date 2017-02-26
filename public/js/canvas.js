var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");


function executeCode() {
  try {
    clearCanvas();
    if (displayingFrontend) {
      eval(editor.getValue());
      eval(backendCode);
    } else {
      eval(editor.getValue());
      eval(visibleCode);
    }
  } catch (e) {
    if (e instanceof SyntaxError) {
      console.log(e.message);
    }
  }
}
function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

}
// canvas.addEventListener("mousedown", getPosition, false);
//
// function getPosition(event) {
//   var x = event.x;
//   var y = event.y;
//
//   var canvas = document.getElementById("myCanvas");
//
//   x -= canvas.offsetLeft;
//   y -= canvas.offsetTop;
//
//   ctx.beginPath();
//   ctx.lineWidth="10";
//   ctx.strokeStyle="blue";
//   ctx.rect(x - 15, y - 15, 30, 30);
//   ctx.stroke();
// }
