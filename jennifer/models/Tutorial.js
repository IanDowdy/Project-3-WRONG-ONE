var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
var TutorialSchema = new Schema({
    // Save note title to match it with the article title
    link: String,
});

// This creates our model from the above schema, using mongoose's model method
var Tutorial = mongoose.model("Tutorial", TutorialSchema);

// Export the Note model
module.exports = Tutorial;