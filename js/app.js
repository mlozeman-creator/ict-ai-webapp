const vraagInput = document.querySelector("input");
const promptBox = document.querySelector(".prompt-box");

function updatePrompt() {

    const vraag = vraagInput.value.trim();

    if (!vraag) {

        promptBox.innerHTML =
            "Voer een ICT-vraag in om de prompt-opbouw te bekijken.";

        return;
    }

    promptBox.innerHTML =
        `Leg duidelijk uit wat "${vraag}" betekent.
Gebruik eenvoudige taal.
Geef een praktijkvoorbeeld indien relevant.`;
}

vraagInput.addEventListener("input", updatePrompt);
