const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");
require("dotenv").config();

const app = express()

app.use(express.json());
app.use(cors({origin: true}));


app.post("/authenticate", async (req, res) => {
    const { username } = req.body;
    try {
        const response = await axios.put(
            'https://api.chatengine.io/users/',
            {username, secret: username, first_name: username},
            {headers: {"PRIVATE-KEY":"2b2314e8-3c7d-4252-8a87-6a6fb6afd0d0"}}
        );
        return res.status(response.status).json(response.data)
    } catch (error) {
        return res.status(error.response.status).json(error.response.data)
    }
})

const PORT = process.env.PORT || 3000

app.listen(PORT, console.log(`server is listen on  port: ${PORT}`))
