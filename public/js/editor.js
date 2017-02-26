var editor = CodeMirror(document.body, {
  value: lessons.GamesWithJS[0].code,
  mode:  "javascript",
  lineNumbers: "true",
  tabSize: "2"
});
