function add() {
	var ul = document.createElement('ul');
	item = document.createElement('li');
	item.innerHTML = items[i];
	ul.appendChild(item);
	document.getElementById("content").appendChild(ul);
}

