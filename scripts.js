var dropList;
var btn;
var nav;

window.onload = function() {
	
	dropList = document.getElementById("cityList");
	btn = document.getElementById("btnList");
	nav = document.getElementById("nnn");
	btn.addEventListener("click", btnClick);

};

function btnClick() {
	if (dropList.display = "none"){
		dropList.display = "block";
		nav.display = "none";}
	else{
		dropList.display = "none";
		nav.display = "block";
		}
}
