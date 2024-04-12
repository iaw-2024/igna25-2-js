const express = require("express");
const app = express();
const expressApp = require("../express/express.js" );
const path = require('path');

app.use(expressApp);

app.get("/datos", (req, res) => {
    res.sendFile(path.join(__dirname,'../public/dom/equipos.json'));
});

app.use(express.static('public'));

app.listen(3001, () => console.log("Server ready on port 3001."));

module.exports = app;