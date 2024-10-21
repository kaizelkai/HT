document.addEventListener("DOMContentLoaded", function() {
    const vote1Button = document.querySelector("button:nth-child(1)");
    const vote2Button = document.querySelector("button:nth-child(2)");
    const vote1Span = document.getElementById("vote1");
    const vote2Span = document.getElementById("vote2");

    // Charger les données des votes depuis le stockage local (simulant un fichier JSON)
    let voteData = loadVoteData();

    // Afficher les votes actuels au chargement de la page
    vote1Span.textContent = `vote1: ${voteData.vote1}`;
    vote2Span.textContent = `vote2: ${voteData.vote2}`;

    // Gestion des clics sur les boutons
    vote1Button.addEventListener("click", function() {
        voteData.vote1++;
        vote1Span.textContent = `vote1: ${voteData.vote1}`;
        saveVoteData(voteData);
    });

    vote2Button.addEventListener("click", function() {
        voteData.vote2++;
        vote2Span.textContent = `vote2: ${voteData.vote2}`;
        saveVoteData(voteData);
    });

    // Fonction pour charger les données de vote depuis le stockage local
    function loadVoteData() {
        const data = localStorage.getItem("voteData");
        if (data) {
            return JSON.parse(data);
        } else {
            // Si aucune donnée n'est trouvée, initialiser les votes à 0
            return { vote1: 0, vote2: 0 };
        }
    }

    // Fonction pour sauvegarder les données de vote dans le stockage local
    function saveVoteData(data) {
        localStorage.setItem("voteData", JSON.stringify(data));
    }
});
