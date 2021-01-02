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

function addWebconsole(element) {
  var webconsoleHTML = `
  <div class="main">
    Output:<br>
    <div contenteditable="false" id="out"></div>
    <br><hr>
    Input:<br>
    <input type="text" contenteditable="true" id="in" autofocus></input>
    <!-- <button id="submit-button">Submit</button> -->
  </div>
  <footer>
    <em><p>Powered by <a href="https://github.com/reeceyang/webconsole">Webconsole</a>. Made with &lt;3 by <a href="https://github.com/reeceyang">Reece</a>.</p></em>
  </footer>`;
  element.innerHTML += webconsoleHTML;
}

function addDarkMode(element) {
  element.innerHTML = "<a id=\"toggle-theme\">Dark/Light Mode</a>" + element.innerHTML;
  document.getElementById("toggle-theme").addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.getElementById("toggle-theme").click();
  }
}

var webconsoleInputting = false;

function println() {
  for (i in arguments) {
    print(arguments[i]);
  }
  print("<br>");
}
function print(stuff) {
  var out = document.getElementById("out");
  out.innerHTML += stuff;
  out.scrollTop += 100;
}
function clear() {
  var out = document.getElementById("out");
  out.innerHTML = "";
}
async function input() {
  var inp = document.getElementById("in");

  for (i in arguments) {
    print(arguments[i]);
  }

  var enterPressed = new Promise(function(resolve, reject) {
    inp.addEventListener("keyup", function(event) {
      if(event.key === "Enter" & webconsoleInputting) {
        //console.log("enter pressed");
        resolve("Yes");
      }
    });
  });

  webconsoleInputting = true;
  await enterPressed;
  var stuff = sanitize(inp.value);
  inp.value = "";
  print(stuff);
  println();
  webconsoleInputting = false;
  return stuff;
}
