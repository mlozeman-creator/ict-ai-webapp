/*
========================================
ICT AI Assistant
Scope Engine
Version 1.3.1

NOTE:
This is a temporary implementation.

In a future release this module will
use AI instead of a keyword list.
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
            "No question provided.";

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
            "Question is within the ICT scope.";

    } else if (!isICT) {

        result.reason =
            "Question is outside the ICT scope.";

    } else if (result.containsCode) {

        result.reason =
            "Code snippets are not allowed.";

    } else if (result.questionTooLong) {

        result.reason =
            "Question exceeds the maximum length.";

    }

    return result;

}
