// JavaScript for changing color when button is clicked
document.getElementById("colorChangeBtn").addEventListener("click", function() {
    document.body.style.backgroundColor = "#e74c3c"; // Change background to red
});
document.getElementById("colorChangeBtn").addEventListener("click", function() {
    // Prompt the user to choose a color
    let chosenColor = prompt("Enter a color name or hex code (e.g., 'red' or '#e74c3c'):");

    // If the user provides a color, apply it to the background
    if (chosenColor) {
        document.body.style.backgroundColor = chosenColor;
    } else {
        // If no color is chosen, revert to the original style
        document.body.style.backgroundColor = ""; // This will reset to the original style
    }
});

