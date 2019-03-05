$(document).ready(function() {
	//all code go in here
	$('#retrieve-resources').click(function() {
		var displayResources = $('#display-resources');
		displayResources.text('Loading data from JSON source...');

		//uses JQuery AJAX functionn to retrieve the JSON file. 
		$.ajax({
			type:"GET",
			url: "resources.json",
			success: function(result)
			{
			//build a table from resources
			var output = "<table><thead><tr><th>Name</th><th>Provider</th><th>URL</th></thead><tbody>";	
			for(var i in result) {
				output += "<tr><td>" + result[i].name + "</td><td>" + result[i].provider + "</td><td>" + result[i].url + "</td></tr>";
			}
			output += "</tbody></table>"; //closing table

			displayResources.html(output); 
			$("table").addClass("table"); //adds class table for styling
		});
	});
});
