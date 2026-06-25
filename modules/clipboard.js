/*
========================================
ICT AI Assistant
Clipboard Module
Version 1.3.1
========================================
*/

async function copyPrompt() {

    if (!Settings.enableClipboard) {

        return;

    }

    const promptBox =
        document.querySelector(".prompt-box");

    const copyButton =
        document.querySelector(".copy-button");

    if (!promptBox || !copyButton) {

        return;

    }

    try {

        await navigator.clipboard.writeText(
            promptBox.innerText
        );

        copyButton.innerHTML =
            "✓ Gekopieerd";

        setTimeout(() => {

            copyButton.innerHTML =
                "📋 Kopieer prompt";

        }, 2000);

    } catch (error) {

        console.error(
            "Clipboard error:",
            error
        );

    }

}
