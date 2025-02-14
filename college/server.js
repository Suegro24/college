const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const port = 3000;

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
})

app.listen(port, function() {
    console.log('Server is running on localhost:' + port);
});