const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(function (req, res, next) {
    res.setHeader('Content-Type', 'application/json'); 
    next();
});


app.get('/', (req, res) => {
    res.json({
        message: "This is sample api."
    })
});

app.post('/', (req, res) => {

    try {
        const body = req.body;
        res.json({
            message: "This is sample api.",
            body: body
        })
    } catch (error) {
        console.log(error.message);
        res.status(415);
        res.json({
            message: "Bad request",
            error: error.message
        });
    }    
});

app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));