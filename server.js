const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Dummy login
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if(username === "admin" && password === "123") {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

// Booking API
app.post("/book", (req, res) => {
  const booking = req.body;
  console.log("Booking received:", booking);

  res.json({ message: "Room booked successfully!" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
