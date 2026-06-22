const vraagInput = document.querySelector("input");
const promptBox = document.querySelector(".prompt-box");

const stijlKnoppen =
    document.querySelectorAll(".style-option");

let huidigeStijl = "standaard";

function updatePrompt() {

    const vraag = vraagInput.value.trim();

    if (!vraag) {

        promptBox.innerHTML =
            "Voer een ICT-vraag in om de prompt-opbouw te bekijken.";

        return;
    }

    let prompt = "";

    switch (huidigeStijl) {

        case "compact":

            prompt =
                `Leg kort uit wat "${vraag}" betekent.
Maximaal 100 woorden.`;

            break;

        case "uitgebreid":

            prompt =
                `Leg uitgebreid uit wat "${vraag}" betekent.
Gebruik praktijkvoorbeelden.
Beschrijf belangrijke onderdelen.
Ga dieper in op de werking.`;

            break;

        default:

            prompt =
                `Leg duidelijk uit wat "${vraag}" betekent.
Gebruik eenvoudige taal.
Geef een praktijkvoorbeeld indien relevant.`;

    }

    promptBox.innerHTML = prompt;
}

stijlKnoppen.forEach(knop => {

    knop.addEventListener("click", () => {

        stijlKnoppen.forEach(k =>
            k.classList.remove("active")
        );

        knop.classList.add("active");

        huidigeStijl =
            knop.dataset.style;

        updatePrompt();

    });

});

vraagInput.addEventListener("input", updatePrompt);

updatePrompt();
