// const express = require('express');
// const bodyParser = require('body-parser');
// const axios = require('axios');
//
// const app = express();
//
// app.use(bodyParser.json());
// app.use(express.static('public'));
//
// const OPENAI_API_KEY = 'tpsg-o62cVZYgPIdR6XhyW6aIR05CkQyyjCZ';
// const OPENAI_API_BASE = 'https://api.metisai.ir/openai/v1';
//
// app.post('/api/check-grammar', async (req, res) => {
//     const { text } = req.body;
//
//     try {
//         const response = await axios.post(
//             `${OPENAI_API_BASE}/chat/completions`,
//             {
//                 model: 'gpt-4o-mini',
//                 messages: [
//                     { role: 'system', content: 'You are a helpful assistant that checks grammar and improves sentences.' },
//                     { role: 'user', content: `Check the grammar of this text and suggest corrections:\n${text}` },
//                 ],
//                 temperature: 0.7,
//             },
//             { headers: { Authorization: `Bearer ${OPENAI_API_KEY}` } }
//         );
//
//         const reply = response.data.choices[0].message.content;
//         res.json({ result: reply });
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).json({ error: 'An error occurred while processing your request.' });
//     }
// });
//
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });

const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');  // اضافه کردن CORS

const app = express();

// استفاده از CORS
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

const OPENAI_API_KEY = 'tpsg-o62cVZYgPIdR6XhyW6aIR05CkQyyjCZ';
const OPENAI_API_BASE = 'https://api.metisai.ir/openai/v1';

app.post('/api/check-grammar', async (req, res) => {
    const { text } = req.body;

    try {
        const response = await axios.post(
            `${OPENAI_API_BASE}/chat/completions`,
            {
                model: 'gpt-4o-mini',
                messages: [
                    { role: 'system', content: 'You are a helpful assistant that checks grammar and improves sentences.' },
                    { role: 'user', content: `Check the grammar of this text and suggest corrections:\n${text}` },
                ],
                temperature: 0.7,
            },
            { headers: { Authorization: `Bearer ${OPENAI_API_KEY}` } }
        );

        const reply = response.data.choices[0].message.content;
        res.json({ result: reply });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'An error occurred while processing your request.' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});