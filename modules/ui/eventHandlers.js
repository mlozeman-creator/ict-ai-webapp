/*
========================================
ICT AI Assistant
Event Handlers
Version 1.4.2
========================================
*/

let currentResponseStyle =
    Settings.defaultResponseStyle;

function initializeEventHandlers() {

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
    Scope Engine
    ========================================
    */

    scopeEngineButton.addEventListener(

        "click",

        () => {

            Settings.useAIScope =
                !Settings.useAIScope;

            if (Settings.useAIScope) {

                scopeEngineStatus.textContent =
                    "🟢 AI Scope Engine";

                scopeEngineButton.textContent =
                    "Schakel naar Keyword Engine";

            }

            else {

                scopeEngineStatus.textContent =
                    "🟡 Keyword Engine";

                scopeEngineButton.textContent =
                    "Schakel naar AI Scope";

            }

        }

    );

    /*
    ========================================
    Sidebar
    ========================================
    */

    historyButton.addEventListener(

        "click",

        () => {

            showHistory();

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
