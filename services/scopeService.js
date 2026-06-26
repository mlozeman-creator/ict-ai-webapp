/*
========================================
ICT AI Assistant
Scope Service
Version 1.4.0

This service is the single entry point
for all scope validation.

Currently:

- Keyword Engine
- AI Scope Engine (placeholder)

========================================
*/

async function checkScope(question) {

    if (Settings.useAIScope) {

        return await checkAIScope(question);

    }

    return validateScope(question);

}

async function checkAIScope(question) {

    /*
    ========================================
    Placeholder

    In Sprint 2 this function will call
    Gemini to classify the question.

    For now we reuse the existing
    keyword validation so the rest of
    the application already works.
    ========================================
    */

    return validateScope(question);

}
