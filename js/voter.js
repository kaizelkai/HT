document.addEventListener("DOMContentLoaded", function () {
    const vote1Span = document.getElementById('vote1');
    const vote2Span = document.getElementById('vote2');
    const btnVote1 = document.getElementById('btnVote1');
    const btnVote2 = document.getElementById('btnVote2');

    let voteData = { vote1: 0, vote2: 0 };

    // Charger les données de votes depuis vote.json
    fetch('json/vote.json')
        .then(response => response.json())
        .then(data => {
            voteData = data;
            updateVoteDisplay();
        })
        .catch(error => console.error('Error fetching vote data:', error));

    // Fonction pour mettre à jour l'affichage des votes
    function updateVoteDisplay() {
        vote1Span.textContent = `vote1: ${voteData.vote1}`;
        vote2Span.textContent = `vote2: ${voteData.vote2}`;
    }

    // Gestion des clics sur les boutons
    btnVote1.addEventListener('click', function () {
        voteData.vote1++;
        updateVoteDisplay();
        saveVotes();
    });

    btnVote2.addEventListener('click', function () {
        voteData.vote2++;
        updateVoteDisplay();
        saveVotes();
    });

    // Fonction pour enregistrer les données dans localStorage (pas dans le fichier JSON)
    function saveVotes() {
        localStorage.setItem('voteData', JSON.stringify(voteData));
    }

    // Charger les données de localStorage si disponibles
    const savedVotes = localStorage.getItem('voteData');
    if (savedVotes) {
        voteData = JSON.parse(savedVotes);
        updateVoteDisplay();
    }
});
