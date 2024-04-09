const express = require("express");
const app = express();
const expressApp = require("../express/express.js" );

app.use(expressApp);

app.use(express.static('public'));
/*
app.get("/express", (req, res) => {
    res.sendFile("./express/index.html", { root: '.' });
});
*/
app.get("/datos", (req, res) => res.sendFile( __dirname + '/equipos.json'));

app.listen(3001, () => console.log("Server ready on port 3001."));

module.exports = app;