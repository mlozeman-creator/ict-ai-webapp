console.log("CHATJS VERSIE 1.2.3");

export default async function handler(req, res) {

    try {

        const { prompt } = req.body;

        console.log("PROMPT:");
        console.log(prompt);

        console.log("VOOR FETCH");

        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    contents: [
                        {
                            parts: [
                                {
                                    text: prompt
                                }
                            ]
                        }
                    ]
                })
            }
        );

        console.log("NA FETCH");

        const data = await response.json();

        console.log("VOLLEDIGE RESPONSE:");
        console.log(JSON.stringify(data, null, 2));

        if (!response.ok) {

            return res.status(response.status).json({
                error:
                    data?.error?.message ||
                    "AI-service niet beschikbaar"
            });

        }

        const antwoord =
            data?.candidates?.[0]?.content?.parts?.[0]?.text;

        console.log("ANTWOORD:");
        console.log(antwoord);

        return res.status(200).json({
            antwoord:
                antwoord ||
                "Geen antwoord ontvangen."
        });

    } catch (error) {

        console.error("FOUT:");
        console.error(error);

        return res.status(500).json({
            error: error.message
        });

    }

}
