$(function(){
	// usual main starting point when web page loads

//Selects Button, toggles the fadeout and in for the circle interface and map.
$( "#btn1" ).click(function() {
  $('#circleInterface').fadeToggle( "slow", "linear" );
  $( '#circleInterface' ).promise().done(function() {
    $('#map').fadeToggle( "slow", "linear" );
  });
});

//This is to prevent from showing the map on the same "page" of the circle interface.
if ($('#circleInterface').is(":visible")) {
  $('#map').fadeToggle( "slow", "linear" );
}


});
