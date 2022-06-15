const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = 3001;
const calcPersistenceRoutes = require("./routes/calcPersistenceRoutes");

app.use("/persistence", express.static("persistence"));

app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"]
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(calcPersistenceRoutes);

app.listen(PORT, () => { 
    console.log(`Server listening on port: ${PORT}`);
});