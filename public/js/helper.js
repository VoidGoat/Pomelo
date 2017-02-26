var HTMLHeaderBar = '<header class="header"><h1 style="margin-top:inherit; margin-bottom: inherit; display: inline-block">Pomelo</h1><hr style="display: inline-block; width:calc(100% - 100px); border: 1px #ee7a63 solid; border-radius: 5px; margin-top: 0; margin-bottom: 0px;" /></header>';
var HTMLCanvas = '<canvas id="myCanvas" width="500" height="400"></canvas>';
var HTMLLessonLink = '<section class="lesson-link"><a href="editLesson.html?key=%%key%%" style="text-decoration: none; color: black;"><img src="http://placehold.it/250x100"><p align="center" style="margin-top: 0; padding-bottom: 5px">Lesson 1: Drawing On the Canvas</p></a></section>';


function parseURLParams(url) {
    var queryStart = url.indexOf("?") + 1,
        queryEnd   = url.indexOf("#") + 1 || url.length + 1,
        query = url.slice(queryStart, queryEnd - 1),
        pairs = query.replace(/\+/g, " ").split("&"),
        parms = {}, i, n, v, nv;

    if (query === url || query === "") {
        return;
    }

    for (i = 0; i < pairs.length; i++) {
        nv = pairs[i].split("=");
        n = decodeURIComponent(nv[0]);
        v = decodeURIComponent(nv[1]);

        if (!parms.hasOwnProperty(n)) {
            parms[n] = [];
        }

        parms[n].push(nv.length === 2 ? v : null);
    }
    return parms;
}
