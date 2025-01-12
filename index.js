require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
const address = "http://localhost:";
const routes = require('./routes/route');


app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.use('/', routes);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server running on port ${address}${port}`);
});