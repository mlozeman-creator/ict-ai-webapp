
/*
========================================
ICT AI Assistant
API Module
Version 1.3.1
========================================
*/

async function generateAnswer(prompt) {

    try {

        const response =
            await fetch(
                Settings.apiEndpoint,
                {

                    method: "POST",

                    headers: {

                        "Content-Type":
                            "application/json"

                    },

                    body: JSON.stringify({

                        prompt

                    })

                }
            );

        const data =
            await response.json();

        if (!response.ok) {

            return {

                success: false,

                answer: null,

                error:

                    data.error ||
                    "Unknown API error."

            };

        }

        return {

            success: true,

            answer:

                data.antwoord,

            error: null

        };

    } catch (error) {

        console.error(
            "API Error:",
            error
        );

        return {

            success: false,

            answer: null,

            error:
                "Unable to connect to the AI service."

        };

    }

}
