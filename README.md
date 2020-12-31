# webconsole
Provides a web console HTML page with print and input functions for JavaScript. A demonstration with a simple number-guessing game is available on this repository's [github-pages](https://reeceyang.github.io/webconsole/).

## Usage
1. Copy webconsole.css, index.html, and webconsole.js into your project.

2. Write your code in an asynchronous main function:
```javascript
async function main() {
  // do stuff
}
```

3. Call the main function to run your program:

```javascript
main();
```

## Functions

#### `print(arg1, arg2, ...)`

Prints all arguments to the console, one after another.

#### `println(arg1, arg2, ...)`

Prints all arguments to the console, one after another, with a line break at the end.

#### `await input(arg1, arg2, ...)`

Prints all arguments to the console, then waits for the user to input a value. Then prints a line break at the end, and returns that value. *Note:* you must place a `await` in front because `input()` is an asynchronous function.
