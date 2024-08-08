const express = require('express');


const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); 
// Middleware to parse JSON bodies

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send('humspii dupsiiii');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});



// HTTP client side need to worry about
// --Protocol (HTTP/HTTPS)
// --Address(URL/IP/PORT)
// --Route
// --Headers,Body,Query Params
// --Method

// HTTP Server side need to worry about
// --Response Headers
// --Pesponse body
// --Status Codes