const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname)));
app.get('/', (req, res) => {
    res.sendFile(`${__dirname}`)
});

app.listen(8080, () => {
    console.log('Server started on port 8080');
})