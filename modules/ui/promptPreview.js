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

    responseStyleText.textContent =

        responseStyle.charAt(0).toUpperCase() +
        responseStyle.slice(1);

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
