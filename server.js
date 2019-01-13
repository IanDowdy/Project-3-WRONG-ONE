const express = require('express');

const app = express();

app.get('/api/coders', (req, res) => {
    const coders = [
        {id: 1, firstName: "Ian", lastName: "Dowdy"},
        {id: 2, firstName: "Nicole", lastName: "Pike"},
        {id: 3, firstName: "Alexandria", lastName: "Toothman"},
        {id: 1, firstName: "Patricia", lastName: "Seade"},
        {id: 1, firstName: "Jennifer", lastName: "Tuten"}
    ];
    
    res.json(coders);
})

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}
    
const path = require('path');
    
app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, './client/build/public/index.html'));
    });


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
