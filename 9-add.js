// Get command-line arguments
const args = process.argv.slice(2);

// Convert arguments to integers
const a = Number.parseInt(args[0]);
const b = Number.parseInt(args[1]);

// Function to add two numbers
function add(a, b) {
    return a + b;
}

// Print the result
console.log(add(a, b));

