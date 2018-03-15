// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

$(function() {
  function getNewName(){
    $.get('/newname', function(newName) {
      console.log(newName);
      $("#beer-name").text(newName.beerName);
      $("#brewery-name").text(newName.breweryName);

    });
  }
  getNewName();
  
  $('#regenerate-buttom').click(function(event) {
    
      $("#beer-name").text("Loading...");
      $("#brewery-name").text("Loading...");
    getNewName();
  });

});
