const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;
const docker = require('./docker');

app.listen(port, () => console.log(`I'm listening on port ${port}`));

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/', (req, res, next) => {
    const { code, tests } = req.body;
    docker.runCommand(code, tests).then(results => res.send(results));
})
