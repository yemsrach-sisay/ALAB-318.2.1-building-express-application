const express = require("express");
const app = express();
const port = 3000;

// Set Pug as the view engine
app.set("view engine", "pug");
app.set("views", "./views");

// Middleware
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
  res.render("index", {
    pageTitle: "Home",
    pageContent: "Welcome to our Express application!",
  });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.post("/submit", (req, res) => {
  console.log("Data submitted:", req.body.data);
  res.send("Success!");
});

// Serve static files
app.use(express.static("public"));

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// Custom middleware function to log request timestamp
const logTimestamp = (req, res, next) => {
  console.log(`Request received at ${new Date().toLocaleString()}`);
  next(); // Call next() to pass control to the next middleware function
};

// Use the middleware function in the application
app.use(logTimestamp);

// Route to handle download request
app.get("/download", (req, res) => {
  const imagePath = "public/images/example.jpg"; // Path to the image file
  res.download(imagePath); // Send the image file as a download response
});
