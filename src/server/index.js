const express = require("express");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 8000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("public"));

const awards = [
    {
        id: 1,
        title: "Best Boss Award!",
        comment: "Thanks for always looking out for us.",
        sender: "Fabian",
        receiver: "Leon",
    },
    {
        id: 2,
        title: "Longest Commute Award!",
        comment: "I can't believe Laura makes it to work as often as she does.",
        sender: "Archit",
        receiver: "Laura"
    },
    {
        id: 3,
        title: "Most likely to nap at work!",
        comment: "Maybe you need more coffee.",
        sender: "Gobi",
        receiver: "Owen"
    }
]
const users = [
    {
        name: "Alia",
        userId: 10457,
        position: "Solution Engineer"
    },
    {
        name: "Cody",
        userId: 10850,
        position: "Senior Functional Consultant"
    },
    {
        name: "Ana",
        UserId: 10222,
        position: "Lead Solution Engineer"
    }
]

app.get("/api/awards", (req, res) => res.json(awards));
app.get("/api/users", (req, res) => res.json(users));
app.get("/api/kudos", (req, res) => res.json(awards));

app.post("/api/kudos", (req, res) => {
    console.log("----THE REQUEST BODY-------------------------------");
    console.log(req.body);
    console.log("-----------------------------------");
    awards.push(req.body);
    res.json(awards)
});

app.listen(PORT, function () {
    console.log(`We are connected 🌎 on PORT ${PORT}`);
});
