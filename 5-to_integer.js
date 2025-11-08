// Get command-line arguments, skipping "node" and script name
const args = process.argv.slice(2);

// Convert the first argument to an integer
const num = Number.parseInt(args[0]);

// Check if conversion succeeded and print the appropriate message
if (Number.isNaN(num)) {
    console.log("Not a number");
} else {
    console.log("My number: " + num);
}
