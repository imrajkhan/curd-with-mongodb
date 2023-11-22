const express = require("express");
const mongoose = require("mongoose");
const blogRouter = require("./routes/BlogRoutes");

const app = express();
const PORT = 3001; // Define the desired port number

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/blogs", blogRouter);

// configure mongoose
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/CRUD",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB");
    }
  }
);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;

