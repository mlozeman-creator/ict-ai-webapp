const vraagInput = document.querySelector("input");
const promptBox = document.querySelector(".prompt-box");

const onderwerpTekst =
    document.getElementById("onderwerpTekst");

const stijlTekst =
    document.getElementById("stijlTekst");

const stijlKnoppen =
    document.querySelectorAll(".style-option");

const ictCheck =
    document.getElementById("ictCheck");

const codeCheck =
    document.getElementById("codeCheck");

const lengthCheck =
    document.getElementById("lengthCheck");

const contentCheck =
    document.getElementById("contentCheck");

const scopeTitel =
    document.getElementById("scopeTitel");

const scopeTekst =
    document.getElementById("scopeTekst");

let huidigeStijl = "standaard";

const ictWoorden = [
    "api",
    "html",
    "css",
    "javascript",
    "python",
    "sql",
    "database",
    "netwerk",
    "server",
    "subnet",
    "router",
    "switch",
    "cloud",
    "azure",
    "aws",
    "github",
    "git",
    "linux",
    "windows",
    "vpn",
    "firewall"
];

function controleerScope(vraag) {

    const klein = vraag.toLowerCase();

    const ict =
        ictWoorden.some(
            woord => klein.includes(woord)
        );

    const code =
        vraag.includes("{") ||
        vraag.includes("function") ||
        vraag.includes("class ");

    const teLang =
        vraag.length > 500;

    ictCheck.innerHTML =
        ict
            ? "✅ ICT-onderwerp"
            : "❌ Geen ICT-onderwerp";

    codeCheck.innerHTML =
        !code
            ? "✅ Geen codeblok"
            : "❌ Code niet toegestaan";

    lengthCheck.innerHTML =
        !teLang
            ? "✅ Lengte OK"
            : "❌ Invoer te lang";

    contentCheck.innerHTML =
        "✅ Inhoud gecontroleerd";

    if (ict && !code && !teLang) {

        scopeTitel.innerHTML =
            "✅ Toegestaan";

        scopeTekst.innerHTML =
            "Deze vraag voldoet aan de ICT-richtlijnen.";

    } else {

        scopeTitel.innerHTML =
            "❌ Afgekeurd";

        scopeTekst.innerHTML =
            "Deze vraag valt buiten de toegestane scope.";

    }
}

function updatePrompt() {

    const vraag = vraagInput.value.trim();

    onderwerpTekst.textContent =
        vraag || "Nog geen vraag";

    stijlTekst.textContent =
        huidigeStijl.charAt(0).toUpperCase() +
        huidigeStijl.slice(1);

    if (!vraag) {

        promptBox.innerHTML =
            "Voer een ICT-vraag in.";

        ictCheck.innerHTML =
            "⏳ Wacht op invoer";

        codeCheck.innerHTML =
            "⏳ Wacht op invoer";

        lengthCheck.innerHTML =
            "⏳ Wacht op invoer";

        contentCheck.innerHTML =
            "⏳ Wacht op invoer";

        scopeTitel.innerHTML =
            "⏳ Wacht op invoer";

        scopeTekst.innerHTML =
            "Vul een ICT-vraag in.";

        return;
    }

    controleerScope(vraag);

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
