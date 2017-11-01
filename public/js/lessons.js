var lessons = {
  "GamesWithJS": [
    {
      "text": "Let's get started!",
      "visibleCode": 'ctx.beginPath();\nctx.fillStyle="black";\nctx.fillRect(160,50,10,300);\nctx.stroke();',
      "backendCode": 'console.log("hi")'
    },
    {
      "text": "Slide 2",
      "visibleCode": 'ctx.beginPath();\nctx.lineWidth="10";\nctx.strokeStyle="black";\nctx.rect(50,50,80,80);\nctx.stroke();',
      "backendCode": 'console.log("hi")'
    }
  ]
};

if (parseURLParams(window.location.href) === undefined) {

} else {
  var key = parseURLParams(window.location.href).key[0];
}

var lessonIndex = 0;
var currentLesson;

firebase.database().ref(key).once('value').then(function(snapshot) {

  currentLesson = snapshot.val();
  title = snapshot.val()[lessonIndex].title;

  visibleCode = snapshot.val()[lessonIndex].visibleCode;
  editor.setValue(visibleCode);

  backendCode = snapshot.val()[lessonIndex].backendCode;

  $( "#instructions" ).html(title);
  executeCode();
});


function moveLessonForward() {
  if (lessonIndex < currentLesson.length - 1) {
    if (displayingFrontend) {
      firebase.database().ref(key + "/" + lessonIndex).update({ "visibleCode": editor.getValue()});
      currentLesson[lessonIndex].visibleCode = editor.getValue();
    } else {
      firebase.database().ref(key + "/" + lessonIndex).update({ "backendCode": editor.getValue()});
      currentLesson[lessonIndex].backendCode = editor.getValue();
    }
    lessonIndex++;
    updatePage();
    firebase.database().ref(key + "/" + lessonIndex).on('value', function(snapshot) {

    });


    if (lessonIndex >= currentLesson.length - 1 ) {
      $("#forward-button").val("+");
    } else {
      $("#forward-button").val(">");
    }
  } else {
    if (displayingFrontend) {
      firebase.database().ref(key + "/" + lessonIndex).update({ "visibleCode": editor.getValue()});
      currentLesson[lessonIndex].visibleCode = editor.getValue();
    } else {
      firebase.database().ref(key + "/" + lessonIndex).update({ "backendCode": editor.getValue()});
      currentLesson[lessonIndex].backendCode = editor.getValue();
    }
    firebase.database().ref(key + "/" + currentLesson.length).set({
      "title": "",
      "visibleCode": "//this is the code visible to a user ",
      "backendCode": '//this is the code that runs but is not seen'
    });

    firebase.database().ref(key).once('value').then(function(snapshot) {

      currentLesson = snapshot.val();
      lessonIndex++;
      updatePage();
    });

  }
}
function moveLessonBack() {
  if (lessonIndex > 0) {
    if (displayingFrontend) {
      firebase.database().ref(key + "/" + lessonIndex).update({ "visibleCode": editor.getValue()});
      currentLesson[lessonIndex].visibleCode = editor.getValue();
    } else {
      firebase.database().ref(key + "/" + lessonIndex).update({ "backendCode": editor.getValue()});
      currentLesson[lessonIndex].backendCode = editor.getValue();
    }
    lessonIndex--;
    $("#forward-button").val(">");
    updatePage();
  }
}
function updatePage() {
  clearCanvas();
  $( "#instructions" ).html(currentLesson[lessonIndex].text);
  if (displayingFrontend) {
    editor.setValue(currentLesson[lessonIndex].visibleCode);
  } else {
    editor.setValue(currentLesson[lessonIndex].backendCode);
  }
   $("#lessonCounter").html(lessonIndex + 1);
  executeCode();
  // $( "#instructions" ).html(lessons.GamesWithJS[lessonIndex].text);
  // editor.setValue(lessons.GamesWithJS[lessonIndex].visibleCode);
  // $("#lessonCounter").html(lessonIndex + 1);
}

function saveCode() {

}
