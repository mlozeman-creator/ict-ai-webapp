/*
========================================
ICT AI Assistant
Answer Renderer
Version 1.4.2
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

function showHistory() {

    const history =
        StorageService.getHistory();

    if (history.length === 0) {

        answerContainer.innerHTML = `
            <h3>Geschiedenis</h3>

            <p>

                Er zijn nog geen vragen opgeslagen.

            </p>
        `;

        return;

    }

    let html = `
        <h3>Geschiedenis</h3>
    `;

    history.forEach(item => {

        html += `

            <div class="history-item">

                <strong>

                    ${item.question}

                </strong>

                <br>

                <small>

                    ${item.date}

                    <br>

                    ${item.style}

                    |

                    ${item.engine}

                </small>

                <hr>

            </div>

        `;

    });

    answerContainer.innerHTML =
        html;

}

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
