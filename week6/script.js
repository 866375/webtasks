

buttons = document.querySelectorAll("button");

for (var i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener("click", fun);
}

function fun() {
	this.parentNode.setAttribute("data-status", "done");
}