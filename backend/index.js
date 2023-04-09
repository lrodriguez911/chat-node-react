const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express()

app.use(express.json());
app.use(cors({origin: true}));


app.post("/authenticate", async (req, res) => {
    const { username } = req.body;
    return res.json({username, secret: "secrete key"})
})

const PORT = process.env.PORT || 3000

app.listen(PORT, console.log(`server is listen on  port:${PORT}`))
