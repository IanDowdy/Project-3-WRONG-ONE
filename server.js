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

    /*
=======================================
SAVING/POPULATING COMMENTS VIA MONGOOSE
=======================================
//Route for comments by ID
app.get("/comments/:id", function (req, res) {
  db.Comment.findOne({ _id: req.params.id })
    //.populate("comment")
    .then(function (dbComment) {
      res.json(dbComment);
    })
    .catch(function (err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});

app.delete("/comments/:id", function (req, res) {
  // Using the id passed in the id parameter, prepare a query that updates the matching one in our db...
  db.Note.remove({ _id: req.params.id })
    .then(function (dbComment) {
      // If we were able to successfully find an Article with the given id, send it back to the client
      res.json(dbComment);
    })
    .catch(function (err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});

//Route for comments
app.get("/comments", function (req, res) {
  // Grab every document in the Articles collection
  db.Note.find({})
    .then(function (dbComment) {
      // If we were able to successfully find Articles, send them back to the client
      res.json(dbComment);
    })
    .catch(function (err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});

//Grab items & display associated comments
app.get("/items/:id", function (req, res) {
  db.Item.findOne({ _id: req.params.id })
    .populate("comment")
    .then(function (dbItem) {
      res.json(dbItem);
    })
    .catch(function (err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});
*/

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
