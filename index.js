if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const path = require("path");

const homeRoutes = require("./routes/home");
const familyRoutes = require("./routes/family");
const facultyRoutes = require("./routes/faculty");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.static(path.join(__dirname, "public")));

app.use("/", homeRoutes);
app.use("/family", familyRoutes);
app.use("/faculty", facultyRoutes);

const port = process.env.PORT || 3000;
app.listen(port, (req, res) => {
  console.log(`serving on port ${port}`);
});
