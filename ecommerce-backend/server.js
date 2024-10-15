const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
const port = 3000;

const users = [{ email: "", password: "" }];

const JWT_SECRET = "your_jwt_secret";
app.use(cors());
app.use(express.json());

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    return res.status(400).send("Invalid credentials");
  }

  const token = jwt.sign({ email: user.email }, JWT_SECRET, {
    expiresIn: "1h",
  });

  res.json({ token });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
