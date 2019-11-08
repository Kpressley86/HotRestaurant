let express = require("express");
let path = require("path");
let app = express();
const PORT = 3000;

// will display data in JSON format
app.use(express.json());
// reads arrays/strings from form POSTs:
// This is required in order to do posts.
app.use(express.urlencoded({ extended: true }));
// what does this do?!
// residing in single spot and not being reference directly
app.use(express.static('public'));

var party = [
    {
        resID: "",
        name: "",
        eMail: "",
        phoneNumber: "",
    }
];

var waitList = [];
var tables = [];


app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "public/tables.html"));
});

app.get("/reservations", function (req, res) {
    res.sendFile(path.join(__dirname, "public/reservations.html"));
});

app.get("/api/waitlist", function (req, res) {
    return res.json(party);
});

app.get("/api/tables", function (req, res) {
    return res.json(party);
});

// Create New Party - takes in JSON input
app.post("/api/waitlist", function (req, res) {
    var newParty = req.body;
    console.log(newParty);
    party.push(newParty);
    res.json(newParty);
});

app.post("/api/tables", function (req, res) {
    var newParty = req.body;
    console.log(newParty);
    party.push(newParty);
    res.json(newParty);
});

app.listen(PORT, function () {
    console.log(`App lsitening on http://localhost:${PORT}`);
});