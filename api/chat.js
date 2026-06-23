export default async function handler(req, res) {

    if (req.method !== "POST") {

        return res.status(405).json({
            error: "Method not allowed"
        });

    }

    try {

        const { prompt } = req.body;

        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemma-4-31b-it:generateContent?key=${process.env.GEMINI_API_KEY}`,
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
                                    text: `
Beantwoord onderstaande vraag direct.

Geef het uiteindelijke antwoord.
Geef geen analyse.
Geef geen instructies.
Geef geen rolbeschrijving.
Geef geen uitleg over hoe je gaat antwoorden.

Antwoord altijd in het Nederlands.

Vraag:

${prompt}
`
                                }
                            ]
                        }
                    ]
                })
            }
        );

        const data = await response.json();

        if (!response.ok) {

            return res.status(response.status).json({
                error:
                    data?.error?.message ||
                    "AI-service niet beschikbaar"
            });

        }

        const antwoord =
            data?.candidates?.[0]?.content?.parts?.[0]?.text;

        return res.status(200).json({
            antwoord:
                antwoord ||
                "Geen antwoord ontvangen van het model."
        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            error:
                "Serverfout tijdens AI-verzoek"
        });

    }

}
