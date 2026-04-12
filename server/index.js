require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoute = require("./routes/auth");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Celestial Database Connected ✨"))
    .catch(err => console.log(err));

app.use("/api/auth", authRoute);

app.listen(5000, () => console.log("Server is running on 5000"));