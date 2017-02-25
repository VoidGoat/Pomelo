var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

function draw() {
  ctx.canvas.width  = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
  //...drawing code...
}

(function () {
    "use strict";

    var methods, generateNewMethod, i, j, cur, old, addEvent;

    if ("console" in window) {
        methods = [
            "log", "assert", "clear", "count",
            "debug", "dir", "dirxml", "error",
            "exception", "group", "groupCollapsed",
            "groupEnd", "info", "profile", "profileEnd",
            "table", "time", "timeEnd", "timeStamp",
            "trace", "warn"
        ];

        generateNewMethod = function (oldCallback, methodName) {
            return function () {
                var args;
                alert("called console." + methodName + ", with " + arguments.length + " argument(s)" + arguments[0]);
                args = Array.prototype.slice.call(arguments, 0);
                Function.prototype.apply.call(oldCallback, console, arguments);
            };
        };

        for (i = 0, j = methods.length; i < j; i++) {
            cur = methods[i];
            if (cur in console) {
                old = console[cur];
                console[cur] = generateNewMethod(old, cur);
            }
        }
    }

    window.onerror = function (msg, url, line) {
        alert("Window error: " + msg + ", " + url + ", line " + line);
    };
}());
