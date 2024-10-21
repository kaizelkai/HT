document.addEventListener("DOMContentLoaded", function () {
    function typeWriter(element, delay = 50) {
        const originalHtml = element.innerHTML;
        element.innerHTML = ""; 
        element.style.visibility = "visible"; // Rendre le texte visible au moment de la frappe

        let index = 0;

        function type() {
            if (index < originalHtml.length) {
                // Vérifier si on rencontre un balisage HTML comme <br>
                if (originalHtml[index] === "<") {
                    let closingIndex = originalHtml.indexOf(">", index);
                    if (closingIndex !== -1) {
                        element.innerHTML += originalHtml.slice(index, closingIndex + 1);
                        index = closingIndex + 1;
                    }
                } else {
                    element.innerHTML += originalHtml.charAt(index);
                    index++;
                }
                setTimeout(type, delay);
            }
        }

        type();
    }

    const text1 = document.getElementById("text1");
    const text2 = document.getElementById("text2");

    // Appliquer l'effet de frappe
    setTimeout(() => typeWriter(text1, 50), 1000); // Petit délai avant de commencer le premier texte
    setTimeout(() => typeWriter(text2, 50), (text1.textContent.length * 50) + 1500); // Commence après le premier texte
});
