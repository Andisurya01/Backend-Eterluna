require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT
const address = process.env.ADDRESS
const routes = require('./routes/route');


app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.use('/', routes);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// generate api key
app.post('/generate-api-key', (req, res) => {
    const newApiKey = uuidv4()
    res.status(200).json({
        apiKey: newApiKey
    })
})

app.listen(port, () => {
    console.log(`Server running on port ${address}${port}`);
});