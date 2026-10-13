/*
========================================
ICT AI Assistant
Event Handlers
Version 1.5.0
========================================
*/

let currentResponseStyle =
    Settings.defaultResponseStyle;

function initializeEventHandlers() {

    /*
    ========================================
    Navigation
    ========================================
    */

    newQuestionButton.addEventListener(

        "click",

        showQuestionPage

    );

    historyButton.addEventListener(

        "click",

        showHistoryPage

    );

    dashboardButton.addEventListener(

        "click",

        showDashboardPage

    );

    examplesButton.addEventListener(

        "click",

        showExamplesPage

    );

    settingsButton.addEventListener(

        "click",

        showSettingsPage

    );

    /*
    ========================================
    Response Style
    ========================================
    */

    styleButtons.forEach(button => {

        button.addEventListener(

            "click",

            () => {

                styleButtons.forEach(item =>

                    item.classList.remove(
                        "active"
                    )

                );

                button.classList.add(
                    "active"
                );

                currentResponseStyle =
                    button.dataset.style;

                updatePromptPreview(

                    questionInput.value.trim(),

                    currentResponseStyle

                );

            }

        );

    });

    /*
    ========================================
    Question Input
    ========================================
    */

    questionInput.addEventListener(

        "input",

        () => {

            const question =
                questionInput.value.trim();

            updatePromptPreview(

                question,

                currentResponseStyle

            );

            if (question === "") {

                resetScopeUI();

                showWaitingMessage();

                resetProcessSteps();

            }

        }

    );

    /*
    ========================================
    Buttons
    ========================================
    */

    copyButton.addEventListener(

        "click",

        copyPrompt

    );

    generateButton.addEventListener(

        "click",

        startProcess

    );

}
