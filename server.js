const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const items = require('./routes/api/items');

const app = express();

const db = require('./config/keys').mongoURI;

app.get('/api/coders', (req, res) => {
    const coders = [
        {id: 1, firstName: "Ian", lastName: "Dowdy"},
        {id: 2, firstName: "Nicole", lastName: "Pike"},
        {id: 3, firstName: "Alexandria", lastName: "Toothman"},
        {id: 4, firstName: "Patricia", lastName: "Seade"},
        {id: 5, firstName: "Jennifer", lastName: "Tuten"}
    ];
    
    res.json(coders);
})


mongoose.connect(db, {useNewUrlParser: true})
.then(() => console.log('MongDB connected ^_^'))
.catch(err => console.log(err));

app.use('/api/items', items);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}
    

    
app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, './client/build/public/index.html'));
    });


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
