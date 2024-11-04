// Create web server
const express = require("express");
const app = express();

// Get the comments
app.get("/comments", (req, res) => {
  res.send("Get the comments");
});

// Add a comment
app.post("/comments", (req, res) => {
  res.send("Add a comment");
});

// Update a comment
app.put("/comments/:id", (req, res) => {
  res.send("Update a comment");
});

// Delete a comment
app.delete("/comments/:id", (req, res) => {
  res.send("Delete a comment");
});

// Listen on port 3000
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
