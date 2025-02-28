require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { Prisma } = require("@prisma/client");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running!");
});

app.get("/snippets", async (req, res) => {
  const snippets = await Prisma.snippets.findMany();
  res.json(snippets);
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
