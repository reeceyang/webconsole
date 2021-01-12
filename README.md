# webconsole
Provides a web console HTML page with print and input functions for JavaScript. A demonstration with a simple number-guessing game is available on this repository's [github-pages](https://reeceyang.github.io/webconsole/).

## Usage
1. Copy webconsole.js and webconsole.css (optional, but required if you want to use dark mode) into your project (I'm working on setting up a CDN---you can try using [https://reeceyang.github.io/webconsole/webconsole.js](https://reeceyang.github.io/webconsole/webconsole.js) for now). You can also add this repository as a git submodule.

2. Include webconsole.js and webconsole.css in your .html file. Call `Webconsole.addTo(element);` to append Webconsole to the contents of `element`, where `element` is a JS DOM object. For example,
```javascript
Webconsole.addTo(document.body);
```
adds Webconsole to the document body. Call `Webconsole.addDarkModeTo(element);` to add a dark mode toggle button to the start of the contents of `element`.

3. Write your code in an asynchronous main function:
```javascript
async function main() {
  // do stuff
}
```

4. Call the main function to run your program:

```javascript
main();
```

## Functions

#### `print(arg1, arg2, ...)`

Prints all arguments to the console, one after another.

#### `println(arg1, arg2, ...)`

Prints all arguments to the console, one after another, with a line break at the end.

#### `clear()`

Clears the content of the console output.

#### `await input(arg1, arg2, ...)`

Prints all arguments to the console, then waits for the user to input a value. Then prints a line break at the end, and returns that value. *Note:* you must place a `await` in front because `input()` is an asynchronous function.
