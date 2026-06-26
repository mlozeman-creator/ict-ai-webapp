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

if (Settings.useAIScope) {

    return checkAIScope(question);

}

return validateScope(question);
