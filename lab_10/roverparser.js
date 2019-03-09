 $(document).ready(function () {

  $('#retrieve-data').click(function () {
  var displayResources = $('#display-data');

  displayResources.text('Loading Rover Data');

  $.ajax({
  type: "GET",
  url: "roverdata.json",
  success: function(result)
  {
  console.log(result.photos);
  var photos = result.photos //this data contains an array called photos

  var output="<table><thead><tr><th>Rover</th><th>Camera</th><th>Image URL</th><th>Earth Date</th><th>Lounch data</th></thead><tbody>";
  for (var i in photos)
  {
    output+="<tr><td>" + photos[i].rover.name + "</td><td>"
    + photos[i].camera.full_name + "</td><td><img src='"
    + photos[i].img_src + "'></td><td>"
    + photos[i].earth_date + "</td><td>"
    + photos[i].launch_date + "</td></tr>";
  }
  output+="</tbody></table>";

  displayResources.html(output);
  $("table").addClass("table");
  }
  });

  });
 });
