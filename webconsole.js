// from https://stackoverflow.com/questions/2794137/sanitizing-user-input-before-adding-it-to-the-dom-in-javascript
function sanitize(string) {
  const map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;',
      "/": '&#x2F;',
      "`": '&grave;'
  };
  const reg = /[&<>"'/]/ig;
  return string.replace(reg, (match)=>(map[match]));
}

// toggle dark/light theme
document.getElementById("toggle-theme").addEventListener("click", function (){
  document.body.classList.toggle("dark-mode");
  document.getElementsByClassName("main")[0].classList.toggle("dark-mode");
  document.getElementById("in").classList.toggle("dark-mode");
  document.getElementById("in").focus();
});
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  document.getElementById("toggle-theme").click();
}

var inp = document.getElementById("in");
var out = document.getElementById("out");

var inputting = false;

function println() {
  for (i in arguments) {
    print(arguments[i]);
  }
  print("<br>");
}
function print(stuff) {
  out.innerHTML += stuff;
  out.scrollTop += 100;
}
function clear() {
  out.innerHTML = "";
}

async function input() {
  for (i in arguments) {
    print(arguments[i]);
  }

  var enterPressed = new Promise(function(resolve, reject) {
    inp.addEventListener("keyup", function(event) {
      if(event.key === "Enter" & inputting) {
        //console.log("enter pressed");
        resolve("Yes");
      }
    });
  });

  inputting = true;
  await enterPressed;
  var stuff = sanitize(inp.value);
  inp.value = "";
  print(stuff);
  println();
  inputting = false;
  return stuff;
}
