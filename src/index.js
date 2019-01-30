const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(require('./routes'));

app.listen(2020, () => {
    console.log('Running on port 2020, lets go');
});
