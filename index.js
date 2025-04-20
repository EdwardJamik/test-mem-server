const app = require("./server.js");
require("dotenv").config();

app.listen(process.env.PORT, () => console.log(`Express running on PORT : ${process.env.PORT}`))