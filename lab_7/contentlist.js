
function addContent () {
	// add a list of items to the content div
	var items = ["hewey", "dewey", "louie"];
	
	// build the html string for a <ul> list
	//var items_html = "<ul>";
	var ul = document.createElement('ul');
	for (var i=0; i < items.length; i++) {
		//item = items[i];
		item = document.createElement('li');
		//items_html += "<li>" + item + "</li>";
		item.innerHTML = items[i];
		ul.appendChild(item);
	};
	//items_html += "</ul>";
	
	//items_html = document.createTextNode(items_html);
	// using javascript
	// 1. find the content div
	// 2. modify its html attribute by adding items_html
	//document.getElementById("content").innerHTML = items_html;
	document.getElementById("content").appendChild(ul);

}

