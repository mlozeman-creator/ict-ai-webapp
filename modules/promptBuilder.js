/*
========================================
ICT AI Assistant
Prompt Builder
Version 1.3.1
========================================
*/

function buildPrompt(question, responseStyle) {

    if (!question) {

        return "";

    }

    let template =
        PromptTemplates.standard;

    switch (responseStyle) {

        case "compact":

            template =
                PromptTemplates.compact;

            break;

        case "extensive":

            template =
                PromptTemplates.extensive;

            break;

        default:

            template =
                PromptTemplates.standard;

            break;

    }

    return template.replace(
        "{question}",
        question
    );

}
