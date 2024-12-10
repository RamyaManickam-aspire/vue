// server.js
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const app = express();
const port = 3000;

// In-memory users for demo purposes (Use a DB in a real application)
const users = [
  {
    id: 1,
    username: "user",
    password: "pass",
  },
];

const SECRET_KEY = "your-secret-key";

app.use(cors());
app.use(express.json());

// Login endpoint
app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "User not found" });
  }

  // Create JWT token using jwt.sign
  const payload = { id: user.id, username: user.username };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" }); // Token expires in 1 hour
  res.json({ token });
});

// Protect routes with JWT middleware
function authenticateToken(req, res, next) {
  const token = req.headers["authorization"]?.split(" ")[1]; // Bearer token
  if (!token) {
    return res.status(403).json({ message: "Token required" });
  }

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Invalid token" });
    }
    req.user = decoded;
    next();
  });
}

// Example protected route
app.get("/api/protected", authenticateToken, (req, res) => {
  res.json({ message: "This is a protected route", user: req.user });
});

app.post("/user", async (req, res) => {
  console.log(req);
  const { name, email } = req.body;
  users.push({ username: name, password: email });
  console.log(users);
  res.json({ users });
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
