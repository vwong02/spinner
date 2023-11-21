let str = process.stdout.write('hello from spinner1.js... \rheyyy\n');

let delay = 200;
let spinnerStr = ['\r|   ', '\r/   ', '\r-   ', '\r\\   '];

for (const char of spinnerStr) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
  delay += 200;
}
