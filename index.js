function init() {
  var input = document.getElementById("in");
  var out = document.getElementById("out");
  input.addEventListener("input", function() {
    out.innerHTML = input.innerHTML;
  });
}
