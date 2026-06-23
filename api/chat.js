export default async function handler(req, res) {

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
                                text: prompt
                            }
                        ]
                    }
                ]
            })
        }
    );

    const data = await response.json();

    const antwoord =
        data?.candidates?.[0]?.content?.parts?.[0]?.text;

    return res.status(200).json({
        antwoord
    });

}
