require("dotenv").config({ quiet: true });

const PORT = process.env.PORT || 3000;

const express = require("express");
const bodyParser = require("body-parser");
const db = require("./models");
const morgan = require("morgan");

const authRoutes = require("./routes/auth.routes");
const userRoutes = require("./routes/user.routes");

const app = express();
app.use(bodyParser.json());
app.set("trust proxy", true);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));

db.sequelize.sync({ alter: true }).then(() => {
  console.log("Database Connected and Successfully Synced");
});

app.get("/", (req, res) => {
  return res.send("Welcome to CRUD Express API");
});

app.get("/health", (req, res) => {
  return res.status(200).send("OK");
});

app.use("/api/auth", authRoutes);
app.use("/api", userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
