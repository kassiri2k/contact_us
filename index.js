const express = require('express');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.set('view engine', 'ejs');

app.get('/contact', (req, res) => {
    res.render('index')
})


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