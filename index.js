// function init() {
//   var line;
//   var oldLength = 0;
//   var input = document.getElementById("in");
//   var out = document.getElementById("out");
//   input.addEventListener("input", function() {
//     line = input.innerHTML;
//     out.innerHTML = out.innerHTML.substring(0, out.innerHTML.length-oldLength);
//     out.innerHTML += line;
//     oldLength = line.length;
//   });
//   function println(stuff) {
//     out.innerHTML += stuff + "<br>";
//   }
//   function print(stuff) {
//     out.innerHTML += stuff;
//   }
//   println("Hello World");
// }
// function println(stuff, out) {
//   out.innerHTML += stuff + "<br>";
// }
// function print(stuff, out) {
//   out.innerHTML += stuff;
// }

var inp = document.getElementById("in");
var out = document.getElementById("out");

var inputting = false;

// should probably update these to take no arguments
function println(stuff) {
  out.innerHTML += stuff + "<br>";
}
function print(stuff) {
  out.innerHTML += stuff;
}

// var enterPressed = new Promise(function(resolve, reject) {
//   inp.addEventListener("keyup", function(event) {
//     if(event.key === "Enter" & inputting) {
//       //inp.innerHTML = inp.innerHTML.substring(0, out.innerHTML.length - 1);
//       //enterPressed = true;
//       console.log("enter pressed");
//       resolve("Yes");
//     }
//   });
// });

async function input() {
  var enterPressed = new Promise(function(resolve, reject) {
    inp.addEventListener("keyup", function(event) {
      if(event.key === "Enter" & inputting) {
        //inp.innerHTML = inp.innerHTML.substring(0, out.innerHTML.length - 1);
        //enterPressed = true;
        console.log("enter pressed");
        resolve("Yes");
      }
    });
  });

  inputting = true;
  await enterPressed;
  var stuff = inp.value;
  inp.value = "";
  print(stuff);
  println("");
  enterPressed = Promise.reject("inputted");
  console.log(stuff);
  inputting = false;
  return stuff;
}

async function main() {
  var num = Math.floor((Math.random() * 100) + 1);
  guess = -1;
  while (guess != num) {
    println("guess a number between 1 and 100 ");
    var guess = parseInt(await input());
    if (guess > num) {
      println("too high");
    } else if (guess < num) {
      println("too low");
    }
  }
  println("You win!");
}

main();
