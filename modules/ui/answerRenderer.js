/*
========================================
ICT AI Assistant
Answer Renderer
Version 1.5.1
========================================
*/

function showWaitingMessage() {

    answerContainer.innerHTML = `
        <h3>Wacht op een vraag</h3>

        <p>
            Klik op "Genereer antwoord"
            om het AI-proces te starten.
        </p>
    `;

}

function showLoadingMessage() {

    answerContainer.innerHTML = `
        <h3>AI verwerkt je vraag...</h3>

        <p>
            Een ogenblik geduld...
        </p>
    `;

}

function showAnswer(answer) {

    answerContainer.innerHTML = `
        <h3>AI-antwoord</h3>

        <div>

            ${answer.replace(/\n/g, "<br>")}

        </div>
    `;

}

function showRejectedMessage() {

    answerContainer.innerHTML = `
        <h3>Vraag afgekeurd</h3>

        <p>
            Deze vraag valt buiten de
            toegestane scope van de applicatie.
        </p>
    `;

}

function showErrorMessage(message) {

    answerContainer.innerHTML = `
        <h3>Fout</h3>

        <p>

            ${message}

        </p>
    `;

}

/*
========================================
Dashboard
========================================
*/

function showDashboard() {

    const usage =
        StorageService.getUsage();

    const history =
        StorageService.getHistory();

    const lastQuestion =
        history.length
            ? history[0].question
            : "-";

    const lastDate =
        history.length
            ? history[0].date
            : "-";

    const currentEngine =
        Settings.useAIScope
            ? "AI Scope Engine"
            : "Keyword Engine";

    let compact = 0;
    let standard = 0;
    let extensive = 0;

    history.forEach(item => {

        switch (item.style) {

            case "compact":

                compact++;

                break;

            case "standard":

                standard++;

                break;

            case "extensive":

                extensive++;

                break;

        }

    });

    let favoriteStyle = "-";

    if (
        compact >= standard &&
        compact >= extensive
    ) {

        favoriteStyle = "Compact";

    }

    else if (
        standard >= compact &&
        standard >= extensive
    ) {

        favoriteStyle = "Standaard";

    }

    else {

        favoriteStyle = "Uitgebreid";

    }

    answerContainer.innerHTML = `

        <h3>📊 Dashboard</h3>

        <div class="dashboard-grid">

            <div class="dashboard-card">

                <h4>📅 Vandaag</h4>

                <div class="dashboard-number">

                    ${usage.todayQuestions}

                </div>

            </div>

            <div class="dashboard-card">

                <h4>📈 Totaal</h4>

                <div class="dashboard-number">

                    ${usage.totalQuestions}

                </div>

            </div>

            <div class="dashboard-card">

                <h4>🤖 Scope Engine</h4>

                <div class="dashboard-value">

                    ${currentEngine}

                </div>

            </div>

            <div class="dashboard-card">

                <h4>⭐ Favoriete stijl</h4>

                <div class="dashboard-value">

                    ${favoriteStyle}

                </div>

            </div>

            <div class="dashboard-card">

                <h4>📚 Geschiedenis</h4>

                <div class="dashboard-number">

                    ${history.length}

                </div>

            </div>

            <div class="dashboard-card dashboard-wide">

                <h4>🕒 Laatste vraag</h4>

                <strong>

                    ${lastQuestion}

                </strong>

                <br><br>

                <small>

                    ${lastDate}

                </small>

            </div>

        </div>

    `;

}

/*
========================================
History
========================================
*/

function showHistory() {

    const history =
        StorageService.getHistory();

    if (history.length === 0) {

        answerContainer.innerHTML = `
            <h3>🕒 Geschiedenis</h3>

            <p>

                Er zijn nog geen vragen opgeslagen.

            </p>
        `;

        return;

    }

    let html = `

        <h3>🕒 Geschiedenis</h3>

    `;

    history.forEach(item => {

        html += `

            <div class="history-item">

                <strong>

                    ${item.question}

                </strong>

                <br>

                <small>

                    📅 ${item.date}

                    <br>

                    🎯 ${item.style}

                    |

                    🤖 ${item.engine}

                </small>

                <hr>

            </div>

        `;

    });

    answerContainer.innerHTML =
        html;

}

/*
========================================
Scope UI
========================================
*/

function resetScopeUI() {

    ictCheck.textContent =
        "⏳ Wacht op invoer";

    codeCheck.textContent =
        "⏳ Wacht op invoer";

    lengthCheck.textContent =
        "⏳ Wacht op invoer";

    contentCheck.textContent =
        "⏳ Wacht op invoer";

    scopeTitle.textContent =
        "⏳ Wacht op invoer";

    scopeText.textContent =
        "Vul een ICT-vraag in.";

}

function updateScopeUI(scope) {

    ictCheck.textContent =
        scope.category === "ICT"
            ? "✅ ICT-onderwerp"
            : "❌ Geen ICT-onderwerp";

    codeCheck.textContent =
        scope.containsCode
            ? "❌ Code gedetecteerd"
            : "✅ Geen code";

    lengthCheck.textContent =
        scope.questionTooLong
            ? "❌ Vraag te lang"
            : "✅ Lengte akkoord";

    contentCheck.textContent =
        scope.allowed
            ? "✅ Inhoud gecontroleerd"
            : "❌ Inhoud afgekeurd";

    if (scope.allowed) {

        scopeTitle.textContent =
            "✅ Vraag goedgekeurd";

        scopeText.textContent =
            "De vraag voldoet aan alle controles.";

    }

    else {

        scopeTitle.textContent =
            "❌ Vraag afgekeurd";

        scopeText.textContent =
            scope.reason;

    }

}
