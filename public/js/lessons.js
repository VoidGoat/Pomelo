
var lessons = {
  "GamesWithJS": [
    {
      "text": "Let's get started!",
      "code": 'ctx.beginPath();\nctx.fillStyle="black";\nctx.fillRect(160,50,10,300);\nctx.stroke();'
    },
    {
      "text": "Slide 2",
      "code": 'ctx.beginPath();\nctx.lineWidth="10";\nctx.strokeStyle="black";\nctx.rect(50,50,80,80);\nctx.stroke();'
    }
  ]
};
var currentLesson = lessons.GamesWithJS;
var lessonIndex = 0;

function moveLessonForward() {
  if (lessonIndex < currentLesson.length - 1) {
    lessonIndex++;
    updatePage();
  }
}
function moveLessonBack() {
  if (lessonIndex > 0) {
    lessonIndex--;
    updatePage();
  }
}
function updatePage() {
  clearCanvas();
  $( "#instructions" ).html(lessons.GamesWithJS[lessonIndex].text);
  editor.setValue(lessons.GamesWithJS[lessonIndex].code);
  $("#lessonCounter").html(lessonIndex + 1);
}
