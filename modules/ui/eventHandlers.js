/*
========================================
ICT AI Assistant
Event Handlers
Version 1.3.1
========================================
*/

let currentResponseStyle =
    Settings.defaultResponseStyle;

function initializeEventHandlers() {

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

    copyButton.addEventListener(

        "click",

        copyPrompt

    );

    generateButton.addEventListener(

        "click",

        startProcess

    );

}
