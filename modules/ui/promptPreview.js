/*
========================================
ICT AI Assistant
Prompt Preview
Version 1.3.1
========================================
*/

function resetPromptPreview() {

    subjectText.textContent =
        "Nog geen vraag";

    responseStyleText.textContent =
        "Standaard";

    promptBox.textContent =
        "Voer een ICT-vraag in.";

}

function updatePromptPreview(
    question,
    responseStyle
) {

    subjectText.textContent =

        question ||
        "Nog geen vraag";

    const responseStyleLabels = {
        compact: "Compact",
        standard: "Standaard",
        "standard-new": "Standaard nieuw",
        extensive: "Uitgebreid"
    };

    responseStyleText.textContent =
        responseStyleLabels[responseStyle] || responseStyle;

    if (!question) {

        promptBox.textContent =
            "Voer een ICT-vraag in.";

        return;

    }

    const prompt =
        buildPrompt(
            question,
            responseStyle
        );

    promptBox.textContent =
        prompt;

}
