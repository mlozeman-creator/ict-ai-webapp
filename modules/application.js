/*
========================================
ICT AI Assistant
Application Controller
Version 1.3.1
========================================
*/

async function startProcess() {

    const question =
        questionInput.value.trim();

    if (!question) {

        return;

    }

    const scope =
        validateScope(question);

    updateScopeUI(scope);

    if (!scope.allowed) {

        showRejectedMessage();

        return;

    }

    const prompt =
        buildPrompt(

            question,

            currentResponseStyle

        );

    resetProcessSteps();

    showLoadingMessage();

    activateProcessStep(0);

    await delay(250);

    activateProcessStep(1);

    await delay(250);

    activateProcessStep(2);

    const result =
        await generateAnswer(prompt);

    activateProcessStep(3);

    completeProcess();

    if (!result.success) {

        showErrorMessage(

            result.error

        );

        return;

    }

    showAnswer(

        result.answer

    );

}
