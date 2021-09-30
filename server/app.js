const express = require('express');
const app = express();
const cors = require('cors');

const PORT = 4000 || process.env.PORT;

app.use(
    cors({
        origin: "*",
    })
);


const menu = require('./routers/menu');
const currency = require('./routers/currency');

app.use("/api/menu", menu);
app.use("/api/currency", currency);

app.listen(PORT, () => {
    console.log(`Server has been started on port: ${PORT}...`);
})