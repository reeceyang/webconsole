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

async function main() {
  var num = Math.floor((Math.random() * 100) + 1);
  guess = -1;
  while (guess != num) {
    var guess = parseInt(await input("guess a number between 1 and 100: "));
    if (guess > num) {
      println("too high");
    } else if (guess < num) {
      println("too low");
    }
  }
  println("You win!");
}

main();
