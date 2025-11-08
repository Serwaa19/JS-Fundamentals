// Get the first command-line argument
const args = process.argv.slice(2);

// Convert it to an integer
const num = Number.parseInt(args[0]);

// Define a recursive function to compute factorial
function factorial(n) {
    if (Number.isNaN(n) || n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Print the result
console.log(factorial(num));
