const express = require("express");
const app = express();
const expressApp = require("../express/express.js" );

app.use(expressApp);

app.get("/datos", (req, res) => {
    res.sendFile("./public/dom/equipos.json", { root: '.' });
});

app.use(express.static('public'));

app.listen(3001, () => console.log("Server ready on port 3001."));

module.exports = app;