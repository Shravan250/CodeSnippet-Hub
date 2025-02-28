require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running!");
});

app.get("/snippets", async (req, res) => {
  try {
    const snippets = await prisma.snippet.findMany();
    res.json(snippets);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch snippets" });
  }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
