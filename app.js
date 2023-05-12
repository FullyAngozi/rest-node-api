const express = require("express")

const app = express();

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`serving in ${PORT} today`)
})

app.get("/", (req, res) => {

    res.send(`Welcome to ${PORT}`)
})