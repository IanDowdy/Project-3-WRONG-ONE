//Dependencies
var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");

// Require all models
var db = require("./models");

var PORT = process.env.PORT || 3000;

// Initialize Express
var app = express();

// Configure mongoose
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/appnotes";
mongoose.connect(MONGODB_URI);

// Use morgan logger for logging requests
app.use(logger("dev"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Make public a static folder
app.use(express.static("public"));

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/nytimesnba", { useNewUrlParser: true });

//Render tutorials
app.get("/learn", function (req, res) {
  db.Tutorial.find({})
    .then(function (dbTutorial) {
      console.log(dbTutorial);
      res.render("learn", {learn: dbTutorial});
    })
})

//Find all tutorials
app.get("/tutorials", function (req, res) {
  // Grab every document in the Tutorials collection
  db.Tutorial.find({})
    .then(function (dbTutorial) {
      // If we were able to successfully find Tutorials, send them back to the client.
      res.json(dbTutorial);
    })
    .catch(function (err) {
      // If an error occurred, send it to the client.
      res.json(err);
    });
});

//Route for notes
app.get("/notes", function (req, res) {
  // Grab every document in the Notes collection.
  db.Note.find({})
    .then(function (dbNote) {
      // If we were able to successfully find Notes, send them back to the client.
      res.json(dbNote);
    })
    .catch(function (err) {
      // If an error occurred, send it to the client.
      res.json(err);
    });
});

//Route for notes by ID
app.get("/notes/:id", function (req, res) {
  db.Note.findOne({ _id: req.params.id })
    .then(function (dbNote) {
      res.json(dbNote);
    })
    .catch(function (err) {
      res.json(err);
    });
});

//Find tutorial by specific ID to add note
app.get("/tutorials/:id", function (req, res) {
  db.Tutorial.findOne({ _id: req.params.id })
    .populate("note")
    .then(function (dbTutorial) {
      res.json(dbTutorial);
    })
    .catch(function (err) {
      res.json(err);
    });
});

// Save/update an tutorial's note
app.post("/tutorials/:id", function (req, res) {
  // Create a new note and pass the req.body to the entry.
  db.Note.create(req.body)
    .then(function (dbNote) {
      // If a Note was created successfully, find one Tutorial with an `_id` equal to `req.params.id`. Update the Tutorial to be associated with the new Note
      // { new: true } tells the query that we want it to return the updated User -- it returns the original by default
      return db.Tutorial.findOneAndUpdate({ _id: req.params.id }, { note: dbNote._id }, { new: true });
    })
    .then(function (dbTutorial) {
      // If we were able to successfully update an Tutorial, send it back to the client
      res.json(dbTutorial);
    })
    .catch(function (err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});

app.listen(PORT, function () {
  console.log("App running on port " + PORT + "!");
});