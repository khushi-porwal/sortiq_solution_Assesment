const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const cors = require("cors");
const connectDB = require("./config/db");
const router = require("./routes/productRouter")

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/products", router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server is successfully running ${PORT}`);
});