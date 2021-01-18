// from https://stackoverflow.com/questions/2794137/sanitizing-user-input-before-adding-it-to-the-dom-in-javascript
// https://www.sitepoint.com/delay-sleep-pause-wait/
var Webconsole = (function() {
  return {
  sanitize: function(string) {
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
  },
  sleep: function(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  },
  addTo: function(element) {
    var webconsoleHTML = `
    <div class="main">
      Output:<br>
      <div contenteditable="false" id="webconsole-out"></div>
      <br><hr>
      Input:<br>
      <input type="text" contenteditable="true" id="webconsole-in" autofocus></input>
    </div>
    <footer>
      <em><p>Powered by <a href="https://github.com/reeceyang/webconsole">Webconsole</a>. Made with &lt;3 by <a href="https://github.com/reeceyang">Reece</a>.</p></em>
    </footer>`;
    element.innerHTML += webconsoleHTML;
  },
  addDarkModeTo: function(element) {
    element.innerHTML = "<a id=\"toggle-theme\">Dark/Light Mode</a>" + element.innerHTML;
    document.getElementById("toggle-theme").addEventListener("click", () => {
      document.body.classList.toggle("dark");
    });
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.getElementById("toggle-theme").click();
    }
  },
  currentlyInputting: false,
};
})();

function println() {
  var s = "";
  for (i in arguments) {
    s += arguments[i];
  }
  print(s, "<br>");
}
function print() {
  setTimeout(() => {
    var out = document.getElementById("webconsole-out");
    var s = "";
    for (i in arguments) {
      s += arguments[i];
    }
    out.innerHTML += s;
    //console.log("printing " + s);
    //console.log("out is: " + out.innerHTML);
    out.scrollTop += 100;
  }, 0);
}
function clear() {
  setTimeout(() => {
    var out = document.getElementById("webconsole-out");
    out.innerHTML = "";
  }, 0);
}
async function input() {
  var inp = document.getElementById("webconsole-in");

  for (i in arguments) {
    print(arguments[i]);
  }

  var enterPressed = new Promise(function(resolve, reject) {
    inp.addEventListener("keyup", function(event) {
      if(event.key === "Enter" & Webconsole.currentlyInputting) {
        //console.log("enter pressed");
        resolve("Yes");
      }
    });
  });

  Webconsole.currentlyInputting = true;
  //console.log("waiting for enterPressed");
  await enterPressed;
  //console.log("enterPressed");
  var stuff = Webconsole.sanitize(inp.value);
  inp.value = "";
  print(stuff);
  println();
  Webconsole.currentlyInputting = false;
  return stuff;
}
