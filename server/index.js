require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path'); 
const authRoute = require("./routes/auth");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Celestial Database Connected ✨"))
    .catch(err => console.log(err));

// API Routes
app.use("/api/auth", authRoute);

// ==========================================
// 🚀 CHAAND SITAARE FRONTEND SERVE (FIXED FOR STRICT EXPRESS V5)
// ==========================================

// 1. Static files 'client/dist' folder se serve karein
app.use(express.static(path.join(__dirname, "../client/dist")));

// 2. Named parameter syntax used for catch-all router mapping
app.get("/:splat*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));