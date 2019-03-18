$(function() {
  //document ready
  alert("document ready");

  $('#searchform').submit(function() {
    addItemtoList("example item");
    return false; //this just stops the page reloading
  });
});


function addItemtoList(item) {
  $('#results').append("<li>" + item + "</li>");
}
