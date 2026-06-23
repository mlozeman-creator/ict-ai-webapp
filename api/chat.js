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
                            role: "user",
                            parts: [
                                {
                                    text: `
Je bent een deskundige Nederlandse ICT-docent.

BELANGRIJK:
- Antwoord ALTIJD in het Nederlands.
- Gebruik duidelijke en begrijpelijke taal.
- Gebruik Markdown-opmaak.
- Gebruik kopjes waar relevant.
- Gebruik opsommingstekens waar relevant.
- Geef praktijkvoorbeelden indien mogelijk.
- Beantwoord uitsluitend ICT-gerelateerde vragen.

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

        const data =
            await response.json();

        if (!response.ok) {

            return res.status(response.status).json({
                error:
                    data.error?.message ||
                    "Onbekende Gemini fout"
            });

        }

        const antwoord =
            data.candidates?.[0]?.content?.parts?.[0]?.text;

        return res.status(200).json({
            antwoord:
                antwoord ||
                "Geen antwoord ontvangen van AI."
        });

    } catch (error) {

        return res.status(500).json({
            error:
                error.message
        });

    }

}
