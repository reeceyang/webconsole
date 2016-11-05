function init() {
  var line;
  var oldLength = 0;
  var input = document.getElementById("in");
  var out = document.getElementById("out");
  input.addEventListener("input", function() {
    line = input.innerHTML;
    out.innerHTML = out.innerHTML.substring(0, out.innerHTML.length-oldLength);
    out.innerHTML += line;
    oldLength = line.length;
  });
  function println(stuff) {
    out.innerHTML += stuff + "<br>";
  } 
  function print(stuff) {
    out.innerHTML += stuff;
  }
  println("Hello World");
}
function println(stuff, out) {
  out.innerHTML += stuff + "<br>";
} 
function print(stuff, out) {
  out.innerHTML += stuff;
}
