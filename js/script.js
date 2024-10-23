

// Fonction pour mettre à jour l'heure réelle
function updateTime() {
    const dateSpan = document.querySelector('.dat');
    const dateSpan2 = document.querySelector('.dat2');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    // Format de l'heure: [HH:MM:SS]
    dateSpan.textContent = `[${hours}:${minutes}:${seconds}]`;
    dateSpan2.textContent = `[${hours}:${minutes}:${seconds}]`;
}

window.onload = function() {
    updateTime();

    // Activer automatiquement le champ de saisie au chargement de la page
    const promptInput = document.getElementById('prompt');
    promptInput.focus();

    // Maintenir le champ de saisie actif, même lorsqu'on clique ailleurs
    document.body.addEventListener('click', function() {
        promptInput.focus();
    });
};


document.getElementById('prompt').addEventListener('input', function() {
    const validCommands = ['help', 'chat', 'tokenomics', 'start','analytic'];
    const inputField = this;
    
    // Vérifier si la saisie est un des mots valides
    if (validCommands.includes(inputField.value.trim().toLowerCase())) {
        inputField.style.color = '#dc61a3'; // Vert si la saisie est valide
    } else {
        inputField.style.color = 'red'; // Rouge sinon
    }
});
