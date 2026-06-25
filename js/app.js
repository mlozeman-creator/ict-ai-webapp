const vraagInput =
    document.querySelector("input");

const promptBox =
    document.querySelector(".prompt-box");

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

const genereerKnop =
    document.querySelector(".button");

const copyKnop =
    document.querySelector(".copy-button");

const stappen =
    document.querySelectorAll(".step");

const antwoordVak =
    document.querySelector(".answer");

let huidigeStijl =
    "standaard";

const ictWoorden = [

    "api",
    "html",
    "css",
    "javascript",
    "js",
    "typescript",
    "python",
    "java",
    "c#",
    "php",
    "sql",
    "database",
    "mysql",
    "postgresql",
    "mongodb",
    "server",
    "client",
    "netwerk",
    "subnet",
    "router",
    "switch",
    "dns",
    "dhcp",
    "tcp",
    "ip",
    "vpn",
    "firewall",
    "azure",
    "aws",
    "cloud",
    "linux",
    "windows",
    "github",
    "git",
    "docker",
    "kubernetes",
    "ai",
    "ict",
    "frontend",
    "backend",
    "json",
    "xml",
    "rest",
    "graphql"

];

function resetScope() {

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

}

function controleerScope(vraag) {

    const klein =
        vraag.toLowerCase();

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

        return true;

    }

    scopeTitel.innerHTML =
        "❌ Afgekeurd";

    scopeTekst.innerHTML =
        "Deze vraag valt buiten de toegestane scope.";

    return false;

}

function bouwPrompt(vraag) {

    if (!vraag) return "";

    switch (huidigeStijl) {

        case "compact":

            return `Leg kort uit wat "${vraag}" betekent.

Antwoord in het Nederlands.

Gebruik maximaal 100 woorden.

Geef één praktijkvoorbeeld.`;

        case "uitgebreid":

            return `Leg uitgebreid uit wat "${vraag}" betekent.

Antwoord in het Nederlands.

Gebruik Markdown met duidelijke kopjes.

Leg stap voor stap uit.

Gebruik meerdere praktijkvoorbeelden.

Beschrijf ook de werking.

Sluit af met een korte samenvatting.`;

        default:

            return `Leg duidelijk uit wat "${vraag}" betekent.

Antwoord in het Nederlands.

Gebruik eenvoudige taal.

Gebruik Markdown.

Geef minimaal één praktijkvoorbeeld.`;

    }

}

function updatePrompt() {

    const vraag =
        vraagInput.value.trim();

    onderwerpTekst.textContent =
        vraag || "Nog geen vraag";

    stijlTekst.textContent =
        huidigeStijl.charAt(0).toUpperCase() +
        huidigeStijl.slice(1);

    if (!vraag) {

        promptBox.textContent =
            "Voer een ICT-vraag in.";

        resetScope();

        return;

    }

    controleerScope(vraag);

    promptBox.textContent =
        bouwPrompt(vraag);

}
stijlKnoppen.forEach(knop => {

    knop.addEventListener("click", () => {

        stijlKnoppen.forEach(
            k => k.classList.remove("active")
        );

        knop.classList.add("active");

        huidigeStijl =
            knop.dataset.style;

        updatePrompt();

    });

});

vraagInput.addEventListener(
    "input",
    updatePrompt
);

function resetStappen() {

    stappen.forEach(stap => {

        stap.style.opacity = "0.4";

    });

}

function activeerStap(index) {

    stappen[index].style.opacity = "1";

}

function wacht(ms) {

    return new Promise(resolve =>
        setTimeout(resolve, ms)
    );

}

async function startProces() {

    const vraag =
        vraagInput.value.trim();

    if (!vraag) return;

    const toegestaan =
        controleerScope(vraag);

    if (!toegestaan) {

        antwoordVak.innerHTML = `
            <h3>Vraag afgekeurd</h3>
            <p>
                Deze vraag valt buiten de scope van de applicatie.
            </p>
        `;

        return;

    }

    const prompt =
        bouwPrompt(vraag);

    resetStappen();

    antwoordVak.innerHTML =
        "<h3>AI verwerkt je vraag...</h3>";

    activeerStap(0);

    await wacht(250);

    activeerStap(1);

    await wacht(250);

    activeerStap(2);

    try {

        const response =
            await fetch("/api/chat", {

                method: "POST",

                headers: {
                    "Content-Type":
                        "application/json"
                },

                body: JSON.stringify({
                    prompt
                })

            });

        const data =
            await response.json();

        activeerStap(3);

        let antwoord =
            data.antwoord ||
            data.error ||
            "Geen antwoord ontvangen.";

        antwoord =
            antwoord.replace(/\n/g, "<br>");

        antwoordVak.innerHTML = `
            <h3>AI-antwoord</h3>
            <div>${antwoord}</div>
        `;

    } catch (error) {

        antwoordVak.innerHTML = `
            <h3>Fout</h3>
            <p>
                Er is een fout opgetreden bij het ophalen van het AI-antwoord.
            </p>
        `;

        console.error(error);

    }

}
async function kopieerPrompt() {

    const tekst =
        promptBox.innerText;

    await navigator.clipboard.writeText(
        tekst
    );

    copyKnop.innerHTML =
        "✓ Gekopieerd";

    setTimeout(() => {

        copyKnop.innerHTML =
            "📋 Kopieer prompt";

    }, 2000);

}

copyKnop.addEventListener(
    "click",
    kopieerPrompt
);

genereerKnop.addEventListener(
    "click",
    startProces
);

resetScope();
updatePrompt();
