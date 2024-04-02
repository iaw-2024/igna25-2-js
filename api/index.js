const express = require("express");
const app = express();
const expressApp = require("../public/express/express.js" );

app.use(expressApp);

app.use(express.static('public'));

app.get("/express", (req, res) => {
    res.sendFile("./public/express/index.html", { root: '.' });
});

app.get("/cliente_servidor", (req, res) => {
    res.sendFile("./public/cliente_servidor/index.html", { root: '.' });
});

app.get("/datos", (req, res) => {
    res.sendFile("./public/dom/equipos.json", { root: '.' });
});

app.listen(3001, () => console.log("Server ready on port 3001."));

module.exports = app;