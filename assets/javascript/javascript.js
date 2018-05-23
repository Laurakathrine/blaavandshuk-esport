function dropDown(){
	var content = document.getElementById('myDropdown');
	var overlay = document.getElementById('dropdown-overlay');
	var dropbtn = document.getElementById('trigger');

	content.style.display = 'block';
	overlay.style.display = 'block';

	dropbtn.classList.add('active');
}

function closeDropdown(){
var content = document.getElementById('myDropdown');
var overlay = document.getElementById('dropdown-overlay');
var dropbtn = document.getElementById('trigger');

	content.style.display = 'none';
	overlay.style.display = 'none';	
	dropbtn.classList.remove('active');
}

function nextSlide() {
    var q = function(sel) { return document.querySelector(sel); }
    q(".slides").appendChild(q(".slides img:first-child"));
}
setInterval(nextSlide, 3000);