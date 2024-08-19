const clickSound = document.getElementById("clickSound");

document.addEventListener('DOMContentLoaded', function() {
    const allButtons = document.querySelectorAll("button"); 
    allButtons.forEach(button => {
        button.addEventListener("click", function() {
            clickSound.play();
        });
    });
});
