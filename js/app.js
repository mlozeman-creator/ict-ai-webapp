/*
========================================
ICT AI Assistant
Application Entry Point
Version 1.4.1
========================================
*/

function updateUsageCard() {

    const usage =
        StorageService.getUsage();

    todayUsage.textContent =
        usage.todayQuestions;

    totalUsage.textContent =
        usage.totalQuestions;

}

document.addEventListener(

    "DOMContentLoaded",

    () => {

        resetPromptPreview();

        showWaitingMessage();

        updateUsageCard();

        initializeEventHandlers();

    }

);
