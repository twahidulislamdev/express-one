const express = require("express");
const app = express();
var cors = require("cors");
app.use(cors());
app.use(express.json());
const port = 3000;

const userList = [
  { name: "Emon", number: 123456, email: "emon10@gmail.com" },
  { name: "Twahidul", number: 123456, email: "twahid746@gmail.com" },
  { name: "Rakib", number: 123456, email: "rakib123@gmail.com" },
];

app.get("/", (req, res) => {
  res.send("Server Running");
});
app.get("/userlist", (req, res) => {
  res.send(userList);
});

app.post("/createuser", (req, res) => {
  const newUser = req.body;
  userList.push(newUser);
  res.json(userList);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
