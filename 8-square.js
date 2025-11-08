// Get the first command-line argument
const args = process.argv.slice(2);

// Convert it to an integer
const size = Number.parseInt(args[0]);

// Check if conversion failed
if (Number.isNaN(size)) {
    console.log("Missing size");
} else {
    // Loop to print each row of the square
    for (let i = 0; i < size; i++) {
        console.log("X".repeat(size));
    }
}
