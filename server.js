const express = require("express");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");
require("dotenv").config();
const SECRET_KEY = process.env.JWT_SECRET;


const app = express();
const PORT = 3001;
const DB_PATH = path.join(__dirname, "db.json");

app.use(cors());
app.use(bodyParser.json());

function readDB() {
    if (!fs.existsSync(DB_PATH)) {
        fs.writeFileSync(DB_PATH, JSON.stringify({ users: [] }, null, 2));
    }
    const data = fs.readFileSync(DB_PATH, "utf-8");
    return JSON.parse(data);
}

function writeDB(data) {
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
}

// Реєстрація з хешуванням пароля
app.post("/users/register", async (req, res) => {
    const { userId, username, password, avatar, email } = req.body;

    console.log(1)
    if (!username || !password || !userId) {
        return res.status(400).json({ message: "Missing required fields." });
    }

    const db = readDB();

    const userExists = db.users.find(u => u.username === username);
    if (userExists) {
        return res.status(409).json({ message: "User already exists." });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10); // 10 — salt rounds
        const newUser = { userId, username, password: hashedPassword, avatar,email };
        db.users.push(newUser);
        writeDB(db);

        res.status(201).json({ message: "User registered successfully." });
    } catch (err) {
        console.error("Hashing error:", err);
        res.status(500).json({ message: "Server error while registering user." });
    }
});

app.post("/users/login", async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "Missing username or password." });
    }
    console.log(2)
    const db = readDB();
    const user = db.users.find(u => u.username === username);
    if (!user) {
        return res.status(401).json({ message: "Invalid username or password." });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid username or password." });
    }

    const token = jwt.sign(
        { userId: user.userId, username: user.username },
        SECRET_KEY,
        { expiresIn: "1h" }
    );

    res.json({ token, user:{username:user.username, email:user.email,avatar:user.avatar} });
});


function authenticateToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) return res.sendStatus(401);

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}

// Приклад використання
app.get("/users/me", authenticateToken, (req, res) => {
    const db = readDB();
    const user = db.users.find(u => u.userId === req.user.userId);
    if (!user) {
        return res.status(404).json({ message: "User not found." });
    }
    res.json({ user: { userId: user.userId, username: user.username, avatar: user.avatar } });
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
