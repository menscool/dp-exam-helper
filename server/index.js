const path = require('path')
const fs = require('fs')
const express = require('express')
const pug = require('pug')
const app = express()
const port = 3000

const examFiles = path.resolve(`${__dirname}/../exam`);

app.use(express.static(`${__dirname}/static`));
app.use(express.static(examFiles));

app.get('/', (req, res) => {
    fs.readdir(examFiles, (err, files) => {
        const html = pug.renderFile(`${__dirname}/index.pug`, { files, f: req.query.f, pretty: true });
        res.send(html);
    });
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})