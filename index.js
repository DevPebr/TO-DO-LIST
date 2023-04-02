const express = require("express");
const path = require("path");
const routes = require("./routes/routes");

const app = express();
const port = process.env.PORT || 3000;

// Set view engine
app.set('view engine', 'ejs');

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Rota Home
app.use(routes);


app.listen(port, () => console.log("Server is running on port: " + port));