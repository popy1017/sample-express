const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.json({
        message: "This is sample api."
    })
});

app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));