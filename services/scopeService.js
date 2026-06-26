/*
========================================
ICT AI Assistant
Scope Service
Version 1.4.0

Temporary implementation.

This service acts as the single entry
point for scope validation.

Currently it uses the keyword engine.

Future versions will use the
AI Scope Engine.
========================================
*/

async function checkScope(question) {

    return validateScope(question);

}
