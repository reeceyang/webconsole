function start() {
  var input = document.getElementById("in");
  var out = document.getElementById("out");
  document.addEventListener("keydown", function() {
    out.innerHTML = input.innerHTML;
  });
}
