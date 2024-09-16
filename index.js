const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
const connectDB = require("./mongoconfig.js");
const { userRoute } = require("./routes/userRoute.js");

const PORT = 8080;

app.use(cors());
app.use(express.json());
app.use("/users", userRoute);

connectDB();

app.get('/', async (req, res) => {
    res.send("Hello World!");
});

app.listen(PORT, () => {
    console.log(
        `Server running on port ${PORT}`
    );
});