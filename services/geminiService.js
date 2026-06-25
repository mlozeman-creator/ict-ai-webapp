/*
========================================
ICT AI Assistant
Gemini Service
Version 1.3.1

This service is reserved for future
AI functionality.

The current application communicates
with Gemini through the backend
/api/chat endpoint.

Future responsibilities:

- Model selection
- Gemini-specific settings
- AI Scope Engine
- Consensus Engine
========================================
*/

const GeminiService = {

    model: "gemini-2.5-flash",

    provider: "Google",

    version: "v1beta",

    isAvailable() {

        return true;

    },

    getModel() {

        return this.model;

    },

    getProvider() {

        return this.provider;

    }

};
