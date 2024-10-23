
window.onload = function() {
    updateTime();

    // Activer automatiquement le champ de saisie au chargement de la page
    const promptInput = document.getElementById('prompt');
    promptInput.focus();

    // Maintenir le champ de saisie actif, même lorsqu'on clique ailleurs
    document.body.addEventListener('click', function() {
        promptInput.focus();
    });

    // Écouteur global pour détecter les commandes validées avec "Entrée"
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            const activeInput = document.activeElement;
            if (activeInput && activeInput.id === 'prompt') {
                const command = activeInput.value.trim().toLowerCase();
                handleCommand(command, activeInput);
                activeInput.setAttribute('disabled', 'true'); // Désactiver le champ après validation
            }
        }
    });

    // Fonction pour afficher la div en fonction de la commande
    function handleCommand(command, inputElement) {
        let sectionToDisplay;

        switch (command) {
            case 'help':
                sectionToDisplay = document.querySelector('.help');
                sectionToDisplay.style.display = 'flex';
                break;
            case 'chat':
                sectionToDisplay = document.querySelector('.chat');
                sectionToDisplay.style.display = 'flex';
                break;
            case 'tokenomics':
                sectionToDisplay = document.querySelector('.tokenomics');
                sectionToDisplay.style.display = 'flex';
                break;
            case 'start':
                window.location.reload(); // Redémarrer la page
                return;
            case 'analytic':
                sectionToDisplay = document.querySelector('.analytic'); // Ajoutez la section pour 'analytic' si nécessaire
                sectionToDisplay.style.display = 'flex';
                break;
            default:
                break;
        }

        if (sectionToDisplay) {
            sectionToDisplay.style.display = 'block'; // Afficher la section correspondante
        }
        
        // Créer un nouveau prompt après la section affichée
        createNewPrompt(sectionToDisplay);
    }

    // Fonction pour créer un nouveau prompt après une section spécifique
    function createNewPrompt(afterElement) {
        const newPromptWrapper = document.createElement('div');
        newPromptWrapper.classList.add('saisie');

        const label = document.createElement('label');
        label.innerHTML = `<p><span class="dat2">[${new Date().toLocaleTimeString()}]</span><span class="ch">@</span>guest<span class="ch">:$ ~ </span></p>`;

        const newPrompt = document.createElement('input');
        newPrompt.type = 'text';
        newPrompt.id = 'prompt';

        // Ajouter le champ de saisie pour le prochain prompt
        newPromptWrapper.appendChild(label);
        newPromptWrapper.appendChild(newPrompt);

        // Insérer le nouveau prompt après la section qui vient de s'afficher
        afterElement.parentNode.insertBefore(newPromptWrapper, afterElement.nextSibling);

        // Focus sur le nouveau champ de saisie
        newPrompt.focus();

        // Maintenir le focus sur le nouveau champ de saisie même si on clique ailleurs
        document.body.addEventListener('click', function() {
            newPrompt.focus();
        });

        // Écouter les changements de saisie dans le nouveau prompt
        newPrompt.addEventListener('input', function() {
            const validCommands = ['help', 'chat', 'tokenomics', 'start', 'analytic'];
            const inputField = this;
            
            // Vérifier si la saisie est un des mots valides
            if (validCommands.includes(inputField.value.trim().toLowerCase())) {
                inputField.style.color = '#dc61a3'; // Vert si la saisie est valide
            } else {
                inputField.style.color = 'red'; // Rouge sinon
            }
        });
    }

};
