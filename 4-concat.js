// Get command-line arguments, skipping "node" and script name
const args = process.argv.slice(2);

// Get the first and second arguments
const first = args[0];
const second = args[1];

// Print them in the format "first is second"
console.log(first + " is " + second);
