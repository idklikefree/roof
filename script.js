window.onload = function() {
    alert("Welcome to Kent Roofing!");
};

// Function for button click event
document.getElementById('alertButton').onclick = function() {
    document.getElementById('message').innerText = "Thank you for visiting Kent Roofing!";
}; 