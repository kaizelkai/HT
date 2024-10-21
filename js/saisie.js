document.addEventListener('DOMContentLoaded', () => {
    const texts = document.querySelectorAll('.content p, .saisie p, .container p');
    const images = document.querySelectorAll('.header img, .container img');

    // Fonction pour afficher le texte lettre par lettre
    function typeText(element, delay = 50) {
        const text = element.textContent;
        element.textContent = '';
        element.style.opacity = 1;

        let index = 0;
        const interval = setInterval(() => {
            if (index < text.length) {
                element.textContent += text[index];
                index++;
            } else {
                clearInterval(interval);
            }
        }, delay);
    }

    // Fonction pour révéler les images une par une
    function showImagesSequentially(elements) {
        let delay = 0;
        elements.forEach((element) => {
            setTimeout(() => {
                element.classList.add('visible');
            }, delay);
            delay += 500; // Augmentez ce délai pour contrôler le temps entre les images
        });
    }

    // Afficher le texte avec effet lettre par lettre
    let textDelay = 0;
    texts.forEach((text) => {
        setTimeout(() => {
            typeText(text);
        }, textDelay);
        textDelay += 1000; // Délai entre chaque paragraphe
    });

    // Afficher les images séquentiellement
    showImagesSequentially(images);
});
