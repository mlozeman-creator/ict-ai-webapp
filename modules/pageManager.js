/*
========================================
ICT AI Assistant
Page Manager
Version 1.5.0

Controls which page is visible.
========================================
*/

function hideAllPages() {

    questionCard.style.display =
        "none";

    processCard.style.display =
        "none";

    answerCard.style.display =
        "none";

}

function showQuestionPage() {

    hideAllPages();

    questionCard.style.display =
        "block";

    processCard.style.display =
        "block";

    answerCard.style.display =
        "block";

}

function showHistoryPage() {

    hideAllPages();

    answerCard.style.display =
        "block";

    showHistory();

}

function showDashboardPage() {

    hideAllPages();

    answerContainer.innerHTML = `

        <h3>Dashboard</h3>

        <p>

            Dashboard wordt gebouwd
            in een volgende sprint.

        </p>

    `;

    answerCard.style.display =
        "block";

}

function showExamplesPage() {

    hideAllPages();

    answerContainer.innerHTML = `

        <h3>Voorbeelden</h3>

        <p>

            Voorbeelden worden
            toegevoegd in een
            volgende sprint.

        </p>

    `;

    answerCard.style.display =
        "block";

}

function showSettingsPage() {

    hideAllPages();

    answerContainer.innerHTML = `

        <h3>Instellingen</h3>

        <p>

            Instellingen worden
            toegevoegd in een
            volgende sprint.

        </p>

    `;

    answerCard.style.display =
        "block";

}
