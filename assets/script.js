document.addEventListener("DOMContentLoaded", function() {
    const pageTitle = document.title;
    document.title = pageTitle + " | Ruiny zapomenutého světa";

    const nameForm = document.getElementById('nameForm');
    if (nameForm) {
        const nameInput = document.getElementById('nameInput');

        nameForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const playerName = nameInput.value;
            localStorage.setItem('playerName', playerName);
            window.location.href = './1-step.html'; 
        });
    }

    const playerNameElement = document.getElementById('playerName');
    if (playerNameElement) {
        const playerName = localStorage.getItem('playerName');
        if (playerName) {
            playerNameElement.textContent = `${playerName}, nás bohužel opustil. Klikni pro restart.`;
        } else {
            playerNameElement.textContent = "Nás bohužel opustil. Klikni pro restart.";
        }
    }
});