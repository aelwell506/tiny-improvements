require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const salesForce = require("./config/salesforce");

const PORT = process.env.PORT || 8000;
const app = express();

// const awards = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));


app.get("/api/kudos", (req, res) => {
    salesForce.query('SELECT id, Name, Comment__c, Receiver__r.Name, Sender__r.Name FROM Kudos__c WHERE Receiver__r.Name != NULL AND Sender__r.Name != NULL').then(data => {
        console.log(data.records.map(record => record._fields));
        res.json(data.records.map(record => record._fields))
    })
});


app.get("/api/users", (req, res) => {
    salesForce.query('SELECT id, Name FROM Tiny_Improvements_User__c').then(data => {
        res.json(data.records.map(record => record._fields))
    })
});


app.post("/api/kudos", (req, res) => {
    salesForce.createKudos(req.body).then(() => {
        console.log(data.records.map(record => record._fields));
        res.json({ success: true })
    })
});

//TESTING CODE BELOW FOR FINAL EXAM


app.get("/api/filter/:id", (req, res) => {
    salesForce.query(`SELECT Id, Name, Comment__c, Receiver__r.Name, Sender__r.Name FROM Kudos__c WHERE Receiver__r.Name = '` + req.params.id + `'`).then((data) => {
        // return all of the fields from the object Kudos in SalesForce
        res.json(data.records.map(record => record._fields))
    });
});


app.listen(PORT, function () {
    console.log(`We are connected 🌎 on PORT ${PORT}`);
});
