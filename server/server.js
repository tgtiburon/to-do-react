const express = require("express");
const cors = require("cors");
const app = express();


// Middleware
app.use(cors());
app.use(express.json());

app.listen(7000, () => {
    console.log("Server has started on port 7000");
});



