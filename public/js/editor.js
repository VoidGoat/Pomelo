var editor = CodeMirror(document.body, {
  value: lessons.GamesWithJS[0].visibleCode,
  mode:  "javascript",
  lineNumbers: "true",
  tabSize: "2"
});
