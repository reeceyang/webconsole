var line;

function init() {
  var input = document.getElementById("in");
  var out = document.getElementById("out");
  input.addEventListener("input", function() {
    line = input.innerHTML;
    output.innerHTML = line;
  });
}
