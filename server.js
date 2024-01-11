const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());


// ------------------------- Import Pattern ------------------------- //

const transactionController = require("./controllers/transactionController");

// ------------------------- End Import Pattern ------------------------- //


// ------------------------- Define Routes ------------------------- //

// ------ Create Transaction ------ //

app.post('/api/transactions', transactionController.createNewTransaction);

// ------ End Create Transaction ------ //


// ------------------------- End Define Routes ------------------------- //


// ------------------------- Server Listen ------------------------- //

app.listen(PORT, () => {
    console.log(`Server is running successfully on PORT http://localhost:${PORT}`);
});

// ------------------------- End Server Listen ------------------------- //

module.exports = app;