// Get the first command-line argument
const args = process.argv.slice(2);

// Convert it to an integer
const count = Number.parseInt(args[0]);

// Check if conversion failed
if (Number.isNaN(count)) {
    console.log("Missing number of occurrences");
} else {
    let i = 0;
    while (i < count) {
        console.log("C is fun");
        i++;
    }
}
