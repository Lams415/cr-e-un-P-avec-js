var tableau = ["eyal", "libi", "Shani", "lihi"];

const gens = document.getElementById("Nom");

for (let i = 0; i < tableau.length; i++) {
    let personne = tableau[i];
    let personneDuTableau = document.createElement("p");

    personneDuTableau.textContent = personne;
    personneDuTableau.dataset.index = [i];

    personneDuTableau.addEventListener("click", function() {
        showResult(i, personneDuTableau);
    });

    gens.appendChild(personneDuTableau);
}

const eyalito = tableau[0];
