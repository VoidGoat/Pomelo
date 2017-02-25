var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");


function executeCode() {
  try {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    eval(editor.getValue());
  } catch (e) {
    if (e instanceof SyntaxError) {
      console.log(e.message);
    }
  }
}

canvas.addEventListener("mousedown", getPosition, false);

function getPosition(event) {
  var x = event.x;
  var y = event.y;

  var canvas = document.getElementById("myCanvas");

  x -= canvas.offsetLeft;
  y -= canvas.offsetTop;

  ctx.beginPath();
  ctx.lineWidth="10";
  ctx.strokeStyle="blue";
  ctx.rect(x - 15, y - 15, 30, 30);
  ctx.stroke();
}

//
// (function () {
//     "use strict";
//
//     var methods, generateNewMethod, i, j, cur, old, addEvent;
//
//     if ("console" in window) {
//         methods = [
//             "log", "assert", "clear", "count",
//             "debug", "dir", "dirxml", "error",
//             "exception", "group", "groupCollapsed",
//             "groupEnd", "info", "profile", "profileEnd",
//             "table", "time", "timeEnd", "timeStamp",
//             "trace", "warn"
//         ];
//
//         generateNewMethod = function (oldCallback, methodName) {
//             return function () {
//                 var args;
//                 alert("called console." + methodName + ", with " + arguments.length + " argument(s)" + arguments[0]);
//                 args = Array.prototype.slice.call(arguments, 0);
//                 Function.prototype.apply.call(oldCallback, console, arguments);
//             };
//         };
//
//         for (i = 0, j = methods.length; i < j; i++) {
//             cur = methods[i];
//             if (cur in console) {
//                 old = console[cur];
//                 console[cur] = generateNewMethod(old, cur);
//             }
//         }
//     }
//
//     window.onerror = function (msg, url, line) {
//         alert("Window error: " + msg + ", " + url + ", line " + line);
//     };
// }());
