/*==================
DATA TO LOAD TO PAGE
==================*/

// Create a function to get tutorials on page load and when scraping
function getTutorials() {
  $.getJSON("/tutorials", function (data) {
    console.log(data)
    for (var i = 0; i < data.length; i++) {
      $("#tutorials").append(`
    <p data-id="${data[i]._id}"><h4><strong><a href="${data[i].link}" target="_blank">${data[i].link}</a></strong></h4>
    <button data-id="${data[i]._id}"class="btn btn-danger save">Save Tutorial</button></p>
    <div id="${data[i]._id}"></div>
    <br>
    `);
    }
  });
}

//==============
//View notes for a specific tutorial.
$(document).on("click", ".viewNotes", function () {
  var thisId = $(this).attr("data-id");
  //Get tutorial and note data to match to one another.
  $.ajax({
      method: "GET",
      url: "/notes"
  }).then(function (initial) {
      $.ajax({
          method: "GET",
          url: "/tutorials/" + thisId
      }).then(function (data) {
          //Match notes to tutorials by title, then display the filtered result.
          const result = initial.filter(title => title.noteTitle === data.title);
          //Notify user if there are no notes yet.
          if (!result.length) {
              $('#note-' + thisId).html(`<div class="card">
                  <div class="card-body">
                    <h5 class="card-title">No Notes Yet</h5>
                    <p class="card-text">Be the first to add a note!</p>
                    <button class="btn btn-dark dismiss" data-id="${thisId}">Dismiss</button></p>
                  </div>
                </div>`)
          }
          //Display tutorial notes.
          else {
              for (let t = 0; t < result.length; t++) {
                  $('#note-' + thisId).append(
                      `<div class="card-${result[t]._id}">
                  <div class="card-body">
                    <h5 class="card-title">${result[t].title}</h5>
                    <p class="card-text">${result[t].body}</p>
                    <button data-id="${result[t]._id}" tutorial-id="${thisId}" class="btn btn-secondary closeNote">Close</button>
                      <button data-id="${result[t]._id}" tutorial-id="${thisId}"class="btn btn-danger deleteNote">Delete Note</button>
                  </div>
                </div>`)
                  console.log('data.note._id', data.note._id)
              }
          }
      });
  })
})

$(document).on("click", ".closeNote", function () {
  var thisId = $(this).attr("data-id");
  console.log('thisId', thisId);
  $(".card-" + thisId).empty();
})

$(document).on("click", ".dismiss", function () {
  var thisId = $(this).attr("data-id");
  $("#note-" + thisId).empty();
})

$(document).on("click", "#cancel", function () {
  console.log('cancel clicked');
  var thisId = $(this).attr("data-id");
  $("#add-note-" + thisId).empty();
})

$(document).on("click", ".deleteNote", function () {
  var thisId = $(this).attr("data-id");
  $.ajax({
      method: "DELETE",
      url: "/notes/" + thisId
  })
      .then(function (data) {
          console.log(data);
          $('.card-' + thisId).empty();
      });
})

//Save tutorial to "Saved Tutorials" page.
$(document).on("click", ".save", function () {
  var thisId = $(this).attr("data-id");
  $.ajax({
      method: "PUT",
      url: "/tutorials/" + thisId
  })
      .then(function (data) {
          console.log(data);
          //Remove the saved tutorial from the home page.
          $("#" + thisId).remove();
          location.reload();
      });
})

//Unsave tutorial from "Saved Tutorials" page.
$(document).on("click", ".unsave", function () {
  var thisId = $(this).attr("data-id");
  $.ajax({
      method: "DELETE",
      url: "/tutorials/" + thisId
  })
      .then(function (data) {
          console.log(data);
          // Remove the tutorial from the saved page.
          $("#" + thisId).remove();
          location.reload();
      });
})

$(document).on("click", ".addNote", function () {
  var thisId = $(this).attr("data-id");
  $.ajax({
      method: "GET",
      url: "/tutorials/" + thisId
  })
      .then(function (data) {
          console.log(data);
          //Allow user to write a note and save.
          $("#add-note-" + thisId).html(
              `<div class="card">
      <div class="card-body">
        <h5 class="card-title" data-card='${data.title}'>${data.title}</h5>
        <input id='titleinput' name='title' >
        <textarea id='bodyinput' name='body'></textarea>
        <button data-id='${data._id}' data-title='${data.title}' class="btn btn-success"id='savenote'>Save Note</button>
        <button data-id='${data._id}' class="btn btn-dark" id='cancel'>Cancel</button>
      </div>
    </div>`)
      });
});

$(document).on("click", "#savenote", function () {
  var thisId = $(this).attr("data-id");
  // Take user inputs and post.
  $.ajax({
      method: "POST",
      url: "/tutorials/" + thisId,
      data: {
          noteTitle: $(this).attr('data-title'),
          title: $("#titleinput").val(),
          body: $("#bodyinput").val()
      }
  })
      .then(function (data) {
          console.log(data);
          // Empty the notes section.
          $("#tutorialNotes").empty();
      });

  //Clear input and textarea.
  $("#titleinput").val("");
  $("#bodyinput").val("");
  location.reload()
});

$(document).on("click", ".scrape", function () {
  console.log('scrape clicked')
  $.ajax({
      method: "GET",
      url: "/tutorials"
  }).then(function () {
      console.log("scrape complete");
      location.reload();
  });
});
