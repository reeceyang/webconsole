function init() {
  var line;
  var input = document.getElementById("in");
  var out = document.getElementById("out");
  input.addEventListener("input", function() {
    console.log("event hit")
    line = input.innerHTML;
    output.innerHTML = line;
  });
}
