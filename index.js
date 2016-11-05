function init() {
  var line;
  var input = document.getElementById("in");
  var out = document.getElementById("out");
  input.addEventListener("input", function() {
    line = input.innerHTML;
    output.innerHTML = line;
  });
  /*function print(var stuff) {
    output.innerHTML = output.innerHTML + stuff;
  }
  
  print("Hello World!")*/
}
