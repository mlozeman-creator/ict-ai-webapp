/*
========================================
ICT AI Assistant
Process Manager
Version 1.3.1
========================================
*/

function getProcessSteps() {

    return document.querySelectorAll(
        ".step"
    );

}

function resetProcessSteps() {

    const steps =
        getProcessSteps();

    steps.forEach(step => {

        step.style.opacity =
            "0.4";

    });

}

function activateProcessStep(index) {

    const steps =
        getProcessSteps();

    if (!steps[index]) {

        return;

    }

    steps[index].style.opacity =
        "1";

}

function completeProcess() {

    const steps =
        getProcessSteps();

    steps.forEach(step => {

        step.style.opacity =
            "1";

    });

}

function delay(milliseconds) {

    return new Promise(resolve =>

        setTimeout(
            resolve,
            milliseconds
        )

    );

}
