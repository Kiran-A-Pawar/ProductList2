const express = require("express");
require("./db/product")
const app = express();
app.use(express.json())
const Contact = require("./models/product");
const router = require("./routers/product-rout");

const cors = require('cors');

const port = process.env.PORT || 3000;

app.use(router)

app.listen(port,() => {
       console.log(`Connection is live at port no.${port}`);
})

app.use('/product', router);