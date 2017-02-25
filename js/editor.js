var editor = CodeMirror(document.body, {
  value: 'ctx.beginPath();\nctx.lineWidth="10";\nctx.strokeStyle="blue";\nctx.rect(50,50,80,80);\nctx.stroke();',
  mode:  "javascript",
  lineNumbers: "true",
  tabSize: "2"
});
