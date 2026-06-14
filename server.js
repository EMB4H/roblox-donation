const express = require("express");
const app = express();

app.use(express.json());

let latestDonation = null;

app.get("/", (req, res) => {
    res.send("Donation server running!");
});

app.post("/webhook", (req, res) => {
    latestDonation = req.body;
    console.log("Donation:", latestDonation);
    res.sendStatus(200);
});

app.get("/latest", (req, res) => {
    res.json(latestDonation || {});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
