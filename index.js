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
  
  input.addEventListener("onkeypress", function() {
    var keynum;

    if(window.event) { // IE                    
      keynum = e.keyCode;
    } else if(e.which){ // Netscape/Firefox/Opera                   
      keynum = e.which;
    }

    alert(String.fromCharCode(keynum));
  });
}
