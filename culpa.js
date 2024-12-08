// Using the constant YOFFSET
function drawArc(x, y) {
    // Assuming x is a fixed value and y needs to be adjusted by the yOffset
    let yOffset = 20;
    let yPos = y + yOffset; // Adjusting y position using YOFFSET constant
    console.log(`Arc positioned at (${x}, ${yPos})`);
}

drawArc(10, 30); // Output: Arc positioned at (10, 50)
