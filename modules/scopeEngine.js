/*
========================================
ICT AI Assistant
Scope Engine
Version 1.3.1
========================================
*/

function validateScope(question) {

    const result = {

        allowed: false,

        category: "Unknown",

        confidence: 0,

        reason: "",

        containsCode: false,

        questionTooLong: false

    };

    if (!question) {

        result.reason =
            "Voer een vraag in.";

        return result;

    }

    const lowerQuestion =
        question.toLowerCase();

    result.containsCode =

        question.includes("{") ||
        question.includes("function") ||
        question.includes("class ");

    result.questionTooLong =

        question.length >
        Settings.maxQuestionLength;

    const isICT =

        ictKeywords.some(keyword =>

            lowerQuestion.includes(keyword)

        );

    result.allowed =

        isICT &&
        !result.containsCode &&
        !result.questionTooLong;

    if (isICT) {

        result.category =
            "ICT";

        result.confidence =
            80;

    }

    if (result.allowed) {

        result.reason =
            "De vraag voldoet aan alle controles.";

    }
    else if (!isICT) {

        result.reason =
            "Deze vraag valt buiten de ICT-scope.";

    }
    else if (result.containsCode) {

        result.reason =
            "Codefragmenten zijn niet toegestaan.";

    }
    else if (result.questionTooLong) {

        result.reason =
            "De vraag is te lang.";

    }

    return result;

}
