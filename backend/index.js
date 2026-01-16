const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/recommend", (req, res) => {
  const { skills, interests, location } = req.body;

  const internship = {
    title: "Software Development Intern",
    company: "Tata Consultancy Services",
    description:
      "Work on cutting-edge software solutions with experienced mentors.",
    location: "Bengaluru, Karnataka",
    duration: "6 months",
    stipend: "₹15,000/month",
    match: "95%",
    domain: "IT & Technology",
    applyLink: "https://www.tcs.com/careers"
  };

  res.json(internship);
});

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});










