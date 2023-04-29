const express = require('express');
// To store variables environment
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');

app = express();

// for parsing the data of the request, use json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
// set the engine for rendering
app.set('view engine', 'ejs');

//Get request
app.get('/contact', (req, res) => {
    res.render('index')
})

//Post request
app.post('/contact', (req, res) => {
    const {
        name,
        email,
        message
    } = req.body;

    console.log(`Received a message from ${name} (${email}): ${message}`);

    res.send('Thanks for your message!');
});

port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server is running at ${port}
`))