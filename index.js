// const express = require("express");
// const app = express();
// const PORT = 3000;

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));

// app.use(express.static("public"));

// const express = require("express");
// const app = express();
// const PORT = 3000;

// app.use(express.static("public"));

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));

const pug = require("pug");

// Compile the source code
const compiledFunction = pug.compileFile("template.pug");

// Render a set of data
console.log(
  compiledFunction({
    name: "Timothy",
  })
);
("<p>Timothy's Pug source code!</p>");

// Render another set of data
console.log(
  compiledFunction({
    name: "Forbes",
  })
);
// "<p>Forbes's Pug source code!</p>"
// const pug = require("pug");

// Compile template.pug, and render a set of data
console.log(
  pug.renderFile("template.pug", {
    name: "Timothy",
  })
);
// "<p>Timothy's Pug source code!</p>"
