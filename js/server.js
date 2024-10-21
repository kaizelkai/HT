const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Configurer Express pour servir des fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Route pour récupérer le fichier JSON
app.get('/json', (req, res) => {
    fs.readFile('vote.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Erreur lors de la lecture des votes');
        }
        res.json(JSON.parse(data));
    });
});

// Route pour mettre à jour les votes
app.post('/json', (req, res) => {
    const { voteType } = req.body;
    
    // Lire le fichier JSON existant
    fs.readFile('vote.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Erreur lors de la lecture des votes');
        }
        const votes = JSON.parse(data);

        // Mettre à jour le compteur de votes
        if (voteType === 'vote1') {
            votes.vote1 += 1;
        } else if (voteType === 'vote2') {
            votes.vote2 += 1;
        }

        // Écrire les nouvelles données dans le fichier
        fs.writeFile('vote.json', JSON.stringify(votes, null, 2), (err) => {
            if (err) {
                return res.status(500).send('Erreur lors de la mise à jour des votes');
            }
            res.json(votes);
        });
    });
});

app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});
