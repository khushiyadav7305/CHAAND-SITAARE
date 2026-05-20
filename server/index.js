require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path'); // 👈 Path module import kiya
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
// 🚀 CHAAND SITAARE FRONTEND SERVE (NEW PART)
// ==========================================

// 1. Express ko batao ki static files 'client/dist' folder se uthaye
app.use(express.static(path.join(__dirname, "../client/dist")));

// 2. Saare generic web routes (jaise /, /login, /shop) ko frontend ki index.html par map karein
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

// Render par PORT environment variable se aata hai, local par 5000 chalega
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));