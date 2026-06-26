/*
========================================
ICT AI Assistant
Page Manager
Version 1.5.0
========================================
*/

function hideAllPages() {

    questionPage.style.display =
        "none";

}

function showQuestionPage() {

    hideAllPages();

    questionPage.style.display =
        "block";

    resetProcessSteps();

    showWaitingMessage();

}

function showHistoryPage() {

    hideAllPages();

    questionPage.style.display =
        "block";

    showHistory();

}

function showDashboardPage() {

    hideAllPages();

    questionPage.style.display =
        "block";

    answerContainer.innerHTML = `

        <h3>📊 Dashboard</h3>

        <p>

            Dashboard wordt gebouwd
            in een volgende sprint.

        </p>

    `;

}

function showExamplesPage() {

    hideAllPages();

    questionPage.style.display =
        "block";

    answerContainer.innerHTML = `

        <h3>📚 Voorbeelden</h3>

        <p>

            Voorbeelden worden
            toegevoegd in een
            volgende sprint.

        </p>

    `;

}

function showSettingsPage() {

    hideAllPages();

    questionPage.style.display =
        "block";

    answerContainer.innerHTML = `

        <h3>⚙️ Instellingen</h3>

        <p>

            Instellingen worden
            toegevoegd in een
            volgende sprint.

        </p>

    `;

}
